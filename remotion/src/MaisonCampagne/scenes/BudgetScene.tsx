import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { BudgetBar } from "../components/BudgetBar";
import { Counter } from "../components/Counter";
import { BUDGET_ITEMS, BUDGET_TOTAL, formatFCFA } from "../data";
import { INK } from "../theme";

const BAR_START_DELAY = 25;
const BAR_STAGGER = 12;
const TRACK_WIDTH = 640;

export const BudgetScene: React.FC = () => {
  const frame = useCurrentFrame();
  const headingOpacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ alignItems: "center" }}>
      <div style={{ textAlign: "center", marginTop: 56, opacity: headingOpacity }}>
        <h2 style={{ fontSize: 30, color: INK.secondary, margin: 0 }}>
          Répartition du budget de construction
        </h2>
        <div style={{ fontSize: 64, fontWeight: 800, color: INK.primary, marginTop: 6 }}>
          <Counter
            to={BUDGET_TOTAL}
            startFrame={0}
            durationInFrames={40}
            format={formatFCFA}
          />
        </div>
      </div>

      <div
        style={{
          marginTop: 56,
          display: "flex",
          flexDirection: "column",
          gap: 22,
        }}
      >
        {BUDGET_ITEMS.map((item, i) => (
          <BudgetBar
            key={item.id}
            item={item}
            trackWidth={TRACK_WIDTH}
            delay={BAR_START_DELAY + i * BAR_STAGGER}
          />
        ))}
      </div>
    </AbsoluteFill>
  );
};
