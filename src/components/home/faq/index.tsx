import { Card, InnerSection, MainSection, primaryColor } from "../../ui"
import LeftSection from "./leftSection/LeftSection"
import RightSection from "./rightSection/RightSection"

const Faq = () => {
  return (
    <MainSection bg={primaryColor} padding="200px 0 100px" mdpadding="50px 0" smpadding="30px 0">
      <InnerSection>
        <Card
          flex
          smflexdirection="column"
        >
          <LeftSection />
          <RightSection />
        </Card>
      </InnerSection>
    </MainSection>
  )
}

export default Faq