import { IonImg, IonThumbnail } from "@ionic/react";

interface AvatarProps {
  feeling: number;
}

const avatarImgs = [
  "assets/feeling-1.png",
  "assets/feeling-2.png",
  "assets/feeling-3.png",
  "assets/feeling-4.png",
  "assets/feeling-5.png",
];

const Avatar: React.FC<AvatarProps> = ({ feeling }) => {
  const index = Math.round(feeling / 2) < 5 ? Math.round(feeling / 2) : 4;

  return (
    <div style={{ margin: "20px" }}>
      <IonThumbnail>
        <IonImg src={avatarImgs[index]} />
      </IonThumbnail>
    </div>
  );
};

export default Avatar;
