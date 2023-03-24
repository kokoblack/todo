import { Flex, Box, Text } from "@chakra-ui/react";
import { MdDone } from "react-icons/md";

const Done = () => {
  return (
    <Flex
      bgColor="#405136"
      position="fixed"
      left="55%"
      ml={{ base: "-40%", sm: "-25%", lg: "-15%" }}
      bottom="5%"
      justify="center"
      align="center"
      p="2px"
      w={{ base: "80%", sm: "50%", lg: "30%" }}
      borderLeftRadius={{ base: "12vw", sm: "3rem" }}
      borderRightRadius={{ base: "12vw", sm: "3rem" }}
    >
      <Text ml="auto" color="#609966" fontSize={{ base: "4vw", sm: "1.2rem" }}>
        Task Done
      </Text>
      <Box w="45%" fontSize={{ base: "8vw", sm: "2rem" }}>
        <Box w='fit-content' ml="auto" bgColor="#edf1d6" borderRadius="full" p="1rem">
          <MdDone />
        </Box>
      </Box>
    </Flex>
  );
};

export default Done;
