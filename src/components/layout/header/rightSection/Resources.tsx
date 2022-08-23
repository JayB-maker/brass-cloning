import React, { useState } from 'react'
import { resourcesDetails } from '../../../data/Data'
import { Card, TitleText, whiteColor } from '../../../ui'
import NavDropdown from '../leftsection/navbar/navDropdown/NavDropdown'

const Resources = () => {
    const [hover, setHover] = useState(false);
  return (
    <>
            {resourcesDetails.map((navitem, index) => (
          <Card 
          key={index}
            position="relative"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <TitleText
              pointer
              margin="2px 0 0"
              size="14px"
              weight='600'
              lineheight="23px"
              color={whiteColor}
            >
              {navitem.menu}
            </TitleText>
            {hover && (
              <Card position="absolute" top="20px" left="0">
                <Card
                  radius="5px"
                  padding="10px 0"
                  // flex
                  flexdirection="column"
                  margin="25px 0 0"
                  gap="10px"
                  width="320px"
                  bg={whiteColor}
                  shadow="0 3px 3px rgba(0, 0, 0, 0.1)"
                  color="black"
                >
                  {navitem.subMenu.map((subNavitem, index) => (
                    <NavDropdown
                      key={index}
                      path={subNavitem.path}
                      heading={subNavitem.heading}
                      details={subNavitem.details}
                    />
                  ))}
                </Card>
              </Card>
            )}
          </Card>
        ))}
    </>
  )
}

export default Resources