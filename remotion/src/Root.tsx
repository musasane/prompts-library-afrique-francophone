import "./index.css";
import { Composition } from "remotion";
import {
  MaisonCampagneVideo,
  TOTAL_DURATION,
} from "./MaisonCampagne";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="MaisonCampagne"
        component={MaisonCampagneVideo}
        durationInFrames={TOTAL_DURATION}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
