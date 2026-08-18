import { interpolate, useCurrentFrame } from "remotion";
import { CATEGORICAL } from "../theme";

type Props = {
  x: number;
  y: number;
  width: number;
  height: number;
  delay?: number;
  rows?: number;
};

// Traits pointillés qui "coulent" d'ouest en est pour évoquer la
// ventilation traversante (mur extérieur de chaque côté de la pièce).
export const VentilationArrows: React.FC<Props> = ({
  x,
  y,
  width,
  height,
  delay = 0,
  rows = 2,
}) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [delay, delay + 20], [0, 0.85], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const flow = (frame * 2.4) % 18;

  return (
    <g opacity={opacity}>
      <defs>
        <marker
          id={`arrow-${x}-${y}`}
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M0,0 L10,5 L0,10 z" fill={CATEGORICAL.blue} />
        </marker>
      </defs>
      {Array.from({ length: rows }).map((_, i) => {
        // Rangées près des bords haut/bas plutôt qu'au centre, pour ne pas
        // chevaucher le libellé de la pièce.
        const fraction = rows === 1 ? 0.5 : 0.16 + (0.68 / (rows - 1)) * i;
        const rowY = y + height * fraction;
        return (
          <line
            key={i}
            x1={x + 10}
            x2={x + width - 14}
            y1={rowY}
            y2={rowY}
            stroke={CATEGORICAL.blue}
            strokeWidth={2.5}
            strokeDasharray="9 9"
            strokeDashoffset={-flow}
            markerEnd={`url(#arrow-${x}-${y})`}
          />
        );
      })}
    </g>
  );
};
