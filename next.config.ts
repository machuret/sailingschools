import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // The editorial guide writes every path with a trailing slash; match it so there is
  // exactly one URL form for each page.
  trailingSlash: true,
  async redirects() {
    // The launch build shipped two pages off the specified scheme. Nothing links to the
    // old paths externally, but the redirects cost nothing and cover anything bookmarked.
    // Sources carry the trailing slash so trailingSlash normalisation does not add a hop.
    return [
      {
        source: '/courses/rya-competent-crew/',
        destination: '/rya/competent-crew/',
        permanent: true,
      },
      {
        source: '/pathways/learn-to-sail-from-scratch/',
        destination: '/pathways/complete-beginner/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
