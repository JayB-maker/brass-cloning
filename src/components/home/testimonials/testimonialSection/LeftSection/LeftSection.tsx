import { useContext, useEffect } from "react";
import { TestimonialsContext } from "../../../../../helper/Context";
import { TestimonialsDetails } from "../../../../data/Data";
import {
  Card,
  grayColor,
  Image,
  Text,
  TitleText,
  whiteColor,
} from "../../../../ui";

const LeftSection = () => {
  const handleClicked = () => {
    const newIndex =
      clicked === TestimonialsDetails.length - 1 ? 0 : clicked + 1;

    const timer = setTimeout(() => {
      setClicked(newIndex);
    }, 3000);

    return () => clearTimeout(timer);
  };

  const { clicked, setClicked } = useContext(TestimonialsContext);

  useEffect(() => {
    handleClicked();
  }, [clicked]);
  return (
    <>
      <Card flexratio="1" flex flexdirection="column" alignitems="center">
        {TestimonialsDetails.map((testimony, index) => (
          <Card
            key={index}
            flex
            flexdirection="column"
            gap="100px"
            smgap="30px"
            padding="0 100px"
            smpadding="0 16px"
          >
            {clicked === index && (
              <>
                <TitleText
                  width="468px"
                  smwidth="100%"
                  height="250px"
                  smheight="150px"
                  size="30px"
                  color={whiteColor}
                  lineheight="40px"
                  textalign="center"
                  margin="100px 0 0"
                  smmargin="48px 0 0"
                  smsize="20px"
                  smlineheight="30px"
                >
                  {testimony.testimony}
                </TitleText>{" "}
                <Text size="18px" lineheight="26px" center color={grayColor}>
                  {testimony.witness}
                </Text>
              </>
            )}
          </Card>
        ))}
        <Card flex gap="15px" margin="50px 0 0">
          {TestimonialsDetails.map((item, index) => (
            <Card
              pointer
              width="14px"
              height="14px"
              bg={clicked === index ? whiteColor : grayColor}
              radius="50%"
              key={index}
              onClick={() => setClicked(index)}
            />
          ))}
        </Card>
        <Card margin="50px 0 0" smmargin="48px 0">
          {TestimonialsDetails.map((item, index) => (
            <Card flex justifycontent="center">
              {clicked === index && <Image src={item.logoSRC} width="50%" />}
            </Card>
          ))}
        </Card>
      </Card>
    </>
  );
};

export default LeftSection;
