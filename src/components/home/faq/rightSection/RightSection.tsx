import { useState } from 'react'
import { FAQDetails } from '../../../data/Data'
import { Card, grayColor, TitleText, whiteColor } from '../../../ui'

interface IClicked {
    isClicked?: any;
}

const RightSection = () => {
    const [isClicked, setIsClicked] = useState<IClicked>({isClicked: 0});

    const handleClicked = (index:any) => {
        if (isClicked === index) {
            setIsClicked(null);
        }
        setIsClicked(index);
    } 
  return (
    <Card flexratio='1' flex flexdirection='column' color={whiteColor}>
        {FAQDetails.map((faq, index) => (
            <Card key={index} flex flexdirection='column' bg={isClicked === index ? "#1A1C1F" :  "transparent"} pointer padding='40px 16px' bbottom='1px solid #1A1C1F'>
                <Card flex justifycontent='space-between'>
                    <TitleText>{faq.question}</TitleText>

                </Card>
            </Card>
        ))}
    </Card>
  )
}

export default RightSection