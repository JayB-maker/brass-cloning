import { useState } from "react";
import { FAQDetails } from "../../../data/Data";
import { Card, grayColor, TitleText, whiteColor } from "../../../ui";

const RightSection = () => {
  const [isClicked, setIsClicked] = useState(0);

  const handleClicked = (index: any) => {
    if (isClicked === index) {
      setIsClicked(0);
    }
    setIsClicked(index);
  };
  return (
    <Card flexratio="1" flex flexdirection="column" color={whiteColor}>
      {FAQDetails.map((faq, index) => (
        <Card
          key={index}
          flex
          flexdirection="column"
          bg={isClicked === index ? "#1A1C1F" : "transparent"}
          pointer
          padding="40px 16px"
          bbottom="1px solid #1A1C1F"
          onClick={() => handleClicked(index)}
        >
          <Card flex justifycontent="space-between">
            <TitleText size="18px" lineheight="26px">{faq.question}</TitleText>
            <i className="fa-solid fa-angle-up"></i>
          </Card>
        </Card>
      ))}
    </Card>
  );
};

export default RightSection;
