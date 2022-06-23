import {
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonPage,
  IonText,
  IonTitle,
  IonToggle,
  IonToolbar,
} from "@ionic/react";
import { chevronDown, chevronUp, help, statsChart } from "ionicons/icons";
import { useState } from "react";
import ExploreContainer from "../components/ExploreContainer";
import { Medication } from "../data/contentdata";
import {
  hayFeverInfo,
  userData,
  UserData,
  USERDATA_KEY,
} from "../data/userdata";
import "./Tab3.css";
import styled from "styled-components";
import TitleToolbar from "../components/TitleToolbar";
import { Storage } from "@capacitor/storage";
import { parse } from "path";

interface InfoProps {
  medication: Medication | undefined;
  userValue: UserData | undefined;
  setUserValue: React.Dispatch<React.SetStateAction<UserData | undefined>>;
  level: boolean | undefined;
  profile: boolean | undefined;
  badges: boolean | undefined;
}

export const Text = styled.p`
  white-space: pre-wrap;
`;

const Information: React.FC<InfoProps> = ({
  medication,
  userValue,
  level,
  profile,
  setUserValue,
}) => {
  const [closed, setclosed] = useState<boolean[]>(
    new Array(
      medication ? (medication.faq ? medication.faq.length : 0) : 0
    ).fill(false)
  );
  const [showAlert, setShowAlert] = useState<boolean>(false);

  if (!medication) {
    return null;
  }

  const changeClosedQuestion = (index: number) => {
    const closedCopy = [...closed];
    closedCopy[index] = !closedCopy[index];
    setclosed(closedCopy);
  };

  const readInfo = (id: number) => {
    if (userValue?.infoRead ? !userValue.infoRead[id] : false) {
      const newUserData = addProgress(userValue!, id);
      setUserValue(newUserData);
    }
  };

  const addProgress = (data: UserData, id: number) => {
    data.progress += 1 / (data.level + 2);
    if (data.infoRead) {
      data.infoRead[id] = true;
    }
    data.info_read += 1;
    data.feeling += 1;
    if (data.progress >= 1) {
      data.level += 1;

      data.progress = 0;
      setShowAlert(true);
    }

    if (data.info_read === 3) {
      data = setDayBadge(false, "lightbulb", data);
    }
    if (data.info_read === 5) {
      data = setDayBadge(true, "lightbulb", data);
    }
    return JSON.parse(JSON.stringify(data));
  };

  const setDayBadge = (gold: boolean, badge: string, newUserData: UserData) => {
    const prize = gold ? "gold" : "silver";
    if (newUserData && newUserData.badges) {
      newUserData.badges[badge + "-" + prize].completed = true;
    }
    return newUserData;
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <TitleToolbar
            userValue={userValue}
            level={level}
            profile={profile}
            showAlert={showAlert}
            setShowAlert={setShowAlert}
          />
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Information</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <IonItem>
            <IonIcon icon={statsChart} slot="start" />
            <IonLabel>Medication Information</IonLabel>
          </IonItem>

          <IonCardContent>
            <p>
              <b>Medication: </b>
              {medication.name} ({medication.informal_name})
            </p>
            <p>
              <b>Information: </b>
              {medication.information}
            </p>
            <p>
              <b>Next medication moment:</b> {medication.next_med_moment_hour}:
              {medication.next_med_moment_minute}
            </p>
          </IonCardContent>
        </IonCard>
        {medication.faq
          ? medication.faq.map((question, index) => {
              return (
                <IonCard>
                  <IonItem>
                    <IonIcon icon={help} slot="start" />
                    <IonLabel className="ion-text-wrap">
                      {question.question}
                    </IonLabel>
                    <IonButton
                      expand="block"
                      fill="outline"
                      onClick={() => {
                        changeClosedQuestion(index);
                        readInfo(index);
                      }}
                    >
                      {closed[index] ? (
                        <IonIcon icon={chevronDown} />
                      ) : (
                        <IonIcon icon={chevronUp} />
                      )}
                    </IonButton>
                  </IonItem>
                  {closed[index] ? (
                    <IonCardContent>
                      <Text>{question.answer}</Text>
                    </IonCardContent>
                  ) : null}
                </IonCard>
              );
            })
          : null}
      </IonContent>
    </IonPage>
  );
};

export default Information;
