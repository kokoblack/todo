import { Flex, Box, Text } from "@chakra-ui/react";
import { RiArrowDownSLine } from "react-icons/ri";
import { MdDone } from "react-icons/md";

const Detailed = () => {
  return (
    <Box
      bgColor="#EDF1D6"
      position="absolute"
      top="0"
      w="full"
      h="full"
      maxW="1440px"
    >
      <Box
        w="full"
        h="full"
        py={{ base: "5%", sm: "3%" }}
        px="2%"
        position="relative"
      >
        <Box
          bgColor="#405136"
          borderRadius="full"
          p=".5rem"
          fontSize={{ base: "6vw", sm: "2rem" }}
          w="max-content"
          color="#609966"
        >
          <RiArrowDownSLine />
        </Box>

        <Text
          fontSize={{ base: "5vw", sm: "1rem" }}
          bgColor="#EDF1D6"
          px={{ base: "4vw", sm: "1rem" }}
          py={{ base: "1vw", sm: ".5rem" }}
          borderLeftRadius={{ base: "6vw", sm: "3xl" }}
          borderRightRadius={{ base: "6vw", sm: "3xl" }}
          borderColor="#609966"
          border="1px"
          w="max-content"
          my="2rem"
        >
          Myself
        </Text>

        <Text
          fontSize={{ base: "16vw", sm: "4rem", lg: "5rem" }}
          lineHeight={{ base: "14vw", sm: "4rem", lg: "5rem" }}
          my="3%"
        >
          Grocery <br /> Shopping
        </Text>

        <Text
          fontSize={{ base: "4vw", sm: ".8rem" }}
          mb="1rem"
          mt="2rem"
          color="#405136"
          opacity="0.8"
        >
          Additional Description
        </Text>

        <Text
          fontSize={{ base: "5vw", sm: "1.2rem" }}
          lineHeight={{ base: "6vw", sm: "1.2rem" }}
        >
          some text kdcnowjmodo pjwfeovowrdovnp pineifnpiefnponv inrvnirirv
        </Text>

        <Flex
          bgColor="#405136"
          position="fixed"
          left="50%"
          ml={{ base: "-40%", sm: "-25%", lg: "-15%" }}
          bottom="5%"
          justify="center"
          align="center"
          p="2px"
          w={{ base: "80%", sm: "50%", lg: "30%" }}
          borderLeftRadius={{ base: "12vw", sm: "3rem" }}
          borderRightRadius={{ base: "12vw", sm: "3rem" }}
        >
          <Box
            mr="auto"
            bgColor="#edf1d6"
            borderRadius="full"
            p="1rem"
            fontSize={{ base: "8vw", sm: "2rem" }}
          >
            <MdDone />
          </Box>
          <Text
            mr="auto"
            color="#609966"
            fontSize={{ base: "4vw", sm: "1.2rem" }}
          >
            Set As Done
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default Detailed;
