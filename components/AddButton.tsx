import { Box, } from "@chakra-ui/react";
import { BsPlusCircleFill } from "react-icons/bs";

type ButtonProp = {
  setState: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddButton = ({setState}: ButtonProp) => {
  return (
    <Box
      onClick={() => {setState(true)}}
      position="fixed"
      bottom="5%"
      left="50%"
      ml={{ base: "-5vw", sm: "-1.5rem" }}
      fontSize={{ base: "10vw", sm: "3rem" }}
      cursor="pointer"
    >
      <BsPlusCircleFill />
    </Box>
  );
};

export default AddButton;
