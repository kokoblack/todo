import { Flex, Spacer, Box, Text, Grid, Input, Button } from "@chakra-ui/react";
import { BsPlusCircleFill } from "react-icons/bs";
import { useState } from "react";

const todo = () => {
  const [addTask, setAddTask] = useState(false);

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
          mt="2rem"
        >
          Myself
        </Box>

        <Flex
          justifyContent="start"
          alignItems="center"
          px=".5%"
          fontSize={{ base: "7vw", sm: "2rem" }}
          color="#40513B"
        >
          <Flex justifyContent="start" alignItems="center" gap="4%">
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
            <Text>Tasks</Text>
          </Flex>
          <Spacer />
          <Flex justifyContent="start" alignItems="center" gap="4%">
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
              Active
            </Box>
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
              Done
            </Box>
          </Flex>
        </Flex>

        <Grid
          templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
          placeItems="center"
          columnGap="2%"
          mt="1rem"
        >
          {[1, 2, 3, 4, 5].map((todo: number) => (
            <Box
              key={todo}
              w="100%"
              mt="2%"
              borderLeftRadius={{ base: "8vw", sm: "2rem" }}
              borderRightRadius={{ base: "8vw", sm: "2rem" }}
              bgColor="#9DC08B"
              p={{ base: "6%", sm: "3%" }}
            >
              <Text fontSize={{ base: "8vw", sm: "3rem" }}>Myself</Text>
              <Text fontSize={{ base: "4vw", sm: "1.2rem" }}>Description</Text>
            </Box>
          ))}
        </Grid>

        {!addTask && (
          <Box
            onClick={() => setAddTask(true)}
            position="fixed"
            bottom="5%"
            left="50%"
            ml={{ base: "-5vw", sm: "-1.5rem" }}
            fontSize={{ base: "10vw", sm: "3rem" }}
            cursor="pointer"
          >
            <BsPlusCircleFill />
          </Box>
        )}

        {addTask && (
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
              size={{ base: "lg", sm: "lg" }}
              _focus={{ border: "none", outline: "none" }}
              w={{ base: "70%", sm: "50%" }}
            />
            <Button
              onClick={() => setAddTask(false)}
              bgColor="#40513B"
              variant="solid"
              cursor="pointer"
              color="#EDF1D6"
              _hover={{ opacity: "0.9" }}
              size={{ base: "lg", sm: "lg" }}
            >
              Add
            </Button>
          </Flex>
        )}
      </Box>
    </>
  );
};

export default todo;
