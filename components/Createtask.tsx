import { Box, Text, Flex } from "@chakra-ui/react";
import { AiOutlineArrowDown } from "react-icons/ai";

type ButtonProp = {
  children: string;
};

const Createtask = ({ children }: ButtonProp) => {
  return (
    <Box textAlign="center" mt="5%">
      <Text
        fontSize={{ base: "5vw", sm: "1.2rem" }}
        lineHeight={{ base: "6vw", sm: "1.2rem" }}
        mb="5%"
      >
        Click on the plus sign below to create your first {children}
      </Text>
      <Flex
        justify="center"
        align="center"
        fontSize={{ base: "5vw", sm: "2rem" }}
      >
        <AiOutlineArrowDown />
      </Flex>
    </Box>
  );
};

export default Createtask;
