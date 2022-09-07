import { Card, Image, Text, TitleText } from "../../../ui";

const IntegrationCards = (props: any) => {
  const { tool, icon, details, background } = props;
  return (
    <>
      <Card
        width="292px"
        height="325px"
        padding="56px 28px"
        border="1px solid #E9EBEC"
        radius="8px"
      >
        <Card
          width="48px"
          height="48px"
          radius="50%"
          bg={background}
          flex
          alignitems="center"
          justifycontent="center"
          margin="0 0 32px"
        >
          <Image src={icon} alt={tool} width="80%" />
        </Card>
        <TitleText size="20px" lineheight="30px" margin="0 0 16px" >{tool}</TitleText>
        <Text size="15px" lineheight="20px">{details}</Text>
      </Card>
    </>
  );
};

export default IntegrationCards;
