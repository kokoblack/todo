import { Flex, Spacer, Box, Text, Grid } from "@chakra-ui/react";
import { BsPlusCircleFill, BsThreeDots } from "react-icons/bs";
import { HiOutlinePlusSm } from "react-icons/hi";
import { useState } from "react";

const Home = () => {
  const date = new Date();
  const today = date.toLocaleDateString("en-US", { weekday: "long" });
  const day = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const hour = date.getHours();

  const [color, setColor] = useState<string>("#609966");

  const checkHour = () => {
    if (hour >= 0 && hour <= 11) {
      return "Morning";
    } else if (hour >= 12 && hour <= 17) {
      return "Afternoon";
    } else if (hour >= 18 && hour <= 23) {
      return "Evening";
    }
  };

  return (
    <>
      <Box
        px="4%"
        py="2%"
        bgColor="#EDF1D6"
        color="#40513B"
        maxW="1440px"
        mx="auto"
      >
        <Text
          fontSize={{ base: "20vw", sm: "16vw", lg: "10rem" }}
          lineHeight={{ base: "18vw", sm: "13vw", lg: "8rem" }}
          mb="3rem"
        >
          {" "}
          Good <br /> {checkHour()}
        </Text>
        <Flex
          fontSize={{ base: "4vw", sm: "1rem" }}
          align="center"
          justify="center"
          px=".5%"
          mb="2rem"
        >
          <div>
            <Text color="#609966">Today&apos;s {today} </Text>
            <Text color="#9DC08B">{day}</Text>
          </div>
          <Spacer />
          <Box textAlign="right">
            <Text color="#609966">75% done </Text>
            <Text color="#9DC08B">Completed Tasks</Text>
          </Box>
        </Flex>

        <Flex
          flex="flex"
          justifyContent="start"
          alignItems="center"
          gap="1rem"
          px=".5%"
          fontSize={{ base: "7vw", sm: "2rem" }}
        >
          <Text
            fontSize={{ base: "6vw", sm: "2rem" }}
            bgColor="#609966"
            px={{ base: "6vw", sm: "1.5rem" }}
            py={{ base: ".7vw", sm: "0" }}
            borderLeftRadius={{ base: "4vw", sm: "2xl" }}
            borderRightRadius={{ base: "4vw", sm: "2xl" }}
          >
            5
          </Text>
          <Text>Todos</Text>
        </Flex>

        <Grid
          templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
          placeItems="center"
          columnGap="2%"
        >
          {[1, 2, 3, 4, 5].map((todo) => (
            <Box
              key={todo}
              w="100%"
              mt="2%"
              borderLeftRadius={{ base: "8vw", sm: "3rem" }}
              borderRightRadius={{ base: "8vw", sm: "3rem" }}
              bgColor={color === "#609966" ? "#9DC08B" : "#609966"}
              p={{ base: "4%", sm: "3%" }}
            >
              <Flex justify="start" align="center" mb="1rem">
                <Box opacity="0.5" fontSize={{ base: "8vw", sm: "3rem" }}>
                  <BsPlusCircleFill />
                </Box>
                <Spacer />
                <Box fontSize={{ base: "1rem", sm: "1.5rem" }}>
                  <BsThreeDots />
                </Box>
              </Flex>

              <Text fontSize={{ base: "4vw", sm: "1.2rem" }}>
                2 Active Tasks
              </Text>
              <Text fontSize={{ base: "8vw", sm: "3rem" }}>Myself</Text>
            </Box>
          ))}
        </Grid>

        <Box position="fixed" bottom="5%" left="50%" ml="-2.5vw" fontSize="5vw">
          <BsPlusCircleFill />
        </Box>
      </Box>
    </>
  );
};

export default Home;
