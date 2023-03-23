import { Flex, Spacer, Box, Text, Grid, Input, Button } from "@chakra-ui/react";
import { BsPlusCircleFill, BsThreeDots } from "react-icons/bs";
import Link from "next/link";
import { useState, useEffect, useContext } from "react";
import { CheckDay } from "@/components/CheckDay";
import { TodoContext } from "@/components/TodoContext";

const Home = () => {
  const { myTodos, addTodo, setAddTodos, setMyTodos, setActiveTodoIndex } = useContext(TodoContext);
  console.log(myTodos);

  const [today, day, time] = CheckDay();
  const [myTodoName, setMyTodoName] = useState("");

  useEffect(() => {
    const getTodos = JSON.parse(localStorage.getItem("myTodos") || "[]");
    if (getTodos === null || myTodos.length !== 0) {
      localStorage.setItem("myTodos", JSON.stringify(myTodos));
    } else {
     setMyTodos(getTodos);
    }
  }, [addTodo]);

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
          Good <br /> {time}
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
            {myTodos.length}
          </Text>
          <Text>Todos</Text>
        </Flex>

        {myTodos.length === 0 ? (
          <Text
            textAlign="center"
            fontSize={{ base: "5vw", sm: "1.2rem" }}
            lineHeight={{ base: "6vw", sm: "1.2rem" }}
          >
            Click on the plus sign below to create your first todo
          </Text>
        ) : (
          <Grid
            templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
            placeItems="center"
            columnGap="2%"
          >
            {myTodos.map((todo, id) => (
              <Box
                key={id}
                w="100%"
                mt="2%"
                borderLeftRadius={{ base: "8vw", sm: "3rem" }}
                borderRightRadius={{ base: "8vw", sm: "3rem" }}
                bgColor="#9DC08B"
                p={{ base: "4%", sm: "3%" }}
              >
                <Link onClick={() => setActiveTodoIndex(id)} href="/todo">
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
                    {todo.active.length === 0
                      ? "No active task"
                      : `${todo.active.length} active task`}
                  </Text>
                  <Text fontSize={{ base: "8vw", sm: "3rem" }}>
                    {todo.name}
                  </Text>
                </Link>
              </Box>
            ))}
          </Grid>
        )}

        {!addTodo && (
          <Box
            onClick={() => setAddTodos(true)}
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
              onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
                if (event.key === "Enter") {
                  myTodoName !== ""
                    ? setMyTodos([
                        ...myTodos,
                        {
                          name: myTodoName,
                          active: [],
                          done: [],
                        },
                      ])
                    : null;
                  setAddTodos(false);
                }
              }}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setMyTodoName(e.target.value)
              }
              bgColor="#EDF1D6"
              placeholder="Add Todo"
              _placeholder={{ color: "#40513B" }}
              borderColor="#40513B"
              size={{ base: "lg", sm: "lg" }}
              _focus={{ border: "none", outline: "none" }}
              w={{ base: "70%", sm: "50%" }}
            />
            <Button
              onClick={() => {
                myTodoName !== ""
                  ? setMyTodos([
                      ...myTodos,
                      {
                        name: myTodoName,
                        active: [],
                        done: [],
                      },
                    ])
                  : null;
                setAddTodos(false);
              }}
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

export default Home;
