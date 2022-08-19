import { useState } from "react";
import { navbarDetails } from "../../../../data/Data";
import { Card, LinkText, TitleText, whiteColor } from "../../../../ui";
import NavDropdown from "./navDropdown/NavDropdown";

export interface navProps {
  navbarDetails?: Array<object>;
  heading?: string;
  subMenu?: Array<object>;
  path?: any;
  handle?: string;
  details?: string;
  menu?: string;
}

const Navbar = (props: navProps) => {
  const [hover, setHover] = useState(false);
  return (
    <>
      <Card flex gap="32px" alignitems="center">
        {navbarDetails.map((navitem, index) => (
          <Card key={index}>
            {navitem.subMenu ? (
              <>
                <Card
                  position="relative"
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                >
                  <TitleText
                    pointer
                    margin="2px 0 0"
                    size="14px"
                    lineheight="20px"
                    color={whiteColor}
                  >
                    {navitem.menu}
                  </TitleText>
                  {hover && (
                    <Card position="absolute" top="20px" left="0">
                      <Card
                        radius="5px"
                        padding="10px 0"
                        flex
                        flexdirection="column"
                        margin="20px 0 0"
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
              </>
            ) : (
              <>
                <Card>
                  <LinkText
                    size="14px"
                    lineheight="20px"
                    color={whiteColor}
                    to={navitem.path}
                  >
                    {navitem.menu}
                  </LinkText>
                </Card>
              </>
            )}
          </Card>
        ))}
      </Card>
    </>
  );
};

export default Navbar;
