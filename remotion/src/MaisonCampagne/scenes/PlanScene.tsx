import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { AnimatedRect } from "../components/AnimatedRect";
import { RoomLabel } from "../components/RoomLabel";
import { VentilationArrows } from "../components/VentilationArrows";
import {
  CANVAS_LEFT,
  CANVAS_TOP,
  HOUSE_LEFT_PX,
  HOUSE_TOP_PX,
  ROOMS,
  SCALE_PX_PER_M,
  TERRAIN_PX_HEIGHT,
  TERRAIN_PX_WIDTH,
} from "../data";
import { INK, SURFACE } from "../theme";

const ROOM_START_DELAY = 40;
const ROOM_STAGGER = 18;
const ROOM_DRAW_DURATION = 22;

export const PlanScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headingOpacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const parentsRoom = ROOMS.find((r) => r.id === "parents")!;
  const calloutDelay = ROOM_START_DELAY + ROOMS.length * ROOM_STAGGER + 20;

  const calloutProgress = spring({
    frame: frame - calloutDelay,
    fps,
    config: { damping: 200 },
  });

  const parentsPxY =
    HOUSE_TOP_PX + (parentsRoom.y + parentsRoom.h / 2) * SCALE_PX_PER_M;
  const parentsPxRight =
    HOUSE_LEFT_PX + parentsRoom.w * SCALE_PX_PER_M;
  const calloutX = parentsPxRight + 40;
  const calloutWidth = 420;

  return (
    <AbsoluteFill>
      <div
        style={{ textAlign: "center", marginTop: 40, opacity: headingOpacity }}
      >
        <h2 style={{ fontSize: 34, color: INK.primary, margin: 0 }}>
          Plan de la maison — ventilation traversante sur toutes les pièces
        </h2>
      </div>

      <svg
        width={CANVAS_LEFT * 2 + TERRAIN_PX_WIDTH}
        height={CANVAS_TOP + TERRAIN_PX_HEIGHT + 120}
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        {/* Terrain */}
        <AnimatedRect
          x={CANVAS_LEFT}
          y={CANVAS_TOP}
          width={TERRAIN_PX_WIDTH}
          height={TERRAIN_PX_HEIGHT}
          stroke={SURFACE.terrainStroke}
          strokeWidth={3}
          fill={SURFACE.terrainFill}
          fillOpacity={1}
          delay={0}
          drawDuration={24}
        />

        {/* Pièces */}
        {ROOMS.map((room, i) => {
          const delay = ROOM_START_DELAY + i * ROOM_STAGGER;
          const rx = HOUSE_LEFT_PX + room.x * SCALE_PX_PER_M;
          const ry = HOUSE_TOP_PX + room.y * SCALE_PX_PER_M;
          const rw = room.w * SCALE_PX_PER_M;
          const rh = room.h * SCALE_PX_PER_M;
          return (
            <g key={room.id}>
              <AnimatedRect
                x={rx}
                y={ry}
                width={rw}
                height={rh}
                stroke={room.highlight ? room.fill : INK.primary}
                strokeWidth={room.highlight ? 4 : 2}
                fill={room.fill}
                fillOpacity={room.highlight ? 0.28 : 0.16}
                delay={delay}
                drawDuration={ROOM_DRAW_DURATION}
              />
              {room.ventilated ? (
                <VentilationArrows
                  x={rx}
                  y={ry}
                  width={rw}
                  height={rh}
                  delay={delay + ROOM_DRAW_DURATION + 14}
                />
              ) : null}
            </g>
          );
        })}
      </svg>

      {ROOMS.map((room, i) => {
        const delay = ROOM_START_DELAY + i * ROOM_STAGGER + 12;
        const rx = HOUSE_LEFT_PX + room.x * SCALE_PX_PER_M;
        const ry = HOUSE_TOP_PX + room.y * SCALE_PX_PER_M;
        const rw = room.w * SCALE_PX_PER_M;
        const rh = room.h * SCALE_PX_PER_M;
        return (
          <RoomLabel
            key={room.id}
            x={rx}
            y={ry}
            width={rw}
            height={rh}
            label={room.label}
            sub={room.sub}
            area={room.w * room.h}
            highlight={room.highlight}
            delay={delay}
          />
        );
      })}

      {/* Callout — chambre parents */}
      <svg
        width={CANVAS_LEFT * 2 + TERRAIN_PX_WIDTH}
        height={CANVAS_TOP + TERRAIN_PX_HEIGHT + 120}
        style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}
      >
        <line
          x1={parentsPxRight}
          y1={parentsPxY}
          x2={calloutX}
          y2={parentsPxY}
          stroke={parentsRoom.fill}
          strokeWidth={2}
          opacity={calloutProgress}
        />
      </svg>
      <div
        style={{
          position: "absolute",
          left: calloutX,
          top: parentsPxY - 58,
          width: calloutWidth,
          opacity: calloutProgress,
          transform: `translateX(${(1 - calloutProgress) * 24}px)`,
          background: SURFACE.card,
          border: `2px solid ${parentsRoom.fill}`,
          borderRadius: 12,
          padding: "14px 18px",
          boxShadow: "0 8px 24px rgba(11,11,11,0.08)",
        }}
      >
        <div style={{ fontSize: 18, fontWeight: 700, color: INK.primary }}>
          ★ Chambre parents — la plus grande pièce
        </div>
        <div style={{ fontSize: 15, color: INK.secondary, marginTop: 6 }}>
          Fenêtres sur les deux façades (est/ouest) pour une ventilation
          naturelle traversante, jour et nuit.
        </div>
      </div>
    </AbsoluteFill>
  );
};
