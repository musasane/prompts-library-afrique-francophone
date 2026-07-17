import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { AnimatedRect } from "../components/AnimatedRect";
import { Counter } from "../components/Counter";
import {
  CANVAS_LEFT,
  CANVAS_TOP,
  COMPOSITION_HEIGHT,
  COMPOSITION_WIDTH,
  TERRAIN_AREA_M2,
  TERRAIN_DEPTH_M,
  TERRAIN_PX_HEIGHT,
  TERRAIN_PX_WIDTH,
  TERRAIN_WIDTH_M,
} from "../data";
import { INK, SURFACE } from "../theme";

export const TerrainScene: React.FC = () => {
  const frame = useCurrentFrame();
  const headingOpacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const dimLabelOpacity = interpolate(frame, [30, 45], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const areaOpacity = interpolate(frame, [55, 75], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill>
      <div
        style={{
          textAlign: "center",
          marginTop: 170,
          opacity: headingOpacity,
          padding: "0 48px",
        }}
      >
        <h2 style={{ fontSize: 34, color: INK.primary, margin: 0 }}>
          Un terrain de 15 × 20 mètres
        </h2>
      </div>

      <svg
        width={COMPOSITION_WIDTH}
        height={COMPOSITION_HEIGHT}
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        <AnimatedRect
          x={CANVAS_LEFT}
          y={CANVAS_TOP}
          width={TERRAIN_PX_WIDTH}
          height={TERRAIN_PX_HEIGHT}
          stroke={SURFACE.terrainStroke}
          strokeWidth={4}
          fill={SURFACE.terrainFill}
          fillOpacity={1}
          delay={5}
          drawDuration={40}
        />
      </svg>

      <div
        style={{
          position: "absolute",
          left: CANVAS_LEFT,
          top: CANVAS_TOP - 38,
          width: TERRAIN_PX_WIDTH,
          textAlign: "center",
          fontSize: 22,
          fontWeight: 600,
          color: INK.secondary,
          opacity: dimLabelOpacity,
        }}
      >
        {TERRAIN_WIDTH_M} m
      </div>
      <div
        style={{
          position: "absolute",
          left: CANVAS_LEFT - 96,
          top: CANVAS_TOP + TERRAIN_PX_HEIGHT / 2 - 14,
          width: 70,
          textAlign: "right",
          fontSize: 22,
          fontWeight: 600,
          color: INK.secondary,
          opacity: dimLabelOpacity,
        }}
      >
        {TERRAIN_DEPTH_M} m
      </div>

      <div
        style={{
          position: "absolute",
          left: CANVAS_LEFT,
          top: CANVAS_TOP + TERRAIN_PX_HEIGHT / 2 - 30,
          width: TERRAIN_PX_WIDTH,
          textAlign: "center",
          opacity: areaOpacity,
        }}
      >
        <div style={{ fontSize: 44, fontWeight: 700, color: INK.primary }}>
          <Counter
            to={TERRAIN_AREA_M2}
            startFrame={55}
            durationInFrames={30}
            format={(n) => `${Math.round(n)} m²`}
          />
        </div>
        <div style={{ fontSize: 18, color: INK.secondary, marginTop: 4 }}>
          de surface disponible
        </div>
      </div>
    </AbsoluteFill>
  );
};
