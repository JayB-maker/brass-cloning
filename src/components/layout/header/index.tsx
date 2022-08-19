import { Card, InnerSection, MainSection, primaryColor } from "../../ui";
import LeftSection from "./leftsection/LeftSection";
import RightSection from "./rightSection/RightSection";

const Header = () => {
  return (
    <>
      <MainSection
        width="100%"
        bg={primaryColor}
        height="80px"
        position="fixed"
        top="0"
        right="0"
        index="10"
      >
        <InnerSection>
          <Card
            flex
            justifycontent="space-between"
            width="100%"
            height="80px"
            alignitems="center"
          >
            <LeftSection />
            <RightSection />
          </Card>
        </InnerSection>
      </MainSection>
    </>
  );
};

export default Header;
