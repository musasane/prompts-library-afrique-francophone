import { interpolate, useCurrentFrame, Easing } from "remotion";

type Props = {
  from?: number;
  to: number;
  startFrame?: number;
  durationInFrames?: number;
  format: (n: number) => string;
};

export const Counter: React.FC<Props> = ({
  from = 0,
  to,
  startFrame = 0,
  durationInFrames = 45,
  format,
}) => {
  const frame = useCurrentFrame();
  const value = interpolate(
    frame,
    [startFrame, startFrame + durationInFrames],
    [from, to],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.cubic),
    },
  );
  return <>{format(value)}</>;
};
