import { Card, InnerSection, MainSection, Text, TitleText } from "../../ui";
import FinancialStacksCard from "./financialStacksCard/FinancialStacksCard";

const FinancialStacks = () => {
  return (
    <MainSection padding="98px 0 0">
      <InnerSection>
        <Card>
          <TitleText textalign="center" size="30px" lineheight="41px" heavy>
            The complete financial stack for your business
          </TitleText>
          <Text
            center
            size="18px"
            mdsize="15px"
            lineheight="26px"
            margin="16px 0 0"
          >
            Top-end financial tools to help your business with its financial
            operations and cash flow.
          </Text>
          <Text center size="18px" mdsize="15px" lineheight="26px">
            {" "}
            We help companies of all types work better, save time and money with
            a simply better banking service that works.
          </Text>
        </Card>
        <FinancialStacksCard />
      </InnerSection>
    </MainSection>
  );
};

export default FinancialStacks;
