import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonToolbar,
  useIonAlert,
} from "@ionic/react";
import { TitleHeader } from "./HomeScreen";
import "./Tab1.css";
import Badge from "../components/Badge";
import { UserData } from "../data/userdata";
import { badges } from "../data/contentdata";

interface BadgeScreenProps {
  userValue: UserData | undefined;
  setUserValue: React.Dispatch<React.SetStateAction<UserData | undefined>>;
}

const BadgeScreen: React.FC<BadgeScreenProps> = ({
  userValue,
  setUserValue,
}) => {
  const [present] = useIonAlert();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <TitleHeader>Badges</TitleHeader>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          {badges.map((badge, index) => {
            if (index % 2 === 0) {
              const completedBadgeCol1 = userValue
                ? userValue.badges
                  ? userValue.badges[badge.key].completed
                  : false
                : false;

              if (index + 1 < badges.length) {
                const completedBadgeCol2 = userValue
                  ? userValue.badges
                    ? userValue.badges[badges[index + 1].key].completed
                    : false
                  : false;
                return (
                  <IonRow style={{ margin: "50px" }}>
                    <IonCol>
                      <Badge badge={badge} completed={completedBadgeCol1} />
                    </IonCol>
                    <IonCol>
                      <Badge
                        badge={badges[index + 1]}
                        completed={completedBadgeCol2}
                      />
                    </IonCol>
                  </IonRow>
                );
              } else {
                return (
                  <IonRow style={{ margin: "50px" }}>
                    <IonCol>
                      <Badge badge={badge} completed={completedBadgeCol1} />
                    </IonCol>
                    <IonCol></IonCol>
                  </IonRow>
                );
              }
            } else {
              return null;
            }
          })}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default BadgeScreen;
