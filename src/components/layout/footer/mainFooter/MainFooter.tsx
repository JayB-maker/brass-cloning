import { useState } from "react";
import { FooterDetails } from "../../../data/Data";
import { Card, LinkText, TitleText, whiteColor } from "../../../ui";

const MainFooter = () => {
  const [dropDown, setDropDown] = useState(null);

  const handleClicked = (index:any) => {
    if(dropDown === index){
        setDropDown(null);
    }
    setDropDown(index);
  }
  return (
    <Card
      color={whiteColor}
      width="100%"
      flex
      justifycontent="space-between"
      mdflexdirection="column"
      mdgap="30px"
    >
      {FooterDetails.map((item) => (
        <Card
          width="150px"
          smwidth="100%"
          flex
          flexdirection="column"
          gap="20px"
          key={item.id}
        >
          <Card
            flex
            justifycontent="space-between"
            onClick={() => handleClicked(item.id)}
          >
            <TitleText size="15px" lineheight="20px" color="#50555e">
              {item.heading}
            </TitleText>
            <Card display="none" smdisplay="unset">
              <i
                className={
                  dropDown === item.id ? "fa-solid fa-angle-up" : "fa-solid fa-angle-down"
                }
                style={{ color: "#50555" }}
              />
            </Card>
          </Card>
          {item.details.map((subitem, index) => (
            <>
              <Card
                key={index}
                flex
                flexdirection="column"
                gap="20px"
                smdisplay="none"
              >
                <LinkText
                  width="fit-content"
                  size="15px"
                  lineheight="20px"
                  color={whiteColor}
                  hdecoration="underline"
                  to={subitem.path}
                >
                  {subitem.handle}
                </LinkText>
              </Card>
              {dropDown === item.id && (
                <Card
                  key={index}
                  display="none"
                  flexdirection="column"
                  gap="20px"
                  smdisplay="flex"
                >
                  <LinkText
                    width="fit-content"
                    size="15px"
                    lineheight="20px"
                    color={whiteColor}
                    hdecoration="underline"
                    to={subitem.path}
                  >
                    {subitem.handle}
                  </LinkText>
                </Card>
              )}
            </>
          ))}
        </Card>
      ))}
    </Card>
  );
};

export default MainFooter;
