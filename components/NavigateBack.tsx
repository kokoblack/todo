import { Box } from "@chakra-ui/react";
import { BsArrowLeftShort } from "react-icons/bs";
import Link from "next/link";

type LinkProp = {
  page: string;
};
const NavigateBack = ({ page }: LinkProp) => {
  return (
    <Link href={page}>
      <Box
        bgColor="#405136"
        borderRadius="full"
        p=".5rem"
        fontSize={{ base: "6vw", sm: "2rem" }}
        w="max-content"
        color="#609966"
      >
        <BsArrowLeftShort />
      </Box>
    </Link>
  );
};

export default NavigateBack;
