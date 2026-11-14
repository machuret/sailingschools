import { cache } from 'react';
import { connection } from 'next/server';

export function liveDirectory<T>(fallback: T) {
  let previous: { etag: string; data: T } | undefined;
  return cache(async (): Promise<T> => {
    await connection();
    const cached = previous;
    try {
      const response = await fetch('https://yousail.com.au/api/live-directory/sailingschools', {
        cache: 'no-store',
        headers: cached ? { 'If-None-Match': cached.etag } : {},
        signal: AbortSignal.timeout(45000),
      });
      if (response.status === 304 && cached) return cached.data;
      if (!response.ok) throw new Error('Directory returned ' + response.status);
      const data: T = await response.json();
      const etag = response.headers.get('etag');
      if (etag) previous = { etag, data };
      return data;
    } catch (error) {
      console.error('Live sailingschools feed unavailable', error instanceof Error ? error.message : 'request failed');
      return cached?.data ?? fallback;
    }
  });
}
