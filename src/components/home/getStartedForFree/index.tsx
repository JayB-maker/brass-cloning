import {
  accentColor,
  Card,
  InnerSection,
  LinkText,
  MainSection,
  primaryColor,
  Text,
  TitleText,
  whiteColor,
} from "../../ui";

const GetStartedForFree = () => {
  return (
    <MainSection
      bg={primaryColor}
      padding="100px 0 100px"
      mdpadding="100px 0"
      smpadding="70px 0"
    >
      <InnerSection>
        <Card
          flex
          alignitems="center"
          justifycontent="center"
          flexdirection="column"
          color={whiteColor}
        >
          <TitleText
            size="30px"
            lineheight="41px"
            mdsize=""
            mdlineheight=""
            center
          >
            Get started for free in 10 minutes
          </TitleText>
          <Text
            width="586px"
            smwidth="100%"
            size="18px"
            lineheight="26px"
            mdsize=""
            mdlineheight=""
            center
            margin="16px 0 0"
          >
            Get all the best financial products for your business growth for
            free. Open the last current account you will ever need for your
            business
          </Text>
          <LinkText
            size="14px"
            lineheight="28px"
            padding="14px 32px"
            radius="5px"
            bg={accentColor}
            color={whiteColor}
            margin="48px 0 0"
            to="/"
          >
            Get Started in minutes
          </LinkText>
        </Card>
      </InnerSection>
    </MainSection>
  );
};

export default GetStartedForFree;
