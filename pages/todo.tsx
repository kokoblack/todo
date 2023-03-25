import { Flex, Spacer, Box, Text, Grid, Input } from "@chakra-ui/react";
import { useState, useContext, useEffect, useRef } from "react";
import { TodoContext } from "@/components/TodoContext";
import Link from "next/link";
import ActiveTask from "@/components/ActiveTask";
import Buttons from "@/components/Button";
import Createtask from "@/components/Createtask";
import AddButton from "@/components/AddButton";
import AddNewTodo from "@/components/AddNewTodo";
import NavigateBack from "@/components/NavigateBack";
import { UpdatelocalStorage } from "@/components/UpdatelocalStorage";
import DisplayTasks from "@/components/DisplayTasks";

const Todo = () => {
  const { myTodos, addTodo, index, setIndex, setAddTodos, setMyTodos } =
    useContext(TodoContext);

  const [taskName, setTaskName] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [count, setCount] = useState(0);
  const [checkActive, setCheckActive] = useState(0);

  const setTodos = () => {
    setMyTodos((prev) => {
      const newState = prev.map((obj, ind) => {
        if (index.activeTodoIndex === ind) {
          return {
            ...obj,
            active: [
              ...myTodos[index.activeTodoIndex].active,
              { name: taskName, desc: "" },
            ],
          };
        }

        return obj;
      });

      return newState;
    });
  };

  UpdatelocalStorage();

  useEffect(() => {
    if (myTodos.length !== 0) {
      const check = isActive
        ? myTodos[index.activeTodoIndex].active.length
        : myTodos[index.activeTodoIndex].done.length;
      setCheckActive(check);
    }
  });

  return (
    <>
      {myTodos.length !== 0 && (
        <Box
          px="4%"
          py="2%"
          bgColor="#EDF1D6"
          color="#40513B"
          maxW="1440px"
          mx="auto"
        >
          <NavigateBack page="/" />

          <Text
            fontSize={{ base: "20vw", sm: "15vw", lg: "10rem" }}
            lineHeight={{ base: "18vw", sm: "13vw", lg: "10rem" }}
            mb="3rem"
            mt="2rem"
          >
            {myTodos[index.activeTodoIndex].name}
          </Text>

          <Flex
            justifyContent="start"
            alignItems="center"
            px=".5%"
            fontSize={{ base: "7vw", sm: "2rem" }}
            color="#40513B"
          >
            {isActive ? (
              <ActiveTask num={myTodos[index.activeTodoIndex].active.length} />
            ) : (
              <ActiveTask num={myTodos[index.activeTodoIndex].done.length} />
            )}

            <Spacer />

            <Flex justifyContent="start" alignItems="center" gap="4%">
              {["Active", "Done"].map((e, i) => (
                <Buttons
                  setCount={setCount}
                  index={i}
                  setColor={count === i ? "#609969" : "#EDF1D6"}
                  toggleActive={setIsActive}
                >
                  {e}
                </Buttons>
              ))}
            </Flex>
          </Flex>

          {checkActive === 0 ? (
            isActive ? (
              <Createtask>
                Click on the plus sign to create your first task
              </Createtask>
            ) : (
              <Createtask show={false}>You have no completed task</Createtask>
            )
          ) : (
            <DisplayTasks checkActive={isActive} />
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
      )}
    </>
  );
};

export default Todo;
