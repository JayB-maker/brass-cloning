import { Card, InnerSection, MainSection, primaryColor } from "../../ui";
import LeftSection from "./leftSection/LeftSection";
import RightSection from "./rightSection/RightSection";

const HomeHeroSection = () => {
  return (
    <>
      <MainSection width="100%" bg={primaryColor}>
        <InnerSection>
          <Card
            flex
            alignitems="center"
            height="100vh"
            mdheight="unset"
            padding="60px 0 60px"
            mdpadding="20px 0 60px"
            gap="50px"
            smgap="40px"
            xmdflexdirection="column-reverse"
            xmdheight="unset"
          >
            <LeftSection />
            <RightSection />
          </Card>
        </InnerSection>
      </MainSection>
    </>
  );
};

export default HomeHeroSection;
