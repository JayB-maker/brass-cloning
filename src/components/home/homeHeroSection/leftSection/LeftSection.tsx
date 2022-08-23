import {
  accentColor,
  Card,
  LinkText,
  Text,
  TitleText,
  whiteColor,
} from "../../../ui";
import Trustee from "./Trustee";

const LeftSection = () => {
  return (
    <Card flexratio="1" flex flexdirection="column" gap="48px">
      <TitleText
        size="60px"
        mdsize="45px"
        smsize="30px"
        color={whiteColor}
        lineheight="64px"
        smlineheight="41px"
        mdlineheight="64px"
        heavy
      >
        Banking that works for your business
      </TitleText>
      <Text
        size="18px"
        margin="-24px 50px 0 0"
        mdmargin="-24px 0 0"
        color={whiteColor}
        lineheight="26px"
        smsize="15px"
        smlineheight="20px"
      >
        Do more with a business account that comes with top-end financial tools
        and integrations to help grow your business.
      </Text>
      <LinkText
        padding="11px 32px"
        weight="600"
        bg={accentColor}
        radius="5px"
        size="14px"
        lineheight="23px"
        color={whiteColor}
        smdisplay="none"
        width="fit-content"
        to="/"
      >
        Open an account in 10 minutes
      </LinkText>
      <Trustee />
    </Card>
  );
};

export default LeftSection;
