import { useContext } from "react";
import { everythingYouNeedContext } from "../../../../../helper/Context";
import { EverythingYouNeedDetails } from "../../../../data/Data";
import { Card, Video } from "../../../../ui";

const RightSection = () => {
  const { clicked } = useContext(everythingYouNeedContext);
  return (
    <Card flexratio="1" radius="10px" bg="#EBEDEE" width="100%" alignitems="center" flex justifycontent="center">
      {EverythingYouNeedDetails.map((vid, index) => (
        <Video
          src={vid.video}
          display={clicked === index ? "block" : "none"}
          key={index}
          radius="10px"
          width="100%"
          mdwidth="50%"
          smwidth="100%"
          autoPlay
        />
      ))}
    </Card>
  );
};

export default RightSection;
