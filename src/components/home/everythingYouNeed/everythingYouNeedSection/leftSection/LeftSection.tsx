import { useContext } from "react";
import { everythingYouNeedContext } from "../../../../../helper/Context";
import { EverythingYouNeedDetails } from "../../../../data/Data";
import { Card, grayColor, primaryColor, Text, TitleText } from "../../../../ui";

const LeftSection = () => {
  const { clicked, setClicked } = useContext(everythingYouNeedContext);
  const handleClicked = (index: any) => {
    if (clicked === index) {
      setClicked(1);
    }
    setClicked(index);
  };

  return (
    <>
      <Card flexratio="1" flex flexdirection="column">
        {EverythingYouNeedDetails.map((details, index) => (
          <Card key={index}>
            {clicked === index ? (
              <Card
                pointer
                padding="24px 20px"
                bdleft="5px solid #0BCE5A"
                height="116px"
                color={primaryColor}
                key={index}
                mddisplay="none"
                onClick={() => handleClicked(index)}
              >
                <TitleText size="20px" lineheight="28px" weight="400">
                  {details.title}
                </TitleText>
                <Text size="18px" lineheight="26px" weight="400">
                  {details.details}
                </Text>
              </Card>
            ) : (
              <Card
                pointer
                padding="24px 20px"
                bg="transparent"
                bdleft="5px solid #F1F3F5"
                height="116px"
                color="#8f96a3"
                key={index}
                mddisplay="none"
                onClick={() => handleClicked(index)}
              >
                <TitleText size="20px" lineheight="28px" weight="400">
                  {details.title}
                </TitleText>
                <Text size="18px" lineheight="26px" weight="400">
                  {details.details}
                </Text>
              </Card>
            )}
          </Card>
        ))}
      </Card>

      

      <Card display="none" mddisplay="block" width="100%">
        {EverythingYouNeedDetails.map((item, index) => (
          <Card width="100%" key={index}>
            {clicked === index && (
              <>
                <TitleText size="20px" color={primaryColor} heavy lineheight="28px" textalign="center">
                  {item.title}
                </TitleText>
                <Text size="15px" padding="0 20px" color={grayColor} lineheight="20px" center>
                  {item.details}
                </Text>
              </>
            )}
          </Card>
        ))}
      </Card>

      <Card
        display="none"
        mddisplay="flex"
        margin="-20px 0 0"
        justifycontent="center"
        gap="15px"
      >
        {EverythingYouNeedDetails.map((item, index) => (
          <Card key={index}>
            <Card
              bg={clicked === index ? primaryColor : grayColor}
              width="12px"
              radius="50%"
              height="12px"
              key={index}
              onClick={() => setClicked(index)}
            />
          </Card>
        ))}
      </Card>
    </>
  );
};

export default LeftSection;
