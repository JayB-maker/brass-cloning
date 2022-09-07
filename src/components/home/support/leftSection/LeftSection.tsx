import React from "react";
import { Card, Image } from "../../../ui";

const LeftSection = () => {
  return (
    <Card flexratio="5" overflow="hidden" height="100vh">
      <Image
        src="assets/support.png"
        alt="support"
        width="120%"
        margin="0 0 0 -70px"
        mdcover
        cover
        height="100vh"
        smheight="unset"
        smwidth="140%"
      />
    </Card>
  );
};

export default LeftSection;
