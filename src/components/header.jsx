import { Box, Text, Button, Flex, Spacer } from "@chakra-ui/react";
import Link from "next/link";
import Logo from "../../public/Logo.png";
import Image from "next/image";

const Header = () => {
  return (
    <Flex alignItems={"center"} px={{ base: 2, md: 5 }} py={{ base: 5 }}>
      <Box w={{ base: "40px", md: "50px" }} h={{ base: "40px", md: "50px" }}>
        <Image
          src={Logo}
          alt="logo"
          height="auto"
          width="auto"
        />
      </Box>
      <Spacer />
      <Flex gap={5} display={{ base: "none", md: "flex" }}>
        <Link href="/">
          <Text fontWeight={600}>Section 1</Text>
        </Link>

        <Link href="/">
          <Text fontWeight={600}>Section 2</Text>
        </Link>

        <Link href="/">
          <Text fontWeight={600}>Section 3</Text>
        </Link>

        <Link href="/">
          <Text fontWeight={600}>Section 4</Text>
        </Link>
      </Flex>
      <Spacer />
      <Button
        h={{ base: "35px", md: "40px" }}
        fontSize={{ base: "14px", md: "15px" }}
        bg={"#000000"}
        _hover={"red"}
        color={"#ffffff"}
        borderRadius="150">
        Download app
      </Button>
    </Flex>
  );
};

export default Header;
