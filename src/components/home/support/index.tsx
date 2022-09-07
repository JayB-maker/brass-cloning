import { Card, MainSection } from "../../ui";
import LeftSection from "./leftSection/LeftSection";
import RightSection from "./rightSection/RightSection";

const Support = () => {
  return (
    <MainSection
      padding="100px 0"
      mdpadding="50px 0"
      maxwidth="1440px"
      width="100%"
      smpadding="30px 0"
    >
      <Card flex gap="20px" smgap="50px" alignitems="center" smflexdirection="column">
        <LeftSection />
        <RightSection />
      </Card>
    </MainSection>
  );
};

export default Support;
