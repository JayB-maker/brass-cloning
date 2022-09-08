import { Card, InnerSection, MainSection, primaryColor } from "../../ui"
import LeftSection from "./leftSection/LeftSection"
import RightSection from "./rightSection/RightSection"

const Faq = () => {
  return (
    <MainSection bg={primaryColor} padding="200px 0 100px" mdpadding="100px 0" smpadding="70px 0">
      <InnerSection>
        <Card
          flex
          smflexdirection="column"
          smgap="50px"
        >
          <LeftSection />
          <RightSection />
        </Card>
      </InnerSection>
    </MainSection>
  )
}

export default Faq