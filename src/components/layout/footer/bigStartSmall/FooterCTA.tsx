import { Card, LinkText, Text, whiteColor } from "../../../ui";

const FooterCTA = () => {
  return (
    <Card flex gap="16px">
      <LinkText to="/">
        <Card
          color={whiteColor}
          flex
          gap="12px"
          alignitems="center"
          radius="8px"
          padding="18px 27px"
          bg="#1A1C1F"
        >
          <i className="fa-solid fa-mobile" />
          <Text size="16px" lineheight="24px">
            Android
          </Text>
        </Card>
      </LinkText>
      <LinkText to="/">
        <Card
          color={whiteColor}
          flex
          gap="12px"
          alignitems="center"
          radius="8px"
          padding="18px 27px"
          bg="#1A1C1F"
        >
          <i className="fa-brands fa-apple" />
          <Text size="16px" lineheight="24px">
            ios
          </Text>
        </Card>
      </LinkText>
    </Card>
  );
};

export default FooterCTA;
