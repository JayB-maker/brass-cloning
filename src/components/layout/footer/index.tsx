import { Card, InnerSection, MainSection, primaryColor } from '../../ui'
import BigStartSmall from './bigStartSmall/BigStartSmall'
import MainFooter from './mainFooter/MainFooter'

const Footer = () => {
  return (
    <MainSection padding="50px 0" mdpadding="50px 0" smpadding="30px 0" bg={primaryColor}>
      <InnerSection>
        <Card
          flex
          flexdirection="column"
          width="100%"
          gap="172px"
        >
          <MainFooter />
          <BigStartSmall />
        </Card>
      </InnerSection>
    </MainSection>
  )
}

export default Footer