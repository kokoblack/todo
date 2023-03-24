import { Flex, Spacer, Box, Text, Grid, Input} from "@chakra-ui/react";
import { useState, useContext, useEffect, useRef } from "react";
import { TodoContext } from "@/components/TodoContext";
import Link from "next/link";
import ActiveTask from "@/components/ActiveTask";
import Buttons from "@/components/Button";
import Createtask from "@/components/Createtask";
import AddButton from "@/components/AddButton";
import AddNewTodo from "@/components/AddNewTodo";
import NavigateBack from "@/components/navigateBack";

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
  // const taskName = useRef('')

  const setTodos = () => {
    setMyTodos((prev) => {
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
    });
  };

  useEffect(() => {
      localStorage.setItem("myTodos", JSON.stringify(myTodos));
  }, [myTodos]);

  return (
    <>
    {/* <Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => ref.current = e.target.value }/> */}
      <Box
        px="4%"
        py="2%"
        bgColor="#EDF1D6"
        color="#40513B"
        maxW="1440px"
        mx="auto"
      >
        <NavigateBack page='/'/>

        <Text
          fontSize={{ base: "20vw", sm: "15vw", lg: "10rem" }}
          lineHeight={{ base: "18vw", sm: "13vw", lg: "10rem" }}
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
          <ActiveTask num={myTodos[activeTodoIndex].active.length} />

          <Spacer />

          <Flex justifyContent="start" alignItems="center" gap="4%">
            <Buttons>Active</Buttons>
            <Buttons>Done</Buttons>
          </Flex>
        </Flex>

        {myTodos[activeTodoIndex].active.length === 0 ? (
          <Createtask>task</Createtask>
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

        {!addTodo && <AddButton setState={setAddTodos} />}

        {addTodo && (
          <AddNewTodo
            setAddTodo={setAddTodos}
            setTodo={setTodos}
            setTodoName={setTaskName}
            name={taskName}
            dep={addTodo}
          />
        )}
      </Box>
    </>
  );
};

export default Todo;
