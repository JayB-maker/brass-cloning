import React from "react";
import { Card, grayColor, primaryColor, Text, TitleText } from "../../../ui";

const RightSection = () => {
  return (
    <Card
      flexratio="4"
      flex
      flexdirection="column"
      gap="25px"
      smpadding="0 16px"
    >
      
      <Text size="12px" lineheight="18px" color={grayColor} heavy>
        SUPPORT WHEN YOU NEED IT
      </Text>
      <TitleText size="45px" smsize="30px" smlineheight="40px" lineheight="61px" color={primaryColor} padding="0 150px 0 0" mdpadding="0" heavy>
        Our support team is your team
      </TitleText>
      <Text size="18px" smsize="15px" smlineheight="20px" lineheight="26px" padding="0 50px 0 0" mdpadding="0" color={primaryColor}>
        Our support team are a mix of bankers and growth experts ready to help
        you. With a Brass account, you get a team that is genuinely seeking to
        understand your business and provide solutions for its financial
        operations.
      </Text>
      <Text size="18px" smsize="15px" smlineheight="20px" lineheight="26px" padding="0 50px 0 0" mdpadding="0" color={primaryColor}>
        We are committed to going beyond issue resolution to becoming your
        partner in the growing and smooth running of your business.
      </Text>
    </Card>
  );
};

export default RightSection;
