import { FinancialStacksDetails } from "../../../data/Data";
import { Card, Image, Text, TitleText } from "../../../ui";

const FinancialStacksCard = () => {
  return (
    <>
      <Card
        flex
        justifycontent="space-between"
        smflexdirection="column"
        alignitems="center"
        smalignitems="center"
        smdisplay="flex"
        mddisplay="grid"
        mdgridcolumn="repeat(auto-fit, 350px)"
        xmdgridcolumn="repeat(auto-fit, 330px)"
        mdjustifycontent="unset"
        mdgap="40px"
        xmdgap="20px"
        padding="100px 0"
        mdpadding="64px 0"
        smgap="64px"
        flexratio="1"
      >
        {FinancialStacksDetails.map((details, index) => (
          <Card
            key={index}
            flex
            alignitems="center"
            smwidth="100%"
            smflexdirection="column"
            gap="12px"
            smgap="24px"
          >
            <Card>
              <Image
                radius="10px"
                width="72px"
                src={details.icon}
                alt={details.title}
              />
            </Card>
            <Card flex flexdirection="column" gap="4px">
              <TitleText
                heavy
                size="20px"
                smtextalign="center"
                lineheight="28px"
              >
                {details.title}
              </TitleText>
              <Text
                size="15px"
                lineheight="20px"
                smtextalign="center"
                padding="0 15px 0 0"
                mdpadding="0"
              >
                {details.details}
              </Text>
            </Card>
          </Card>
        ))}
      </Card>
    </>
  );
};

export default FinancialStacksCard;
