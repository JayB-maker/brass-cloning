import { useContext } from "react";
import { TestimonialsContext } from "../../../../../helper/Context";
import { TestimonialsDetails } from "../../../../data/Data";
import { Card, Image } from "../../../../ui";

const RightSection = () => {
  const { clicked } = useContext(TestimonialsContext);
  return (
    <Card flexratio="1" bg="#EBEDEE" width="100%" smheight="471.67px" alignitems="center" flex justifycontent="center" overflowx="hidden">
      {TestimonialsDetails.map((img, index) => (
        <Image
          src={img.imageSRC}
          display={clicked === index ? "block" : "none"}
          key={index}
          width="100%"
          height="100%"
          mdheight="100%"
          smwidth="100%"
          smheight="100%"
          cover
        />
      ))}
    </Card>
  );
};

export default RightSection;
