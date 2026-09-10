'use client';

import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

/**
 * Cycles light → dark → follow the system. The stored value is read by an
 * inline script in the document head before first paint, so the page never
 * flashes the wrong theme.
 */
export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('system');
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = (() => {
      try {
        return localStorage.getItem('theme') as Theme | null;
      } catch {
        return null;
      }
    })();
    setTheme(stored ?? 'system');
    setReady(true);
  }, []);

  const apply = (next: Theme) => {
    setTheme(next);
    const root = document.documentElement;
    if (next === 'system') root.removeAttribute('data-theme');
    else root.setAttribute('data-theme', next);
    try {
      if (next === 'system') localStorage.removeItem('theme');
      else localStorage.setItem('theme', next);
    } catch {
      /* storage can be unavailable; the choice still applies for this page */
    }
  };

  const next: Theme = theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light';
  const label =
    theme === 'light'
      ? 'Daylight theme. Switch to night'
      : theme === 'dark'
        ? 'Night theme. Follow system instead'
        : 'Following system theme. Switch to daylight';
  const icon = theme === 'light' ? 'ph-sun' : theme === 'dark' ? 'ph-moon-stars' : 'ph-circle-half';

  return (
    <button
      className="theme-btn"
      type="button"
      onClick={() => apply(next)}
      aria-label={label}
      title={label}
      // Rendered with the system icon until the stored choice is read, so the
      // markup matches on the server and the client.
      suppressHydrationWarning
    >
      <i className={`ph-duotone ${ready ? icon : 'ph-circle-half'}`} aria-hidden="true" />
    </button>
  );
}
