import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { INK } from "../theme";

type Props = {
  title: string;
  subtitle?: string;
  delay?: number;
};

export const SceneTitle: React.FC<Props> = ({ title, subtitle, delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = spring({
    frame: frame - delay,
    fps,
    config: { damping: 200 },
  });

  return (
    <div
      style={{
        opacity: progress,
        transform: `translateY(${(1 - progress) * 24}px)`,
        textAlign: "center",
        padding: "0 64px",
      }}
    >
      <h1
        style={{
          fontSize: 46,
          fontWeight: 700,
          color: INK.primary,
          margin: 0,
          lineHeight: 1.15,
          letterSpacing: -0.5,
        }}
      >
        {title}
      </h1>
      {subtitle ? (
        <p
          style={{
            fontSize: 23,
            color: INK.secondary,
            margin: "16px 0 0",
            lineHeight: 1.4,
          }}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
};
