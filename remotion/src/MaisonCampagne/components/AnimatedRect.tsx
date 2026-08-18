import { interpolate, useCurrentFrame, Easing } from "remotion";

type Props = {
  x: number;
  y: number;
  width: number;
  height: number;
  stroke: string;
  strokeWidth?: number;
  fill?: string;
  fillOpacity?: number;
  delay?: number;
  drawDuration?: number;
  rx?: number;
};

export const AnimatedRect: React.FC<Props> = ({
  x,
  y,
  width,
  height,
  stroke,
  strokeWidth = 3,
  fill = "none",
  fillOpacity = 0,
  delay = 0,
  drawDuration = 28,
  rx = 0,
}) => {
  const frame = useCurrentFrame();
  const perimeter = 2 * (width + height);

  const drawProgress = interpolate(
    frame,
    [delay, delay + drawDuration],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.cubic),
    },
  );

  const fillProgress = interpolate(
    frame,
    [delay + drawDuration * 0.5, delay + drawDuration * 1.4],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      rx={rx}
      fill={fill}
      fillOpacity={fillOpacity * fillProgress}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeDasharray={perimeter}
      strokeDashoffset={perimeter * (1 - drawProgress)}
    />
  );
};
