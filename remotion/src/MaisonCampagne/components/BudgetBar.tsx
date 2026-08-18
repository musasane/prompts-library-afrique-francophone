import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { INK } from "../theme";
import { BudgetItem, BUDGET_MAX_ITEM, BUDGET_TOTAL, formatFCFA } from "../data";

type Props = {
  item: BudgetItem;
  trackWidth: number;
  delay: number;
};

export const BudgetBar: React.FC<Props> = ({ item, trackWidth, delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({
    frame: frame - delay,
    fps,
    config: { damping: 200, mass: 0.6 },
  });
  const labelOpacity = interpolate(frame, [delay + 8, delay + 24], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const targetWidth = (item.amount / BUDGET_MAX_ITEM) * trackWidth;
  const barWidth = Math.max(4, targetWidth * progress);
  const pct = Math.round((item.amount / BUDGET_TOTAL) * 100);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 18,
          color: INK.secondary,
          opacity: labelOpacity,
        }}
      >
        <span style={{ fontWeight: 600, color: INK.primary }}>
          {item.label}
        </span>
        <span style={{ fontVariantNumeric: "tabular-nums" }}>
          {formatFCFA(item.amount)} · {pct}%
        </span>
      </div>
      <div
        style={{
          width: trackWidth,
          height: 22,
          background: INK.gridline,
          borderRadius: 4,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: barWidth,
            height: "100%",
            background: item.color,
            borderRadius: 4,
          }}
        />
      </div>
    </div>
  );
};
