import { Flex, Spacer, Box, Text, Grid, Input, Button } from "@chakra-ui/react";
import { BsPlusCircleFill, BsThreeDots } from "react-icons/bs";
import Link from "next/link";
import { useState, useEffect, useContext } from "react";
import { CheckDay } from "@/components/CheckDay";
import { TodoContext } from "@/components/TodoContext";
import ActiveTask from "@/components/ActiveTask";
import Createtask from "@/components/Createtask";
import AddButton from "@/components/AddButton";
import AddNewTodo from "@/components/AddNewTodo";
import { useScrollPosition } from "@/components/Scroll";
import { UpdatelocalStorage } from "@/components/UpdatelocalStorage";

const Home = () => {
  const { myTodos, addTodo, index, setIndex, setAddTodos, setMyTodos } =
    useContext(TodoContext);
  const scroll = useScrollPosition()
  console.log(myTodos);
  console.log(scroll)
  

  const [today, day, time] = CheckDay();
  const [myTodoName, setMyTodoName] = useState("");

  const setTodos = () => {
    setMyTodos([
      ...myTodos,
      {
        name: myTodoName,
        active: [],
        done: [],
      },
    ]);
  };

  UpdatelocalStorage()

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
        {/* {scroll >= 100 && (<Box bgColor='red' fontSize='10rem'>hi</Box>)} */}
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

        <ActiveTask num={myTodos.length} />

        {myTodos.length === 0 ? (
          <Createtask>Click on the plus sign to create your first task</Createtask>
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
                <Link
                  onClick={() => setIndex({ ...index, activeTodoIndex: id })}
                  href="/todo"
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

        {!addTodo && <AddButton setState={setAddTodos} />}

        {addTodo && (
          <AddNewTodo
            setAddTodo={setAddTodos}
            setTodo={setTodos}
            setTodoName={setMyTodoName}
            name={myTodoName}
            dep={addTodo}
          />
        )}
      </Box>
    </>
  );
};

export default Home;
