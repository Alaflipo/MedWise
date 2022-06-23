import {
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToggle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab3.css";
import { Storage } from "@capacitor/storage";
import { UserData, userData, USERDATA_KEY } from "../data/userdata";
import { HayFever, Medication, medications } from "../data/contentdata";

interface SettingsProps {
  level: boolean | undefined;
  setLevel: React.Dispatch<React.SetStateAction<boolean>>;
  badges: boolean | undefined;
  setBadges: React.Dispatch<React.SetStateAction<boolean>>;
  profile: boolean | undefined;
  setProfile: React.Dispatch<React.SetStateAction<boolean>>;
  userValue: UserData | undefined;
  setUserValue: React.Dispatch<React.SetStateAction<UserData | undefined>>;
  setNewFAQSet: () => void;
}

const Settings: React.FC<SettingsProps> = ({
  level,
  setLevel,
  badges,
  setBadges,
  profile,
  setProfile,
  userValue,
  setUserValue,
  setNewFAQSet,
}) => {
  const [medication, setCurrentMed] = useState<Medication>(HayFever);

  const resetUser = () => {
    const newUser = userData;
    newUser.medication = medication;
    setUserValue(userData);
    setNewFAQSet();
  };

  const setMedication = (medication: Medication) => {
    const newUserValue = JSON.parse(JSON.stringify(userValue));
    setCurrentMed(medication);
    if (newUserValue) {
      newUserValue.medication = medication;
    }
    setUserValue(newUserValue);
    setNewFAQSet();
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Settings</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem>
          <IonLabel>Levels</IonLabel>
          <IonToggle
            checked={level}
            onIonChange={(e) => setLevel(e.detail.checked)}
          />
        </IonItem>
        <IonItem>
          <IonLabel>Badges</IonLabel>
          <IonToggle
            checked={badges}
            onIonChange={(e) => setBadges(e.detail.checked)}
          />
        </IonItem>
        <IonItem>
          <IonLabel>Profile</IonLabel>
          <IonToggle
            checked={profile}
            onIonChange={(e) => setProfile(e.detail.checked)}
          />
        </IonItem>
        {userValue && userValue.medication ? (
          <IonSelect
            value={userValue.medication}
            placeholder="Select One"
            onIonChange={(e) => {
              setMedication(e.detail.value);
            }}
          >
            {medications.map((med) => {
              return (
                <IonSelectOption value={med.content}>
                  {med.name}
                </IonSelectOption>
              );
            })}
          </IonSelect>
        ) : null}
        <IonButton expand="block" fill="outline" onClick={resetUser}>
          Reset User
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
