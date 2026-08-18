import { AbsoluteFill, Sequence } from "remotion";
import { IntroScene } from "./scenes/IntroScene";
import { TerrainScene } from "./scenes/TerrainScene";
import { PlanScene } from "./scenes/PlanScene";
import { BudgetScene } from "./scenes/BudgetScene";
import { OutroScene } from "./scenes/OutroScene";
import { SURFACE, FONT_FAMILY } from "./theme";

export const INTRO_DURATION = 90;
export const TERRAIN_DURATION = 120;
export const PLAN_DURATION = 270;
export const BUDGET_DURATION = 180;
export const OUTRO_DURATION = 60;

export const TOTAL_DURATION =
  INTRO_DURATION +
  TERRAIN_DURATION +
  PLAN_DURATION +
  BUDGET_DURATION +
  OUTRO_DURATION;

export const MaisonCampagneVideo: React.FC = () => {
  return (
    <AbsoluteFill
      style={{ backgroundColor: SURFACE.page, fontFamily: FONT_FAMILY }}
    >
      <Sequence durationInFrames={INTRO_DURATION}>
        <IntroScene />
      </Sequence>
      <Sequence from={INTRO_DURATION} durationInFrames={TERRAIN_DURATION}>
        <TerrainScene />
      </Sequence>
      <Sequence
        from={INTRO_DURATION + TERRAIN_DURATION}
        durationInFrames={PLAN_DURATION}
      >
        <PlanScene />
      </Sequence>
      <Sequence
        from={INTRO_DURATION + TERRAIN_DURATION + PLAN_DURATION}
        durationInFrames={BUDGET_DURATION}
      >
        <BudgetScene />
      </Sequence>
      <Sequence
        from={
          INTRO_DURATION + TERRAIN_DURATION + PLAN_DURATION + BUDGET_DURATION
        }
        durationInFrames={OUTRO_DURATION}
      >
        <OutroScene />
      </Sequence>
    </AbsoluteFill>
  );
};
