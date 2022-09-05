import { useContext } from "react";
import { TestimonialsContext } from "../../../../../helper/Context";
import { TestimonialsDetails } from "../../../../data/Data";
import { Card, Image } from "../../../../ui";

const RightSection = () => {
  const { clicked } = useContext(TestimonialsContext);
  return (
    <Card flexratio="1" bg="#EBEDEE" width="100%" alignitems="center" flex justifycontent="center" overflowx="hidden">
      {TestimonialsDetails.map((img, index) => (
        <Image
          src={img.imageSRC}
          display={clicked === index ? "block" : "none"}
          key={index}
          width="130%"
          smwidth="100%"
        />
      ))}
    </Card>
  );
};

export default RightSection;
