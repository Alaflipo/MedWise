import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  ellipse,
  home,
  information,
  informationCircle,
  settings,
  square,
  triangle,
  trophy,
} from "ionicons/icons";
import HomeScreen from "./pages/HomeScreen";
import Tab3 from "./pages/Settings";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import { useEffect, useState } from "react";
import { userData, UserData } from "./data/userdata";
import BadgeScreen from "./pages/Badges";
import Settings from "./pages/Settings";
import Information from "./pages/Information";
import { CardData } from "./data/contentdata";

setupIonicReact();

const App: React.FC = () => {
  const [userValue, setUserValue] = useState<UserData>();
  const [level, setLevel] = useState<boolean>(false);
  const [badges, setBadges] = useState<boolean>(false);
  const [profile, setProfile] = useState<boolean>(false);
  const [disableSettings, setDisableSettings] = useState<boolean>(true);
  const [faq, setFAQ] = useState<CardData[]>([]);

  useEffect(() => {
    setUserValue(userData);
  }, []);

  const setNewFAQSet = () => {
    if (userValue?.medication) {
      if (userValue.medication.faq) {
        const newFAQ: CardData[] = [];
        for (let i = 0; i < 2; i++) {
          const randomIndex = Math.floor(
            Math.random() * userValue.medication.faq.length
          );
          const question = userValue.medication.faq[randomIndex];
          const card: CardData = {
            question: false,
            title: question.question,
            content: question.answer,
          };
          newFAQ.push(card);
        }
        setFAQ(newFAQ);
      }
    }
  };

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/tab1">
              <BadgeScreen userValue={userValue} setUserValue={setUserValue} />
            </Route>
            <Route exact path="/tab2">
              <Information
                medication={userValue?.medication}
                userValue={userValue}
                level={level}
                profile={profile}
                setUserValue={setUserValue}
                badges={badges}
              />
            </Route>
            <Route exact path="/tab3">
              <HomeScreen
                userValue={userValue}
                setUserValue={setUserValue}
                level={level}
                setLevel={setLevel}
                badges={badges}
                setBadges={setBadges}
                profile={profile}
                setProfile={setProfile}
                disableSettings={disableSettings}
                setDisableSettings={setDisableSettings}
                setNewFAQSet={setNewFAQSet}
                faq={faq}
                setFAQ={setFAQ}
              />
            </Route>
            <Route path="/tab4">
              <Settings
                level={level}
                setLevel={setLevel}
                badges={badges}
                setBadges={setBadges}
                profile={profile}
                setProfile={setProfile}
                userValue={userValue}
                setUserValue={setUserValue}
                setNewFAQSet={setNewFAQSet}
              />
            </Route>
            <Route exact path="/">
              <Redirect to="/tab3" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            {badges && (
              <IonTabButton tab="tab1" href="/tab1">
                <IonIcon icon={trophy} />
                <IonLabel>Badges</IonLabel>
              </IonTabButton>
            )}
            <IonTabButton tab="tab2" href="/tab2">
              <IonIcon icon={informationCircle} />
              <IonLabel>Info</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab3" href="/tab3">
              <IonIcon icon={home} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton disabled={disableSettings} tab="tab4" href="/tab4">
              <IonIcon icon={settings} />
              <IonLabel>Settings</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
