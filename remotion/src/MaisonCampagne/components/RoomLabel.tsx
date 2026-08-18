import { interpolate, useCurrentFrame } from "remotion";
import { INK } from "../theme";

type Props = {
  x: number;
  y: number;
  width: number;
  height: number;
  label: string;
  sub?: string;
  area: number;
  highlight?: boolean;
  delay?: number;
};

export const RoomLabel: React.FC<Props> = ({
  x,
  y,
  width,
  height,
  label,
  sub,
  area,
  highlight,
  delay = 0,
}) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [delay, delay + 16], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width,
        height,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        opacity,
        pointerEvents: "none",
        padding: 4,
      }}
    >
      <span
        style={{
          fontSize: highlight ? 20 : 16,
          fontWeight: highlight ? 700 : 600,
          color: INK.primary,
          lineHeight: 1.15,
        }}
      >
        {label}
      </span>
      {sub ? (
        <span style={{ fontSize: 12, color: INK.secondary, marginTop: 2 }}>
          {sub}
        </span>
      ) : null}
      <span style={{ fontSize: 12, color: INK.muted, marginTop: 2 }}>
        {area.toFixed(1)} m²
      </span>
    </div>
  );
};
