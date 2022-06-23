import { Storage } from "@capacitor/storage";
import {
  IonAlert,
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonPage,
  IonPopover,
  IonRow,
  IonTitle,
  IonToolbar,
  useIonAlert,
} from "@ionic/react";
import { statsChart } from "ionicons/icons";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Avatar from "../components/Avatar";
import ExploreContainer from "../components/ExploreContainer";
import HomeScreenCard from "../components/HomeScreenCard";
import ProgressBar from "../components/ProgressBar";
import TitleToolbar from "../components/TitleToolbar";
import { allCards, allDays, CardData } from "../data/contentdata";
import {
  hayFeverInfo,
  UserData,
  userData,
  USERDATA_KEY,
} from "../data/userdata";
import "./Tab2.css";

export const TitleHeader = styled.p`
  color: #468895;
  margin-top: 10px;
  margin-bottom: 0px;
  font-size: 50px;
  text-align: center;
`;

export const NewDayButton = styled(IonButton)`
  margin: 10px;
`;

interface HomeScreenProps {
  userValue: UserData | undefined;
  setUserValue: React.Dispatch<React.SetStateAction<UserData | undefined>>;
  level: boolean | undefined;
  setLevel: React.Dispatch<React.SetStateAction<boolean>>;
  badges: boolean | undefined;
  setBadges: React.Dispatch<React.SetStateAction<boolean>>;
  profile: boolean | undefined;
  setProfile: React.Dispatch<React.SetStateAction<boolean>>;
  disableSettings: boolean | undefined;
  setDisableSettings: React.Dispatch<React.SetStateAction<boolean>>;
  setNewFAQSet: () => void;
  faq: CardData[] | undefined;
  setFAQ: React.Dispatch<React.SetStateAction<CardData[]>>;
}

const HomeScreen: React.FC<HomeScreenProps> = ({
  userValue,
  setUserValue,
  level,
  setLevel,
  badges,
  setBadges,
  profile,
  setProfile,
  setDisableSettings,
  disableSettings,
  setNewFAQSet,
  faq,
  setFAQ,
}) => {
  const [cards, setCards] = useState<CardData[]>(allDays[0]);
  const [day, setDay] = useState<number>(1);
  const [present] = useIonAlert();
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [showBadgeAlert, setShowBadgeAlert] = useState<boolean>(false);
  const [showEndMessage, setShowEndMessage] = useState<boolean>(false);

  useEffect(() => {
    setNewFAQSet();
  }, []);

  const removeCardHandler = (cardId: number) => {
    setCards(
      cards.filter((value, index) => {
        return index !== cardId;
      })
    );
    setUserValue(addProgress(userValue!));
  };

  const addProgress = (data: UserData) => {
    data.questions_answered += 1;
    data.progress += 1 / (data.level + 2);
    data.feeling += 1;
    if (data.progress >= 1) {
      data.level += 1;
      data.progress = 0;
      setShowAlert(false);
      setShowAlert(true);
    }

    if (cards.filter((card) => card.question).length <= 1) {
      data.streak += 1;
    }

    if (data.streak === 1) {
      data = setDayBadge(false, "question", data);
    } else if (data.streak === 3) {
      data = setDayBadge(true, "question", data);
    }

    return JSON.parse(JSON.stringify(data));
  };

  const resetUser = () => {
    setUserValue(userData);
  };

  const newDay = () => {
    setDay(day + 1);

    userValue!.day += 1;
    userValue!.feeling = 0;

    if (cards.filter((card) => card.question).length > 0) {
      userValue!.streak = 0;
    }

    if (day === 2) {
      userValue = setDayBadge(false, "day", userValue!);
    }
    if (day === 3) {
      userValue = setDayBadge(true, "day", userValue!);
    }

    if (day === Math.round(userValue!.medication_days / 2)) {
      userValue = setDayBadge(false, "medication", userValue!);
    }
    if (day === userValue!.medication_days) {
      userValue = setDayBadge(true, "medication", userValue!);
    }
    setUserValue(JSON.parse(JSON.stringify(userValue)));

    if (day >= 3) {
      setShowEndMessage(true);
    } else {
      setCards(allDays[day]);
      setNewFAQSet();
    }
  };

  const setDayBadge = (gold: boolean, badge: string, newUserData: UserData) => {
    const prize = gold ? "gold" : "silver";
    if (newUserData && newUserData.badges) {
      newUserData.badges[badge + "-" + prize].completed = true;
    }
    if (badges) {
      setShowBadgeAlert(true);
    }
    return newUserData;
  };

  return (
    <IonPage>
      <IonHeader>
        <TitleToolbar
          profile={profile}
          level={level}
          userValue={userValue}
          showAlert={showAlert}
        />
      </IonHeader>
      <IonContent fullscreen>
        <IonAlert
          isOpen={showEndMessage}
          onDidDismiss={() => setShowEndMessage(false)}
          cssClass="my-custom-class"
          header={"End"}
          message={
            "This is the end of this part of the experiment. Please navigate back to the questionaire"
          }
        />
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
        <IonAlert
          isOpen={showBadgeAlert}
          onDidDismiss={() => setShowBadgeAlert(false)}
          cssClass="my-custom-class"
          header={"New badge unlocked!"}
          message={
            "Congratualations you have unlocked a new Badge! Check out the Badges tab to see your new badge."
          }
          buttons={["OK"]}
        />
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">HomeScreen</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonCard>
          <IonItem>
            <IonIcon icon={statsChart} slot="start" />
            <IonLabel>Medication Information</IonLabel>
            <IonButton
              expand="block"
              fill="outline"
              onClick={() =>
                present({
                  header: "Medication information",
                  message:
                    "For more info click on the info tab at the navigation bar at the bottom",
                  buttons: [
                    {
                      text: "Dismiss",
                      handler: (d) => console.log("ok pressed"),
                    },
                  ],
                  onDidDismiss: (e) => console.log("did dismiss"),
                })
              }
            >
              more info
            </IonButton>
          </IonItem>

          <IonCardContent>
            <p>
              <b>Medication: </b>
              {userValue?.medication?.name} (
              {userValue?.medication?.informal_name})
            </p>
            <p>
              <b>Information: </b>
              {userValue?.medication?.information}
            </p>
            <p>
              <b>Next medication moment:</b>{" "}
              {userValue?.medication?.next_med_moment_hour}:
              {userValue?.medication?.next_med_moment_minute}
            </p>
          </IonCardContent>
        </IonCard>
        {cards.map((card, id) => (
          <HomeScreenCard
            key={id}
            card={card}
            id={id}
            removeCardHandler={removeCardHandler}
          />
        ))}
        {faq
          ? faq.map((card, id) => (
              <HomeScreenCard
                key={id}
                card={card}
                id={id}
                removeCardHandler={removeCardHandler}
              />
            ))
          : null}
        <NewDayButton expand="block" fill="outline" onClick={newDay}>
          New Day
        </NewDayButton>
        <IonButton
          fill="clear"
          onClick={() => {
            setDisableSettings(disableSettings ? !disableSettings : true);
          }}
        ></IonButton>
      </IonContent>
    </IonPage>
  );
};

export default HomeScreen;
