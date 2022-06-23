import { IonImg, IonThumbnail } from "@ionic/react";
import styled from "styled-components";
import { BadgeContent } from "../data/contentdata";

interface BadgeProps {
  badge: BadgeContent;
  completed: boolean;
}

const BadgeText = styled.p<{ complete: boolean }>`
  text-align: center;
  margin: auto;
  color: ${(props) => (props.complete ? "#468895" : "#8baeb5")};
  font-size: 30px;
  font-weight: bold;
`;

const silverEmptyBadge = "/assets/badges/shield-silver-21-blank-1000.png";
const goldEmptyBadge = "/assets/badges/shield-gold-21-blank-1000.png";

const Badge: React.FC<BadgeProps> = ({ badge, completed }) => {
  return (
    <div>
      <IonImg
        src={
          completed
            ? badge.badge
            : badge.color === "silver"
            ? silverEmptyBadge
            : goldEmptyBadge
        }
      />
      <BadgeText complete={completed}>{badge.title}</BadgeText>
    </div>
  );
};

export default Badge;
