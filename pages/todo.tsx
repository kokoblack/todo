import { Flex, Spacer, Box, Text } from "@chakra-ui/react";
import { useState, useContext, useEffect } from "react";
import { TodoContext } from "@/components/TodoContext";
import {
  ActiveTask,
  Buttons,
  Createtask,
  AddButton,
  AddNewTodo,
  NavigateBack,
  UpdatelocalStorage,
  DisplayTasks,
} from "../components/import";

const Todo = () => {
  const { myTodos, addTodo, index, setAddTodos, setMyTodos } =
    useContext(TodoContext);

  const [taskName, setTaskName] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [count, setCount] = useState(0);
  const [checkActive, setCheckActive] = useState(0);

  const updateActive = (ele: { name: string; desc: string }[]) => {
    const name = ele.map((e) => e.name);
    const checkName = name.includes(taskName);
    return checkName ? [...ele] : [...ele, { name: taskName, desc: "" }];
  };

  const setTodos = () => {
    setMyTodos((prev) => {
      const newState = prev.map((obj, ind) => {
        if (index.activeTodoIndex === ind) {
          return {
            ...obj,
            active: updateActive(myTodos[index.activeTodoIndex].active),
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
  }, [myTodos, isActive, index.activeTodoIndex]);

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
                  key={i}
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
              <Createtask show={true}>
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
