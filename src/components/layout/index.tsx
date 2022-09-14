import { Card } from "../ui";
import Footer from "./footer";
import Header from "./header";

const Layout = (props: any) => {
  const { children } = props;
  return (
    <>
      <Header />
      <Card margin="80px 0 0">{children}</Card>
      <Footer />
    </>
  );
};

export default Layout;
