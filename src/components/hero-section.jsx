import { Box, Flex, Text, Heading, Button } from "@chakra-ui/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Happy from "../../public/happy.png";
import Sad from "../../public/sad.png";
import Angry from "../../public/angry.png";
import Phone from "../../public/Phone.png";
import Card from "../../public/card.png";
import Image from "next/image";
import { FaStar, FaApple } from "react-icons/fa";
import Round1 from "../../public/round1.png";
import Round2 from "../../public/round2.png";
import Leaf from "../../public/leaf.png";
import SplitType from "split-type";

gsap.registerPlugin(useGSAP);

const HeroSection = () => {
  const section1 = useRef();
  const section2 = useRef();
  const HappyEmoji = useRef();
  const SadEmoji = useRef();
  const AngryEmoji = useRef();
  const SmallHappyEmoji = useRef();
  const SmallSadEmoji = useRef();
  const SmallAngryEmoji = useRef();
  const CardImage = useRef();
  const heading = useRef();
  const star1 = useRef();
  const star2 = useRef();
  const star3 = useRef();
  const star4 = useRef();
  const star5 = useRef();
  const round1 = useRef();
  const round2 = useRef();
  const leaf = useRef();
  const leafmini = useRef();
  const round2mini = useRef();

  useGSAP(() => {
    new SplitType(heading.current, {
      types: "chars",
    });
    gsap.to(leafmini.current, {
      rotate: -360,
      repeat: -1,
      duration: 25,
      x: +100,
      y: +100,
    });
    gsap.to(round2mini.current, {
      rotate: 360,
      repeat: -1,
      duration: 20,
      x: +400,
      y: 50,
      scale: 3,
    });
    gsap.to(leaf.current, {
      rotate: 360,
      repeat: -1,
      duration: 20,
    });
    gsap.to(round1.current, {
      rotate: 360,
      repeat: -1,
      duration: 50,
      x: -200,
      y: -200,
    });



    let delay = 0.2;

    [...heading.current.querySelectorAll(".char")].forEach((char) => {
      gsap.from(char, {
        duration: 0.5,
        opacity: 0,
        y: -100,
        stagger: "1",
        delay: delay,
      });
      delay += 0.1;

      char.addEventListener("mouseenter", () => {
        gsap.to(char, {
          y: -30,
          duration: 0.5,
          stagger: "1",
        });
      });

      char.addEventListener("mouseout", () => {
        gsap.to(char, {
          y: 0,
          duration: 1,
          duration: 0.5,
          stagger: "1",
        });
      });
    });

    gsap.from(star1.current, {
      scale: 0,
      delay: delay,
    });
    delay += 0.2
    gsap.from(star2.current, {
      scale: 0,
      delay: delay,
    });
    delay += 0.2
    gsap.from(star3.current, {
      scale: 0,
      delay: delay,
    });
    delay += 0.2
    gsap.from(star4.current, {
      scale: 0,
      delay: delay,
    });
    delay += 0.2
    gsap.from(star5.current, {
      scale: 0,
      delay: delay,
    });

    gsap.from(section1.current, {
      rotate: 180,
      duration: 10,
      ease: "elastic",
      stagger: "0.5",
    });

    gsap.from(CardImage.current, {
      scale: 0.5,
      duration: 8,
      transformOrigin: "top right",
      ease: "elastic",
    });

    gsap.from(section2.current, {
      rotate: -180,
      duration: 10,
      ease: "elastic",
      stagger: "0.5",
    });
    gsap.from([HappyEmoji.current, SmallHappyEmoji.current], {
      rotate: 180,
      duration: 10,
      ease: "elastic",
      stagger: "0.5",
      scale: 0.5,
    });
    gsap.from([SadEmoji.current, SmallSadEmoji.current], {
      rotate: 180,
      duration: 10,
      ease: "elastic",
      stagger: "0.5",
      scale: 0.5,
    });
    gsap.from([AngryEmoji.current, SmallAngryEmoji.current], {
      rotate: -180,
      duration: 10,
      ease: "elastic",
      stagger: "0.5",
      scale: 0.5,
    });
  });

  return (
    <Box
      bg="#d8d3f5"
      boxShadow={"0px 0px 8px 2px #0003"}
      borderRadius={30}
      mt={{ base: 5, md: 10 }}
      mx={{ base: "10px" }}
      border="2px solid #c1b8f2"
      clipPath={"padding-box"}
    >
      <Flex
        h={"100%"}
        flexDirection={{ base: "column", md: "row" }}
        justifyContent={{ base: "center" }}
        alignItems={"center"}
        px={{ base: "20px", lg: "40px" }}
        py={{ base: "15px" }}
      >
        {/* Heading section */}
        <Flex
          order={{ base: 2, md: 1 }}
          flexDirection={"column"}
          justifyContent={"center"}
          position={"relative"}
          width={{ base: "100%", md: "60%" }}
          height={"100%"}
          clipPath={"padding-box"}
        >
          <Box>
            <Text fontWeight={500}>Ahead app</Text>
            <Heading
              ref={heading}
              mt={3}
              fontSize={{ base: 25, sm: 37, lg: 60 }}
              lineHeight={1}
            >
              Master your life <br /> by mastering <br /> emotions
            </Heading>
          </Box>
          <Flex mt={5}>
            <Button
              bg={"#000000"}
              color={"#ffffff"}
              px={{ base: 2, sm: 3, md: 4 }}
              mr={{ base: 3, sm: 4, md: 5 }}
            >
              <Flex alignItems={"center"}>
                <Box
                  mr={{ base: 1, sm: 2, md: 3 }}
                  fontSize={{ base: 20, sm: 25, md: 30 }}
                >
                  <FaApple />
                </Box>
                <Box>
                  <Text fontSize={{ base: 8, sm: 9, md: 10 }} fontWeight={400}>
                    Download on the
                  </Text>
                  <Text
                    fontSize={{ base: 10, sm: 12.5, md: 15 }}
                    fontWeight={400}
                  >
                    App Store
                  </Text>
                </Box>
              </Flex>
            </Button>

            <Flex flexDirection={"column"} justifyContent={"center"}>
              <Flex gap={1}>
                <Box ref={star1} fontSize={{ base: 13, sm: 15.5, md: 18 }}>
                  <FaStar color="#ffbb00" />
                </Box>
                <Box ref={star2} fontSize={{ base: 13, sm: 15.5, md: 18 }}>
                  <FaStar color="#ffbb00" />
                </Box>
                <Box ref={star3} fontSize={{ base: 13, sm: 15.5, md: 18 }}>
                  <FaStar color="#ffbb00" />
                </Box>
                <Box ref={star4} fontSize={{ base: 13, sm: 15.5, md: 18 }}>
                  <FaStar color="#ffbb00" />
                </Box>
                <Box ref={star5} fontSize={{ base: 13, sm: 15.5, md: 18 }}>
                  <FaStar color="#ffbb00" />
                </Box>
              </Flex>
              <Text fontWeight={500} fontSize={{ base: 10, sm: 11, md: 12 }}>
                100+ AppStore reviews
              </Text>
            </Flex>
          </Flex>
        </Flex>
        {/* Animation Section */}
        <Flex
          order={{ base: 1, md: 2 }}
          justifyContent={"center"}
          alignItems={"center"}
          position={"relative"}
          width={{ base: "60%", md: "40%" }}
          height={"100%"}
        >
          <Flex
            position={"relative"}
            ref={section1}
            maxHeight={"350px"}
            maxWidth={"350px"}
            flexGrow={1}
            aspectRatio={"1/1"}
            borderRadius={"50%"}
            border={{
              base: "2px dashed  #ffffff",
              md: "3px dashed  #ffffff",
              lg: "4px dashed  #ffffff",
            }}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box
              style={{ rotate: "-30deg" }}
              ref={SadEmoji}
              position={"absolute"}
              left={"10%"}
              top={"3%"}
              width={"12.5%"}
            >
              <Image src={Sad} alt="sad-image" width={"auto"} />
            </Box>
            <Box
              style={{ rotate: "20deg" }}
              ref={AngryEmoji}
              position={"absolute"}
              right={"-5%"}
              top={"35%"}
              width={"10%"}
            >
              <Image src={Angry} alt="angry-image" width={"auto"} />
            </Box>
            <Box
              style={{ rotate: "20deg" }}
              ref={HappyEmoji}
              position={"absolute"}
              bottom={"3%"}
              left={"12%"}
              width={"12%"}
            >
              <Image src={Happy} alt="happy-image" width={"auto"} />
            </Box>
          </Flex>
          <Flex
            position={"absolute"}
            ref={section2}
            width={"100%"}
            maxHeight={"350px"}
            maxWidth={"350px"}
            aspectRatio={"1/1"}
            borderRadius={"50%"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box
              style={{ rotate: "180deg" }}
              ref={SmallAngryEmoji}
              position={"absolute"}
              left={"3%"}
              top={"50%"}
              width={"5.5%"}
            >
              <Image src={Angry} alt="angry-image" width={"auto"} />
            </Box>
            <Box
              style={{ rotate: "-40deg" }}
              ref={SmallHappyEmoji}
              position={"absolute"}
              right={"5%"}
              top={"10%"}
              width={"5.5%"}
            >
              <Image src={Happy} alt="happy-image" width={"auto"} />
            </Box>
            <Box
              style={{ rotate: "60deg" }}
              ref={SmallSadEmoji}
              position={"absolute"}
              bottom={"4%"}
              right={"20%"}
              width={"5.5%"}
            >
              <Image src={Sad} alt="sad-image" width={"auto"} />
            </Box>
          </Flex>
          <Box
            position={"absolute"}
            width={"70%"}
            maxHeight={250}
            maxWidth={250}
            aspectRatio={"1/1"}
            bg={"#bab0f5"}
            borderRadius={"50%"}
          ></Box>

          <Box
            position={"absolute"}
            width={"70%"}
            maxHeight={250}
            maxWidth={250}
            aspectRatio={"1/1"}
          >
            <Box
              ref={CardImage}
              position={"absolute"}
              right={"14%"}
              width={"49%"}
              aspectRatio={"1/1"}
            >
              <Image src={Phone} alt="Phone" width={"auto"} />
            </Box>
            <Box
              ref={CardImage}
              position={"absolute"}
              right={"60%"}
              top={"31%"}
              width={"40%"}
              aspectRatio={"1/1"}
            >
              <Image src={Card} alt="Phone" width={"auto"} />
            </Box>
          </Box>
        </Flex>
        <Box ref={round1} alt="round1-img" position={"absolute"} width={"3.5%"}>
          <Image src={Round1} alt="round-1" />
        </Box>
        <Box
          ref={round2}
          alt="round2-img"
          position={"absolute"}
          width={"3.5%"}
          left={"1%"}
          top={"23%"}
        >
          <Image src={Round2} alt="round-2" />
        </Box>
        <Box
          ref={leaf}
          alt="leaf-img"
          position={"absolute"}
          width={"12%"}
          left={"10%"}
          top={"6%"}
        >
          <Image src={Leaf} alt="leaf" />
        </Box>

        <Box
          ref={leafmini}
          alt="leaf-img"
          position={"absolute"}
          width={"4%"}
          left={"50%"}
          top={"12%"}
        >
          <Image src={Leaf} alt="leaf-2" />
        </Box>
        <Box
          ref={round2mini}
          alt="round2-img"
          position={"absolute"}
          width={"2%"}
          left={"40%"}
          top={"30%"}
        >
          <Image src={Round2} alt="round-2" />
        </Box>
      </Flex>
    </Box>
  );
};

export default HeroSection;
