import {
  IonButton,
  IonCard,
  IonCardContent,
  IonIcon,
  IonImg,
  IonInput,
  IonItem,
  IonLabel,
  IonRange,
  IonThumbnail,
} from "@ionic/react";
import { car, help, information, key } from "ionicons/icons";
import { useState } from "react";
import styled from "styled-components";
import { Storage } from "@capacitor/storage";
import { CardData } from "../data/contentdata";
import { USERDATA_KEY } from "../data/userdata";
import { Text } from "../pages/Information";

const CardHeader = styled(IonCard)`
  background-color: blue;
`;

export const Label = styled(IonLabel)`
  white-space: pre-wrap;
`;

interface MCQuestionProps {
  options: string[];
  removeCardHandler: (cardId: number) => void;
  id: number;
}

const MCQuestionBlock: React.FC<MCQuestionProps> = ({
  options,
  removeCardHandler,
  id,
}) => {
  const [choice, setChoice] = useState<number>(0);

  return (
    <IonItem>
      {options.map((option, index) => (
        <IonButton
          key={`${id}-${index}`}
          fill={index === choice ? "solid" : "outline"}
          onClick={(e) => {
            setChoice(index);
          }}
        >
          {option}
        </IonButton>
      ))}
      <IonButton
        fill="outline"
        slot="end"
        onClick={(e) => {
          removeCardHandler(id);
          console.log(id);
        }}
      >
        Submit
      </IonButton>
    </IonItem>
  );
};

interface OpenQuestionProps {
  placeholder: string;
  removeCardHandler: (cardId: number) => void;
  id: number;
}

const OpenQuestionBlock: React.FC<OpenQuestionProps> = ({
  placeholder,
  removeCardHandler,
  id,
}) => {
  const [text, setText] = useState<string>("");

  return (
    <IonItem>
      <IonInput
        value={text}
        placeholder={placeholder}
        onIonChange={(e) => {
          setText(e.detail.value!);
        }}
      ></IonInput>
      <IonButton
        fill="outline"
        slot="end"
        onClick={(e) => {
          removeCardHandler(id);
        }}
      >
        Submit
      </IonButton>
    </IonItem>
  );
};

interface RangeQuestionProps {
  range: number;
  removeCardHandler: (cardId: number) => void;
  id: number;
}

const RangeQuestionBlock: React.FC<RangeQuestionProps> = ({
  range,
  removeCardHandler,
  id,
}) => {
  const [value, setValue] = useState<number>(0);

  return (
    <IonItem>
      <IonRange
        min={0}
        max={range}
        color="secondary"
        onIonChange={(e) => setValue(e.detail.value as number)}
      >
        <IonLabel slot="start">0</IonLabel>
        <IonLabel slot="end">{range}</IonLabel>
      </IonRange>
      <IonButton
        fill="outline"
        slot="end"
        onClick={(e) => {
          removeCardHandler(id);
        }}
      >
        Submit
      </IonButton>
    </IonItem>
  );
};

interface HomeScreenCardProps {
  card: CardData;
  removeCardHandler: (cardId: number) => void;
  id: number;
}

const HomeScreenCard: React.FC<HomeScreenCardProps> = ({
  card,
  removeCardHandler,
  id,
}) => {
  let isQuestion = card.options || card.placeholder || card.range;

  let question;

  if (card.options) {
    question = (
      <MCQuestionBlock
        removeCardHandler={removeCardHandler}
        options={card.options}
        id={id}
      />
    );
  } else if (card.placeholder) {
    question = (
      <OpenQuestionBlock
        removeCardHandler={removeCardHandler}
        placeholder={card.placeholder}
        id={id}
      />
    );
  } else if (card.range) {
    question = (
      <RangeQuestionBlock
        removeCardHandler={removeCardHandler}
        range={card.range}
        id={id}
      />
    );
  }

  return (
    <IonCard>
      <IonItem>
        <IonIcon icon={isQuestion ? help : information} slot="start" />
        <IonLabel className="ion-text-wrap">{card.title}</IonLabel>
      </IonItem>

      <IonCardContent>
        <Text>{card.content}</Text>
        {card.photo && <IonImg src={card.photo} />}
      </IonCardContent>
      {question}
    </IonCard>
  );
};

export default HomeScreenCard;
