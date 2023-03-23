import { Flex, Spacer, Box, Text, Grid, Input, Button } from "@chakra-ui/react";
import { BsPlusCircleFill } from "react-icons/bs";
import { AiOutlineArrowDown } from "react-icons/ai";
import { useState, useContext, useEffect } from "react";
import { TodoContext } from "@/components/TodoContext";
import Link from "next/link";

const Todo = () => {
  const {
    myTodos,
    activeTodoIndex,
    addTodo,
    setActiveTaskIndex,
    setAddTodos,
    setMyTodos,
  } = useContext(TodoContext);
  console.log(myTodos[activeTodoIndex]);

  const [taskName, setTaskName] = useState("");

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
        <Text
          fontSize={{ base: "20vw", sm: "16vw", lg: "10rem" }}
          lineHeight={{ base: "18vw", sm: "13vw", lg: "8rem" }}
          mb="3rem"
          mt="2rem"
        >
          {myTodos[activeTodoIndex].name}
        </Text>

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
              {myTodos[activeTodoIndex].active.length}
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

        {myTodos[activeTodoIndex].active.length === 0 ? (
          <Box
            textAlign="center"
            fontSize={{ base: "5vw", sm: "1.2rem" }}
            lineHeight={{ base: "6vw", sm: "1.2rem" }}
            mt="5%"
          >
            <Text mb="5%">
              Click on the plus sign below to create your first task
            </Text>
            <Flex
              justify="center"
              align="center"
              fontSize={{ base: "5vw", sm: "2rem" }}
            >
              <AiOutlineArrowDown />
            </Flex>
          </Box>
        ) : (
          <Grid
            templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
            placeItems="center"
            columnGap="2%"
            mt="1rem"
          >
            {myTodos[activeTodoIndex].active.map((todo, id) => (
              <Box
                key={id}
                w="100%"
                mt="2%"
                borderLeftRadius={{ base: "8vw", sm: "2rem" }}
                borderRightRadius={{ base: "8vw", sm: "2rem" }}
                bgColor="#9DC08B"
                p={{ base: "6%", sm: "3%" }}
              >
                <Link onClick={() => setActiveTaskIndex(id)} href="/detailed">
                  <Text fontSize={{ base: "8vw", sm: "3rem" }}>
                    {todo.name}
                  </Text>
                  <Text fontSize={{ base: "4vw", sm: "1.2rem" }}>
                    {todo.desc === "" ? "Click to add description" : todo.desc}
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
                  taskName !== ""
                    ? setMyTodos((prev) => {
                        const newState = prev.map((obj, ind) => {
                          if (activeTodoIndex === ind) {
                            return {
                              ...obj,
                              active: [
                                ...myTodos[activeTodoIndex].active,
                                { name: taskName, desc: "" },
                              ],
                            };
                          }

                          return obj;
                        });

                        return newState;
                      })
                    : null;
                  setAddTodos(false);
                }
              }}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setTaskName(e.target.value)
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
                taskName !== ""
                  ? setMyTodos((prev) => {
                      const newState = prev.map((obj, ind) => {
                        if (activeTodoIndex === ind) {
                          return {
                            ...obj,
                            active: [
                              ...myTodos[activeTodoIndex].active,
                              { name: taskName, desc: "" },
                            ],
                          };
                        }

                        return obj;
                      });

                      return newState;
                    })
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

export default Todo;
