import { Box } from "@chakra-ui/react";

type ButtonProp = {
  children: string;
  setColor: string;
  index: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  toggleActive: React.Dispatch<React.SetStateAction<boolean>>;
};

const Buttons = ({
  children,
  toggleActive,
  setColor,
  index,
  setCount,
}: ButtonProp) => {
  return (
    <Box
      onClick={() => {
        children === "Active" ? toggleActive(true) : toggleActive(false);
        setCount(index);
      }}
      fontSize={{ base: "5vw", sm: "1.2rem" }}
      bgColor={setColor}
      px={{ base: "4vw", sm: "1.2rem" }}
      py={{ base: "1vw", sm: ".5rem" }}
      borderLeftRadius={{ base: "2vw", sm: "2xl" }}
      borderRightRadius={{ base: "2vw", sm: "2xl" }}
      borderColor="#609966"
      border="1px"
      cursor="pointer"
    >
      {children}
    </Box>
  );
};

export default Buttons;
