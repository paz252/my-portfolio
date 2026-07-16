import "./MetallicText.css";

/**
 * MetallicText
 * Text filled with a fixed metallic (blue-violet-magenta) gradient.
 * A separate bright shine band sweeps across the letters once per
 * `period`, then pauses before running again — the base gradient
 * itself never moves.
 *
 * Props:
 *  - children: text/content to render
 *  - period: seconds for one full sweep+pause cycle (default 7 — slow)
 *  - angle: gradient angle in degrees (default 90, i.e. left-to-right)
 *  - className: extra classes to merge in
 *  - style: extra inline styles to merge in
 */
export function MetallicText({
  children,
  period = 8,
  angle = 90,
  className = "",
  style = {},
}) {
  return (
    <span
      className={`metallic-text ${className}`}
      style={{
        "--metallic-angle": `${angle}deg`,
        "--metallic-period": `${period}s`,
        ...style,
      }}
    >
      {children}
    </span>
  );
}

export default MetallicText;
