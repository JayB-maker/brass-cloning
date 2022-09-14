import React from "react";
import { Card, Image, Text, TitleText, whiteColor } from "../../../ui";
import FooterCTA from "./FooterCTA";

const BigStartSmall = () => {
  return (
    <Card flex flexdirection="column" gap="70px">
      <Card flex flexdirection="column" gap="16px" color={whiteColor}>
        <Card flex gap="12px" alignitems="flex-end">
          <Image
            width="32px"
            height="32px"
            src="assets/brass-white.png"
            alt="brass-icon"
          />
          <TitleText size="16px" color={whiteColor}>
            Big starts small
          </TitleText>
        </Card>
        <Text size="15px" lineheight="20px">
          Available on web and also on
        </Text>
        <FooterCTA />
      </Card>
      <Card width="63%" mdwidth="100%" color={whiteColor}>
        <Text size="16px" lineheight="24px">
          Banking services backed by Bancorp MFB & FCMB and regulated by the
          Central Bank of Nigeria. Brass Technology Nigeria Limited, DBA: Brass
          is a Brass Technologies, Inc company.
        </Text>
      </Card>
    </Card>
  );
};

export default BigStartSmall;
