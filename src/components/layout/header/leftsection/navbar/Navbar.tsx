import { useState } from "react";
import { navbarDetails } from "../../../../data/Data";
import { Card, LinkText, TitleText, whiteColor } from "../../../../ui";
import NavDropdown from "./navDropdown/NavDropdown";

export interface navProps {
  navbarDetails?: Array<object>;
  heading?: string;
  subMenu?: Array<object>;
  path?: any;
  id?:any;
  handle?: string;
  details?: string;
  menu?: string;
}

const Navbar = (props: navProps) => {
  const [hover, setHover] = useState(null);

  const toggle = (index:any) => {
    if (hover === index) {
      return setHover(null);
    }

    setHover(index);
  };

  return (
    <>
      <Card flex gap="32px" alignitems="center" mddisplay="none">
        {navbarDetails.map((navitem, index) => (
          <Card key={index}>
            {navitem.subMenu ? (
              <>
                <Card
                  position="relative"
                  onMouseEnter={() => toggle(index)}
                  onMouseLeave={() => toggle(index)}
                >
                  <TitleText
                    pointer
                    margin="2px 0 0"
                    weight="600"
                    size="14px"
                    lineheight="23px"
                    color={whiteColor}
                  >
                    {navitem.menu}
                  </TitleText>
                  {hover === index && (
                    <Card position="absolute" top="20px" left="0">
                      <Card
                        radius="5px"
                        padding="10px 0"
                        flex
                        flexdirection="column"
                        margin="25px 0 0"
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
                    lineheight="23px"
                    weight="600"
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
