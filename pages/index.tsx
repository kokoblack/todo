import { Flex, Spacer, Box, Text, Grid, Input, Button } from "@chakra-ui/react";
import { BsPlusCircleFill, BsThreeDots } from "react-icons/bs";
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

  const [addTodo, setAddTodos] = useState(false);

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
        <Box
          fontSize={{ base: "20vw", sm: "16vw", lg: "10rem" }}
          lineHeight={{ base: "18vw", sm: "13vw", lg: "8rem" }}
          mb="3rem"
          mt='2rem'
        >
          Good <br /> {checkHour()}
        </Box>
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
              bgColor="#9DC08B"
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

        {!addTodo && (
          <Box
            onClick={() => setAddTodos(true)}
            position="fixed"
            bottom="5%"
            left="50%"
            ml={{base: '-5vw', sm: '-1.5rem'}}
            fontSize={{base: '10vw', sm: '3rem'}}
            cursor="pointer"
          >
            <BsPlusCircleFill />
          </Box>
        )}

        {addTodo && (
          <Flex
            justify="center"
            align="center"
            gap="2%"
            position="fixed"
            bottom="5%"
            left="50%"
            w="100%"
            ml="-50%"
          >
            <Input
              bgColor="#EDF1D6"
              placeholder="Add Todo"
              _placeholder={{ color: "#40513B" }}
              borderColor="#40513B"
              size={{base: 'lg', sm: 'lg'}}
              _focus={{border: "none", outline: 'none'}}
              w={{base: '70%', sm: '50%'}}
            />
            <Button
              onClick={() => setAddTodos(false)}
              bgColor="#40513B"
              variant="solid"
              cursor="pointer"
              color="#EDF1D6"
              _hover={{opacity: '0.9'}}
              size={{base: 'lg', sm: 'lg'}}
            >
              Add
            </Button>
          </Flex>
        )}
      </Box>
    </>
  );
};

export default Home;
