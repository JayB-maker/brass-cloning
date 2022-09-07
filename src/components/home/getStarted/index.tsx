import { Card, InnerSection, MainSection, Text, TitleText } from "../../ui";
import GetStartedCard from "./getStartedCard/GetStartedCard";

const GetStarted = () => {
  return (
    <MainSection padding="100px 0" mdpadding="50px 0" smpadding="30px 0">
      <InnerSection>
        <Card
          flex
          flexdirection="column"
          width="100%"
          alignitems="center"
          gap="16px"
          justifycontent="center"
        >
          <TitleText
            width="585px"
            mdwidth="100%"
            size="45px"
            heavy
            textalign="center"
            lineheight="58px"
            mdsize="30px"
            mdlineheight="41px"
          >
            Go further with resources to get started
          </TitleText>
          <Text
            width="595px"
            mdwidth="75%"
            smwidth="100%"
            size="18px"
            center
            lineheight="26px"
            mdsize="15px"
            mdlineheight="20px"
          >
            We have partnered with businesses on the same mission as ours to
            help local businesses. We have also added resources you need to
            start, run and grow your business.
          </Text>
          <GetStartedCard />
        </Card>
      </InnerSection>
    </MainSection>
  );
};

export default GetStarted;
