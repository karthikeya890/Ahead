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

gsap.registerPlugin(useGSAP);

const HeroSection = () => {
  const mainSection = useRef();
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

  useGSAP(() => {
    gsap.from(star1.current, {
      scale: 0,
    });
    gsap.from(star2.current, {
      scale: 0,
      duration: 0.5,
      delay: 0.5,
    });
    gsap.from(star3.current, {
      scale: 0,
      duration: 0.5,
      delay: 1,
    });
    gsap.from(star4.current, {
      scale: 0,
      duration: 0.5,
      delay: 1.5,
    });
    gsap.from(star5.current, {
      scale: 0,
      duration: 0.5,
      delay: 2,
    });

    gsap.from(heading.current, {
      x: -100,
      duration: 1,
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
      bg="#EEEBFE"
      borderRadius={30}
      h={"100%"}
      mt={{ base: 5, md: 10 }}
      mx={{ base: "10px" }}
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
          <Box ref={heading}>
            <Text fontWeight={500}>Ahead app</Text>
            <Heading
              mt={3}
              fontSize={{ base: 25, sm: 37, lg: 43.5, xl: 50 }}
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
                <Box mr={{ base: 1, sm: 2, md: 3 }}>
                  <FaApple fontSize={{ base: 20, sm: 25, md: 30 }} />
                </Box>
                <Box>
                  <Text fontSize={{ base: 8, sm: 9, md: 10 }}>
                    Download on the
                  </Text>
                  <Text fontSize={{ base: 10, sm: 12.5, md: 15 }}>
                    App Store
                  </Text>
                </Box>
              </Flex>
            </Button>

            <Flex flexDirection={"column"} justifyContent={"center"}>
              <Flex gap={1}>
                <Box ref={star1} fontSize={{ base: 13, sm: 15.5, md: 18 }}>
                  <FaStar color="#FCD343" />
                </Box>
                <Box ref={star2} fontSize={{ base: 13, sm: 15.5, md: 18 }}>
                  <FaStar color="#FCD343" />
                </Box>
                <Box ref={star3} fontSize={{ base: 13, sm: 15.5, md: 18 }}>
                  <FaStar color="#FCD343" />
                </Box>
                <Box ref={star4} fontSize={{ base: 13, sm: 15.5, md: 18 }}>
                  <FaStar color="#FCD343" />
                </Box>
                <Box ref={star5} fontSize={{ base: 13, sm: 15.5, md: 18 }}>
                  <FaStar color="#FCD343" />
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
          ref={mainSection}
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
            bg={"#DDD6F8"}
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
      </Flex>
    </Box>
  );
};

export default HeroSection;
