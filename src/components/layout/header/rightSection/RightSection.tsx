import {
  accentColor,
  Card,
  LinkText,
  TitleText,
  whiteColor,
} from "../../../ui";
import Resources from "./Resources";

const RightSection = () => {
  return (
    <>
      <Card flex gap="32px" alignitems="center" mddisplay="none">
        <Resources />
        <LinkText
          margin="2px 0 0"
          size="14px"
          lineheight="23px"
          weight="600"
          color={whiteColor}
          to="/"
        >
          Login
        </LinkText>
        <LinkText
          margin="2px 0 0"
          padding="11px 32px"
          weight="600"
          bg={accentColor}
          radius="5px"
          size="14px"
          lineheight="23px"
          color={whiteColor}
          to="/"
        >
          Open an account
        </LinkText>
      </Card>
    </>
  );
};

export default RightSection;
