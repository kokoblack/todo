import { Box, Text, Flex } from "@chakra-ui/react";
import { AiOutlineArrowDown } from "react-icons/ai";

type ButtonProp = {
  children: string;
  show?: boolean
};

const Createtask = ({ children, show }: ButtonProp) => {
  const checkShow = show
  return (
    <Box textAlign="center" mt={{base: '8%', sm: '5%'}}>
      <Text
        fontSize={{ base: "5vw", sm: "1.2rem" }}
        lineHeight={{ base: "6vw", sm: "1.2rem" }}
        mb="5%"
      >
        {children}
      </Text>
      {checkShow && (
        <Flex
          justify="center"
          align="center"
          fontSize={{ base: "5vw", sm: "2rem" }}
        >
          <AiOutlineArrowDown />
        </Flex>
      )}
    </Box>
  );
};

export default Createtask;
