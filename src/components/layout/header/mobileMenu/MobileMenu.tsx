import { useContext, useState } from "react";
import { mobileMenuContext } from "../../../../helper/Context";
import { navbarDetails, resourcesDetails } from "../../../data/Data";
import {
  accentColor,
  Card,
  Divider,
  LinkText,
  primaryColor,
  TitleText,
  whiteColor,
} from "../../../ui";

const MobileMenu = () => {
  const { mobileMenu } = useContext(mobileMenuContext);
  const [dropdown, setDropdown] = useState(null);

  const toggle = (index: any) => {
    if (dropdown === index) {
      return setDropdown(null);
    }

    setDropdown(index);
  };

  return (
    <>
      <Card
        display="none"
        mddisplay="block"
        width="100vw"
        height="100vh"
        // transition="2000ms"
        position="fixed"
        top="0"
        left="0"
        // left={mobileMenu ? "0" : "unset"}
        index="6"
        bg={primaryColor}
      >
        <Card
          flex
          width="92%"
          flexdirection="column"
          margin="80px auto 0"
          color={whiteColor}
        >
          {navbarDetails.map((navbar, index) => (
            <Card key={index}>
              {navbar.subMenu ? (
                <>
                  <Card
                    flex
                    mdpadding="15px 0"
                    smpadding="20px 0"
                    justifycontent="space-between"
                    alignitems="center"
                    onClick={() => toggle(index)}
                  >
                    <TitleText heavy size="15px" lineheight="23px">
                      {navbar.menu}
                    </TitleText>
                    <i
                      className={
                        dropdown === index
                          ? "fa-solid fa-angle-up"
                          : "fa-solid fa-angle-down"
                      }
                      style={{ color: "#50555" }}
                    />
                  </Card>
                  {dropdown === index && (
                    <Card flex flexdirection="column">
                      {navbar.subMenu.map((subNavbar, index) => (
                        <LinkText
                          color={whiteColor}
                          mdpadding="15px 0"
                          smpadding="15px 0"
                          weight="600"
                          size="15px"
                          lineheight="23px"
                          key={index}
                          to={subNavbar.path}
                        >
                          {subNavbar.heading}
                        </LinkText>
                      ))}
                    </Card>
                  )}
                  <Divider />
                </>
              ) : (
                <>
                  <LinkText
                    size="15px"
                    mdpadding="15px 0"
                    smpadding="20px 0"
                    lineheight="23px"
                    weight="700"
                    color={whiteColor}
                    to={navbar.path}
                  >
                    {navbar.menu}
                  </LinkText>
                  <Divider />
                </>
              )}
            </Card>
          ))}
          {resourcesDetails.map((resource) => (
            <Card key={resource.id}>
              <Card
                flex
                mdpadding="15px 0"
                smpadding="20px 0"
                justifycontent="space-between"
                alignitems="center"
                color={whiteColor}
                onClick={() => toggle(resource.id)}
              >
                <TitleText heavy size="15px" lineheight="23px">
                  {resource.menu}
                </TitleText>
                <i
                  className={
                    dropdown === resource.id
                      ? "fa-solid fa-angle-up"
                      : "fa-solid fa-angle-down"
                  }
                  style={{ color: "#50555" }}
                />
              </Card>
              {dropdown === resource.id && (
                    <Card flex flexdirection="column">
                      {resource.subMenu.map((subResource, index) => (
                        <LinkText
                          color={whiteColor}
                          mdpadding="15px 0"
                          smpadding="15px 0"
                          weight="600"
                          size="15px"
                          lineheight="23px"
                          key={index}
                          to={subResource.path}
                        >
                          {subResource.heading}
                        </LinkText>
                      ))}
                    </Card>
                  )}
              <Divider />
            </Card>
          ))}
          <LinkText
            mdpadding="15px 0"
            smpadding="20px 0"
            width="fit-content"
            color={whiteColor}
            size="15px"
            lineheight="23px"
            weight="700"
            to="/"
          >
            Login
          </LinkText>
        </Card>
        <LinkText
          display="none"
          smdisplay="block"
          bg={accentColor}
          mdpadding="15px 0"
          smpadding="20px 0"
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
      </Card>
    </>
  );
};

export default MobileMenu;
