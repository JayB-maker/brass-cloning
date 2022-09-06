import { Card, InnerSection, MainSection, Text, TitleText } from "../../ui";
import TestimonialSection from "./testimonialSection/TestimonialSection";

const Testimonials = () => {
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
            width="475px"
            mdwidth="100%"
            size="45px"
            heavy
            textalign="center"
            lineheight="58px"
            mdsize="30px"
            mdlineheight="41px"
          >
            Built for today’s ambitious businesses
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
            Thousands of forward-thinking businesses rely on Brass everyday to
            turbo-charge their business financial operations
          </Text>
        </Card>
      </InnerSection>
        <TestimonialSection />
    </MainSection>
  );
};

export default Testimonials;
