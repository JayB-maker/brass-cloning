import { useState } from "react";
import styled from "styled-components";
import { mobileMenuContext } from "../../../helper/Context";
import {
  accentColor,
  Card,
  InnerSection,
  LinkText,
  MainSection,
  primaryColor,
  whiteColor,
} from "../../ui";
import LeftSection from "./leftsection/LeftSection";
import MobileMenu from "./mobileMenu/MobileMenu";
import RightSection from "./rightSection/RightSection";

const Icon = styled.i`
  display: none;

  @media screen and (max-width: 1024px) {
    display: block;
  }
`;

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <>
    <mobileMenuContext.Provider value={{mobileMenu, setMobileMenu}}>
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
            color={whiteColor}
          >
            <LeftSection />
            <RightSection />
            <Icon
              className={mobileMenu ? "fa-solid fa-times" : "fa-solid fa-bars"}
              onClick={() => setMobileMenu(!mobileMenu)}
            />
          </Card>
        </InnerSection>
      </MainSection>
      {mobileMenu && (
        <Card
          transition="2000ms"
          position="fixed"
          left={mobileMenu ? "0" : "100%"}
          index="6"
          top="0"
        >
          <MobileMenu />
        </Card>
      )}
      <LinkText
        display="none"
        smdisplay="block"
        bg={accentColor}
        mdpadding="15px 0"
        smpadding="25px 0"
        align="center"
        width="100vw"
        position="fixed"
        bottom="0"
        left="0"
        index="100"
        color={whiteColor}
        size="15px"
        lineheight="23px"
        weight="700"
        to="/"
      >
        Open an account in 10 minutes
      </LinkText>
      </mobileMenuContext.Provider>
    </>
  );
};

export default Header;
