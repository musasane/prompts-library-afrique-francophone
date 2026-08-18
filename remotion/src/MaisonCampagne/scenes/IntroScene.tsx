import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { SceneTitle } from "../components/SceneTitle";
import { INK } from "../theme";

export const IntroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const iconOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const iconY = interpolate(frame, [0, 20], [20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{ alignItems: "center", justifyContent: "center", gap: 28 }}
    >
      <svg
        width={140}
        height={110}
        viewBox="0 0 140 110"
        style={{ opacity: iconOpacity, transform: `translateY(${iconY}px)` }}
      >
        <path
          d="M10 55 L70 10 L130 55"
          fill="none"
          stroke={INK.primary}
          strokeWidth={5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x={24}
          y={55}
          width={92}
          height={45}
          fill="none"
          stroke={INK.primary}
          strokeWidth={5}
        />
        <rect x={62} y={72} width={16} height={28} fill={INK.primary} />
      </svg>
      <SceneTitle
        title="Maison Familiale à la Campagne"
        subtitle="Terrain 15 m × 20 m · Budget 5 000 000 FCFA · Bien aérée"
        delay={10}
      />
    </AbsoluteFill>
  );
};
