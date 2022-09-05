import { Card, InnerSection, MainSection, TitleText } from "../../ui";
import EverythingYouNeedSection from "./everythingYouNeedSection/EverythingYouNeedSection";

const EverythingYouNeed = () => {
  return (
    <MainSection padding="100px 0" smpadding="30px 0">
      <InnerSection>
        <Card flex>
          <TitleText
            flexratio="1"
            size="45px"
            lineheight="58px"
            mdsize="30px"
            mdlineheight="41px"
            mdtextalign="center"
            heavy
          >
            Everything you need, less of what you don't.
          </TitleText>
          <Card flexratio="1" mddisplay="none" />
        </Card>
        <EverythingYouNeedSection />
      </InnerSection>
    </MainSection>
  );
};

export default EverythingYouNeed;
