import React from 'react'
import { Card, InnerSection, MainSection, Text, TitleText } from '../../ui'
import IntegrationTools from './integrationTools/IntegrationTools'

const Integration = () => {
  return (
    <MainSection padding="100px 0" mdpadding="50px 0" smpadding="30px 0">
      <InnerSection>
        <Card
          flex
          flexdirection="column"
          width="100%"
          gap="16px"
        >
          <TitleText
            size="45px"
            heavy
            lineheight="58px"
            mdsize="30px"
            mdlineheight="41px"
          >
            Integrations that matter
          </TitleText>
          <Text
            size="18px"
            lineheight="26px"
            mdsize="15px"
            mdlineheight="20px"
          >
            Brass is seamlessly integrated with the tools your team is already familiar with.
          </Text>
          <IntegrationTools />
        </Card>
      </InnerSection>
    </MainSection>
  )
}

export default Integration