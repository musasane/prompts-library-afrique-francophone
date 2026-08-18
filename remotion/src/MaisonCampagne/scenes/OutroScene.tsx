import { AbsoluteFill } from "remotion";
import { SceneTitle } from "../components/SceneTitle";

export const OutroScene: React.FC = () => {
  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
      <SceneTitle
        title="Prompts Library — Afrique Francophone"
        subtitle="Des plans réalistes, adaptés au budget et au climat local"
      />
    </AbsoluteFill>
  );
};
