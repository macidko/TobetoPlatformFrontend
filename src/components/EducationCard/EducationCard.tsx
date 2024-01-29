import TobetoPlatformVerticalCard from "../../utilities/tobetoPlatform/TobetoPlatformVerticalCard";
import React from "react";

type Props = {
  image: string;
  text: string;
  description?: string;
  buttonText?: string;
  date?: string;
};
const educationButtonText = "Eğitime Git";

const EducationCard = (props: Props) => {
  return (
    <>
        <TobetoPlatformVerticalCard
          image={props.image}
          text={props.text}
          date={props.date}
          buttonText={educationButtonText}
        />
      
    </>
  ); 
};
export default EducationCard;
