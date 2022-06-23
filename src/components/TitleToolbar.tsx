import {
  IonAlert,
  IonButton,
  IonCol,
  IonGrid,
  IonImg,
  IonItem,
  IonLabel,
  IonRow,
  IonThumbnail,
  IonToolbar,
} from "@ionic/react";
import styled from "styled-components";
import { BadgeContent } from "../data/contentdata";
import { UserData } from "../data/userdata";
import { TitleHeader } from "../pages/HomeScreen";
import Avatar from "./Avatar";
import ProgressBar from "./ProgressBar";

interface TitleToolbarProps {
  profile: boolean | undefined;
  level: boolean | undefined;
  userValue: UserData | undefined;
  showAlert?: boolean;
  setShowAlert?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Center = styled.div`
  margin: auto;
`;

const TitleToolbar: React.FC<TitleToolbarProps> = ({
  profile,
  level,
  userValue,
  showAlert,
  setShowAlert,
}) => {
  return (
    <IonToolbar>
      <TitleHeader>MedWise</TitleHeader>

      {level ? (
        <IonAlert
          isOpen={showAlert ? showAlert : false}
          onDidDismiss={() => {
            if (setShowAlert) {
              setShowAlert(false);
            }
          }}
          cssClass="my-custom-class"
          header={"New level unlocked!"}
          message={
            "Congratualations you have reached a new level! Keep on going :)"
          }
          buttons={["OK"]}
        />
      ) : null}
      <IonItem>
        {level && (
          <IonLabel>Level: {userValue?.level ? userValue?.level : 0}</IonLabel>
        )}
        {profile && (
          <Center>
            <Avatar feeling={userValue ? userValue.feeling : 0} />
          </Center>
        )}
      </IonItem>
      {level && (
        <IonItem>
          <ProgressBar
            level={userValue?.level ? userValue?.level : 0}
            progress={userValue?.progress ? userValue?.progress : 0}
          />
        </IonItem>
      )}
    </IonToolbar>
  );
};

export default TitleToolbar;
