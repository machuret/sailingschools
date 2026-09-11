'use client';

import { useState } from 'react';

type Theme = 'light' | 'dark';

/**
 * Two states, light and dark, defaulting to light.
 *
 * There is deliberately no "follow the system" option: the site does not read
 * prefers-color-scheme, because the Coastal palette is the brand and every
 * visitor should meet it first whatever their OS is set to. A third state would
 * be indistinguishable from light and only confuse the control.
 *
 * The stored choice is applied by an inline script in the document head before
 * first paint, so the page never flashes the wrong theme.
 */
export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() =>
    typeof document !== 'undefined' && document.documentElement.dataset.theme === 'dark'
      ? 'dark'
      : 'light',
  );

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    const root = document.documentElement;
    if (next === 'dark') root.setAttribute('data-theme', 'dark');
    else root.removeAttribute('data-theme');
    try {
      if (next === 'dark') localStorage.setItem('theme', 'dark');
      else localStorage.removeItem('theme');
    } catch {
      /* the choice still applies for this page */
    }
  };

  const isDark = theme === 'dark';
  const label = isDark ? 'Switch to the daylight theme' : 'Switch to the night theme';

  return (
    <button
      className="theme-btn"
      type="button"
      onClick={toggle}
      aria-label={label}
      aria-pressed={isDark}
      title={label}
      suppressHydrationWarning
    >
      <i className={`ph-duotone ${isDark ? 'ph-sun' : 'ph-moon-stars'}`} aria-hidden="true" />
    </button>
  );
}
