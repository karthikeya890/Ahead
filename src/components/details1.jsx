import { Flex, Box, Text } from "@chakra-ui/react";

const Details1 = () => {
  return (
    <Flex
      flexDirection={{ base: "column", md: "row" }}
      alignItems={{ base: "center" }}
      justifyContent={{ base: "start", md: "space-between" }}
      px={{ base: 2, md: 5 }}
      py={{ base: 5 }}
      mt={5}
    >
      <Box
        width={{ base: "100%", md: "30%" }}
        height={{ base: 20, md: 150 }}
        px={{ base: "20px", lg: "40px" }}
        py={{ base: "15px" }}
      >
        <Text fontSize={{ base: 20 }} fontWeight={700}>
          EQ beats IQ
        </Text>
      </Box>
      <Flex
        width={{ base: "100%", md: "70%" }}
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent={{ base: "start", sm: "space-between" }}
        px={{ base: "20px", md: "0px" }}
      >
        <Flex
          fontSize={{ base: 16, sm: 16, md: 13, lg: 18 }}
          width={{ base: "100%", sm: "45%" }}
          justifyContent={"center"}
          minH={{ base: 150 }}
          fontWeight={500}
          color={"#575759"}
          mr={{ base: 0 }}
        >
          People with high emotional intelligence (EQ) live more fulfilled
          lives. They tend to be happier and have healthier relationships.
        </Flex>
        <Flex
          fontSize={{ base: 16, sm: 16, md: 13, lg: 18 }}
          width={{ base: "100%", sm: "45%" }}
          justifyContent={"center"}
          minH={{ base: 150 }}
          fontWeight={500}
          color={"#575759"}
        >
          They are more successfu1 in their pursuits and make for inspiring
          leaders. According to science, they earn $29k a year
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Details1;
