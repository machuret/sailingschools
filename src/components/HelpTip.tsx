export default function HelpTip({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <details className="help-tip">
      <summary aria-label={label}>?</summary>
      <span role="tooltip">{children}</span>
    </details>
  );
}
