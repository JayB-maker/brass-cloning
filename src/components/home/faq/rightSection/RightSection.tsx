import { useState } from "react";
import { FAQDetails } from "../../../data/Data";
import { Card, grayColor, Text, TitleText, whiteColor } from "../../../ui";

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
          gap="16px"
          bg={isClicked === index ? "#1A1C1F" : "transparent"}
          pointer
          padding="40px 16px"
          bbottom="1px solid #1A1C1F"
          onClick={() => handleClicked(index)}
        >
          <Card flex justifycontent="space-between" alignitems="center">
            <TitleText size="18px" lineheight="26px">{faq.question}</TitleText>
            <i className={isClicked === index ? "fa-solid fa-angle-up" : "fa-solid fa-angle-down"} style={{fontSize: "12px"}}></i>
          </Card>
          {isClicked === index && <Card>
            <Text size="16px" lineheight="24px">{faq.answer}</Text>
          </Card>}
        </Card>
      ))}
    </Card>
  );
};

export default RightSection;
