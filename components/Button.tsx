import { Box } from "@chakra-ui/react";

type ButtonProp = {
  children: string;
};

const Buttons = ({ children }: ButtonProp) => {
  return (
    <Box
      fontSize={{ base: "5vw", sm: "1.2rem" }}
      bgColor="#EDF1D6"
      px={{ base: "4vw", sm: "1.2rem" }}
      py={{ base: "1vw", sm: ".5rem" }}
      borderLeftRadius={{ base: "2vw", sm: "2xl" }}
      borderRightRadius={{ base: "2vw", sm: "2xl" }}
      borderColor="#609966"
      border="1px"
      _hover={{ bgColor: "#609969" }}
      cursor="pointer"
    >
      {children}
    </Box>
  );
};

export default Buttons;
