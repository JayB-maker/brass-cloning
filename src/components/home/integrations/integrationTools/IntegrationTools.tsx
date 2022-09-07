import React from "react";
import { IntegrationDetails } from "../../../data/Data";
import { Card } from "../../../ui";
import IntegrationCards from "./IntegrationCards";

const IntegrationTools = () => {
  return (
    <>
      <Card flex gap="24px" overflowx="scroll" width="100%" margin="64px 0 0" smmargin="40px 0 0">
        {IntegrationDetails.map((item, index) => (
          <Card key={index}>
            <IntegrationCards
              icon={item.iconSRC}
              tool={item.tools}
              details={item.details}
              background={item.backgroundColor}
            />
          </Card>
        ))}
      </Card>
    </>
  );
};

export default IntegrationTools;
