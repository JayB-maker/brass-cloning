import React, { useState } from "react";
import { Card, Image, Text, TitleText, whiteColor } from "../../../ui";

const RightSection = () => {
  const [isPopup, setIsPopup] = useState(false);
  return (
    <>
      <Card
        radius="10px"
        flexratio="1"
        color="white"
        width="100%"
        display="flex"
        justifycontent="flex-end"
        position="relative"
      >
        <Image
          src="assets/hero.png"
          alt="hero-image"
          radius="10px"
          width="100%"
        />
        <Card
          position="absolute"
          width="100%"
          height="100%"
          bg="linear-gradient(45deg, rgb(6,8,9,0.6), transparent)"
          radius="10px"
          index="2"
        />
        <Card
          position="absolute"
          bottom="32px"
          left="24px"
          flex
          gap="10px"
          pointer
          alignitems="center"
          index="3"
          onClick={() => setIsPopup(true)}
        >
          <Card>
            <i
              style={{ fontSize: "32px" }}
              className="fa-solid fa-circle-play"
            />
          </Card>
          <Card flex flexdirection="column">
            <TitleText size="16px" lineheight="26px" heavy color={whiteColor}>
              Play this video
            </TitleText>
            <Text size="16px" lineheight="20px">
              To see why we built Brass
            </Text>
          </Card>
        </Card>
      </Card>
      {isPopup && (
        <>
          <Card
            position="fixed"
            left="0"
            top="0"
            height="100vh"
            width="100vw"
            bg="rgb(6,8,9,0.9)"
            index="12"
            flex
            alignitems="center"
            justifycontent="center"
            overflow="hidden"
          >
            <i
              style={{
                color: "white",
                position: "absolute",
                top: "20px",
                right: "35px",
                fontSize: "35px",
                cursor: "pointer",
              }}
              onClick={() => setIsPopup(false)}
              className="fa-solid fa-circle-xmark"
            />
            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/637218269?h=2a0f8b8a46"
              width="896px"
              height="504px"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </Card>
        </>
      )}
    </>
  );
};

export default RightSection;
