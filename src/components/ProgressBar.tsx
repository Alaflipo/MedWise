import { IonProgressBar } from "@ionic/react";

interface ProgressBarProps {
  level: number;
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ level, progress }) => {
  return <IonProgressBar value={progress}></IonProgressBar>;
};

export default ProgressBar;
