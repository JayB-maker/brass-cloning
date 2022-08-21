import {
  Card,
  LinkText,
  primaryColor,
  Text,
  TitleText,
} from "../../../../../ui";
import { navProps } from "../Navbar";

const NavDropdown = (props: navProps) => {
  const { path, heading, details } = props;
  return (
    <Card>
      <LinkText
        // flex
        padding="15px 20px"
        hbg="#EBEDEE"
        flexdirection="column"
        width="100%"
        to={path}
      >
        <TitleText size="14px" lineheight="23px" heavy color={primaryColor}>
          {heading}
        </TitleText>
        <Text size="14px" lineheight="23px" color={primaryColor}>
          {details}
        </Text>
      </LinkText>
    </Card>
  );
};

export default NavDropdown;
