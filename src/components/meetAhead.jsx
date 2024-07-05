import { border, Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Ellipse21 from "../../public/Ellipse 21.png";
import Leaf from "../../public/leaf.png";
import Round1 from "../../public/round1.png";
import Round2 from "../../public/round2.png";
import Sun from "../../public/sun.png";
import Flower from "../../public/flower.png";
import Happy3 from "../../public/happy 3.png";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const MeetAhead = () => {
  const container = useRef();
  const flower = useRef();
  const leafmini = useRef();
  const happyImage = useRef();
  const round1 = useRef();
  const round2 = useRef();
  const leaf2 = useRef();
  const ellipse = useRef();
  const sun = useRef();

  useGSAP(() => {
    gsap.from(happyImage.current, {
      rotate: 50,
      scale: 0.5,
      opacity: 0,
      x: -20,
      y: -20,
      ease: "linear",
      scrollTrigger: {
        trigger: container.current,
        start: "350 bottom",
        end: "450 bottom",
        scrub: true,
      },
    });

    gsap.from(sun.current, {
      y: 80,
      opacity: 0,
      ease: "linear",
      scrollTrigger: {
        trigger: container.current,
        start: "450 bottom",
        end: "bottom bottom",
        scrub: true,
      },
    });

    gsap.to([flower.current, leaf2.current], {
      rotate: -360,
      repeat: -1, // Infinite repeats
      duration: 7, // Duration of each rotation
      ease: "linear",
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        end: "bottom center",
      },
    });
    gsap.from([leafmini.current, round1.current, round2.current], {
      rotate: -360,
      y: -50,
      x: -60,
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        end: "center center",
        scrub: true,
      },
    });

    gsap.from(ellipse.current, {
      rotate: -360,
      y: 160,
      x: 600,
      delay: 3,
      duration: 3,
      scrollTrigger: {
        trigger: container.current,
        start: "300 bottom",
        end: "bottom bottom",
        scrub: true,
      },
    });
  });

  return (
    <Box
      position={"relative"}
      clipPath={"margin-box"}
      borderRadius={"10px"}
      bg="#FFDEC890"
      ref={container}
      overflow={"hidden"}
      mt={{ base: 5, md: 10 }}
      mx={{ base: "10px" }}
      my={{ base: "40px" }}
      px={{ base: "40px" }}
      py={{ base: "80px" }}
    >
      <Box minHeight={"200px"} position={"relative"} overflow={"hidden"}>
        {/* Heading */}
        <Box>
          <Text>Built out of frustration</Text>
          <Text fontSize={{ base: "40px" }} fontWeight={{ base: "500" }}>
            Meet the ahead app
          </Text>
        </Box>
        {/* Flex Box */}
        <Flex
          mt={{ base: "50px" }}
          flexDirection={{ base: "column", lg: "row" }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {/* Images */}
          <Flex
            width={{ base: "100%", lg: "50%" }}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Flex
              borderRadius={"50%"}
              bg="#ffffff"
              position={"relative"}
              justifyContent={"center"}
              alignItems={"center"}
              border={{ base: "13px solid #D6D4D460" }}
              width={{ base: "200px" }}
              height={{ base: "200px" }}
            >
              <Flex
                justifyContent={"center"}
                alignItems={"center"}
                position={"absolute"}
                top={"-22%"}
                right={"32%"}
                width={{ base: "60px" }}
                height={{ base: "60px" }}
                ref={sun}
              >
                <Image
                  position={"absolute"}
                  src={Sun}
                  alt={"happy"}
                  width={"auto"}
                />
                <Text
                  position={"absolute"}
                  fontSize={"15px"}
                  color={"#fff"}
                  fontWeight={"500"}
                >
                  1
                </Text>
              </Flex>
              <Box
                position={"absolute"}
                top={"25%"}
                width={{ base: "60px" }}
                height={{ base: "50px" }}
              >
                <Image
                  src={Happy3}
                  alt={"happy"}
                  width={"auto"}
                  ref={happyImage}
                />
              </Box>
            </Flex>
          </Flex>
          {/* Text */}
          <Flex
            width={{ base: "100%", lg: "40%" }}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"start"}
            fontSize={{ base: "21px" }}
            fontWeight={"400"}
          >
            <Text>
              A personalized pocket coach that provides bite-sized,
              science-driven tools to boost emotional intelligence.
            </Text>
            <br />
            <Text>
              Think of it as a pocket cheerleader towards a better, more
              fulfilling.
            </Text>
          </Flex>
        </Flex>
        {/* background Images */}
        <Box
          ref={round2}
          position={"absolute"}
          bottom={"40%"}
          left={"35%"}
          zIndex={"-1"}
        >
          <Image src={Round2} width={"20"} style={{ rotate: "-15deg" }} />
        </Box>
        <Box
          ref={ellipse}
          position={"absolute"}
          bottom={"-2%"}
          left={"-10%"}
          zIndex={"-1"}
        >
          <Image src={Ellipse21} height={300} />
        </Box>
        <Box
          ref={leaf2}
          position={"absolute"}
          bottom={"34%"}
          left={"30%"}
          zIndex={"-1"}
        >
          <Image src={Leaf} width={"60"} style={{ rotate: "-15deg" }} />
        </Box>
        <Box
          ref={round1}
          position={"absolute"}
          bottom={"20%"}
          left={"28%"}
          zIndex={"-1"}
        >
          <Image src={Round1} width={"40"} style={{ rotate: "-15deg" }} />
        </Box>
        <Box
          ref={leafmini}
          position={"absolute"}
          top={"10%"}
          right={"10%"}
          zIndex={"-1"}
        >
          <Image src={Leaf} width={"40"} style={{ rotate: "-15deg" }} />
        </Box>
      </Box>

      <Box
        ref={flower}
        position={"absolute"}
        top={"4%"}
        right={"8%"}
        zIndex={999}
      >
        <Image src={Flower} width={"40"} style={{ rotate: "-15deg" }} />
      </Box>
    </Box>
  );
};

export default MeetAhead;
