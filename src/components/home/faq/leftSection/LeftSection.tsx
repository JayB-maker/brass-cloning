import { Card, Text, TitleText, whiteColor } from "../../../ui";

const LeftSection = () => {
  return (
    <Card
      color={whiteColor}
      flex
      flexratio="1"
      gap="16px"
      flexdirection="column"
      mdalignitems="center"
    >
      <TitleText
        size="45px"
        lineheight="58px"
        mdsize="30px"
        mdlineheight="40px"
        heavy
        padding="0 50px 0 0"
        mdpadding="0"
        mdtextalign="center"
      >
        Some of the things you may want to know
      </TitleText>
      <Text
        size="18px"
        lineheight="26px"
        smsize="15px"
        smlineheight="20px"
        mdtextalign="center"
      >
        We answered questions so you don’t have to ask them.
      </Text>
    </Card>
  );
};

export default LeftSection;
