import { GetStartedDetails } from "../../../data/Data";
import { Card, Image, LinkText, Text, TitleText } from "../../../ui";

const GetStartedCard = () => {
  return (
    <>
      <Card
        display="grid"
        gridcolumn="repeat(auto-fill, 370px)"
        gap="20px"
        smgap="40px"
        justifycontent="space-between"
        width="100%"
        margin="50px 0 0"
      >
        {GetStartedDetails.map((item, index) => (
          <LinkText to={item.path}>
            <Card
            key={index}
            border="1px solid #E9EBEC"
            radius="8px"
            overflow="hidden"
            height="100%"
          >
            <Card height="240px">
              <Image
                src={item.imageSRC}
                alt="blog Image"
                width="100%"
                height="100%"
                // height={item.height}
                cover
              />
            </Card>
            <Card padding="20px" width="100%">
            <TitleText size="18px" lineheight="26px" >{item.heading}</TitleText>
            <Text size="15px" lineheight="20px" >{item.details}</Text>
            </Card>
          </Card>
          </LinkText>
        ))}
      </Card>
    </>
  );
};

export default GetStartedCard;
