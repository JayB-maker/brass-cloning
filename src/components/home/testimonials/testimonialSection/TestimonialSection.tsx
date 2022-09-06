import { useState } from "react";
import { TestimonialsContext } from "../../../../helper/Context";
import { Card } from "../../../ui";
import LeftSection from "./LeftSection/LeftSection";
import RightSection from "./rightSection/RightSection";

const TestimonialSection = () => {
  const [clicked, setClicked] = useState(2);
  return (
    <>
      <TestimonialsContext.Provider value={{ clicked, setClicked }}>
        <Card flex maxwidth="1440px" smflexdirection="column-reverse" margin="50px 0 0" width="100%" bg="black">
          <LeftSection />
          <RightSection />
        </Card>
      </TestimonialsContext.Provider>
    </>
  );
};

export default TestimonialSection;
