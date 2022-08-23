import { TrusteesDetails } from "../../../data/Data";
import { Card, Image } from "../../../ui";

interface TrusteeProps {
  TrusteesDetails?: Array<object>;
}

const Trustee = (props: TrusteeProps) => {
  return (
    <>
      <Card flex gap="32px" width="90%" margin="40px 0 0" smmargin="70px 0 0">
        {TrusteesDetails.map((trustee, index) => (
          <a style={{flex:`${trustee.flex}`}} href={trustee.path} target="_blank" key={index}>
            <Image flexratio={trustee.flex} width="100%" src={trustee.image} alt="trustee" />
          </a>
        ))}
      </Card>
    </>
  );
};

export default Trustee;
