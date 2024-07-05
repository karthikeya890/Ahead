import { Box, Text, Flex, useBreakpointValue } from "@chakra-ui/react";
import Angry from "../../public/angry.png";
import AngryImage from "../../public/angryImage.png";
import FlushedEmoji from "../../public/flushedEmoji.png";
import GrimacingEmoji from "../../public/grimacingEmoji.png";
import RaisedEyeBrowEmoji from "../../public/raisedEyeBrow.png";
import UnamusedEmoji from "../../public/unamusedEmoji.png";
import GrinningEmoji from "../../public/grinningEmoji.png";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin);

const SoundFamiliar = () => {
  const container = useRef();
  const heading = useRef();
  const angryImage = useRef();

  const XScrollContainer = useRef();
  const card1 = useRef();
  const card2 = useRef();
  const card3 = useRef();
  const card4 = useRef();
  const card5 = useRef();
  const card6 = useRef();

  useGSAP(() => {
    const screenWidth = window.innerWidth;
    gsap.from(heading.current, {
      x: -500,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: container.current,
        end: "bottom 450",
        scrub: true,
      },
    });
    gsap.from(angryImage.current, {
      x: () => {
        if (screenWidth < 480) {
          return 100;
        }
        if (screenWidth < 600) {
          return 140;
        }
        if (screenWidth < 768) {
          return 200;
        }
        if (screenWidth < 1024) {
          return 270;
        }
        if (screenWidth <= 1280 || screenWidth > 1280) {
          return 380;
        }
      },
      y: 100,
      opacity: 0,
      rotate: -90,
      duration: 2.5,
      scrollTrigger: {
        trigger: container.current,
        end: "bottom 450",
        scrub: true,
      },
    });

    gsap.to(
      [
        card1.current,
        card2.current,
        card3.current,
        card4.current,
        card5.current,
        card6.current,
      ],
      {
        x: () => {
          if (screenWidth < 480) {
            return -1830;
          }
          if (screenWidth < 600) {
            return -1700;
          }
          if (screenWidth < 768) {
            return -1640;
          }
          if (screenWidth < 1024) {
            return -1475;
          }
          if (screenWidth <= 1280 || screenWidth > 1280) {
            return -940;
          }
        },
        scrollTrigger: {
          trigger: XScrollContainer.current,
          start: "-80 center",
          end: "300 center",
          scrub: true,
        },
      }
    );
  });

  return (
    <Box
      px={{ base: 2, md: 5 }}
      style={{ overflowX: "hidden", position: "relative" }}
    >
      {/* Heading */}
      <Flex ref={container}>
        <Text
          mb={20}
          ref={heading}
          fontSize={{
            base: "12px",
            sm: "19px",
            md: "22px",
            lg: "30px",
            xl: "40px",
            "2xl": "50px",
          }}
          fontWeight={600}
          width={"55%"}
        >
          Does this Sound familiar...
        </Text>
        <Box width={"45%"}>
          <Box
            ref={angryImage}
            height={{ base: "20px", sm: "25px", md: "30px", xl: "35px" }}
            width={{ base: "20px", sm: "25px", md: "30px", xl: "35px" }}
            style={{ rotate: "-40deg" }}
          >
            <Image src={Angry} alt="Angry-image" />
          </Box>
        </Box>
      </Flex>
      {/* Cards */}
      <Flex ref={XScrollContainer} my={"20px"} flex={"row"}>
        <Box
          ref={card1}
          height={"190px"}
          py={"15px"}
          minW={"320px"}
          boxShadow={"0px 0px 3px 3px #dad5f7"}
          borderRadius={"10px"}
          mx={"20px"}
          px={"30px"}
          bg="#EEEBFE"
        >
          <Image src={AngryImage} alt="angry-image" height={49} />
          <Text fontWeight={500} mt={3}>
            You argue with colleague
          </Text>
          <Text fontWeight={400} mt={1} fontSize={12}>
            You get angry and defensive, Instead of staying open and working
            towards common ground
          </Text>
        </Box>
        <Box
          ref={card2}
          height={"190px"}
          py={"15px"}
          minW={"320px"}
          boxShadow={"0px 0px 3px 3px #8c73f5"}
          borderRadius={"10px"}
          px={"30px"}
          mx={"20px"}
          bg="#a693f5"
          color={"#fff"}
        >
          <Image src={FlushedEmoji} alt="flushed-image" height={49} />
          <Text fontWeight={500} mt={3}>
            You get a promotion at work
          </Text>
          <Text fontWeight={400} mt={1} fontSize={12}>
            you questin yourself and wonder when they"ll realize youre an
            unqualified imposter, instead of trusting yourself & your abilities
          </Text>
        </Box>
        <Box
          ref={card3}
          height={"190px"}
          py={"15px"}
          minW={"320px"}
          boxShadow={"0px 0px 3px 3px #fce3bb"}
          borderRadius={"10px"}
          px={"30px"}
          mx={"20px"}
          bg="#FFEFD5"
        >
          <Image
            src={RaisedEyeBrowEmoji}
            alt="RaisedEyeBrow-image"
            height={49}
          />
          <Text fontWeight={500} mt={3}>
            You attend a class reunion
          </Text>
          <Text fontWeight={400} mt={1} fontSize={12}>
            you compare yourself with your peers achievements, instead of
            making your self-judegement more independent of others.
          </Text>
        </Box>
        <Box
          ref={card4}
          height={"190px"}
          py={"15px"}
          minW={"320px"}
          boxShadow={"0px 0px 3px 3px #ffecba"}
          borderRadius={"10px"}
          px={"30px"}
          mx={"20px"}
          bg="#FFFAED"
        >
          <Image src={UnamusedEmoji} alt="UnamusedEmoji-image" height={49} />
          <Text fontWeight={500} mt={3}>
            You are at a lively dinner party
          </Text>
          <Text fontWeight={400} mt={1} fontSize={12}>
            You play on your phone, instead of confidently approaching strangers
            and striking up a chat.
          </Text>
        </Box>
        <Box
          ref={card5}
          height={"190px"}
          py={"15px"}
          minW={"320px"}
          boxShadow={"0px 0px 3px 3px #ffb0ba"}
          borderRadius={"10px"}
          px={"30px"}
          mx={"20px"}
          bg="#ffc2ca"
          color={"#000"}
        >
          <Image src={GrimacingEmoji} alt="GrimacingEmoji-image" height={49} />
          <Text fontWeight={500} mt={3}>
            You hit dead end in a negotiation
          </Text>
          <Text fontWeight={400} mt={1} fontSize={12}>
            you get nervous, frazzled and frustrated, instead ofstaying
            optimstic and solution-oriented.
          </Text>
        </Box>
        <Box
          ref={card6}
          height={"190px"}
          py={"15px"}
          minW={"320px"}
          boxShadow={"0px 0px 3px 3px #c2ebff"}
          borderRadius={"10px"}
          px={"30px"}
          mx={"20px"}
          bg="#D8F2FF"
        >
          <Image src={GrinningEmoji} alt="GrinningEmoji-image" height={49} />
          <Text fontWeight={500} mt={3}>
            You have discussion with colleague.
          </Text>
          <Text fontWeight={400} mt={1} fontSize={12}>
            You stay calm and open-minded, actively listening to their
            perspective.
          </Text>
        </Box>
      </Flex>
      {/* <Box height={"100vh"} border={"4px solid yellow"}></Box> */}
    </Box>
  );
};

export default SoundFamiliar;
