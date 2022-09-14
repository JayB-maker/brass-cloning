import { Card, InnerSection, MainSection, primaryColor } from '../../ui'
import BigStartSmall from './bigStartSmall/BigStartSmall'
import MainFooter from './mainFooter/MainFooter'

const Footer = () => {
  return (
    <MainSection padding="50px 0 100px" mdpadding="50px 0 100px" smpadding="30px 0 150px" bg={primaryColor}>
      <InnerSection>
        <Card
          flex
          flexdirection="column"
          width="100%"
          gap="172px"
          mdgap='100px'
          smgap='50px'
        >
          <MainFooter />
          <BigStartSmall />
        </Card>
      </InnerSection>
    </MainSection>
  )
}

export default Footer