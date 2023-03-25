import { Flex, Spacer, Box, Text, Grid } from "@chakra-ui/react";
import { RiCloseCircleFill, RiAddCircleFill } from "react-icons/ri";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useContext, useEffect } from "react";
import { CheckDay } from "@/components/CheckDay";
import { TodoContext } from "@/components/TodoContext";
import ActiveTask from "@/components/ActiveTask";
import Createtask from "@/components/Createtask";
import AddButton from "@/components/AddButton";
import AddNewTodo from "@/components/AddNewTodo";
import { UpdatelocalStorage } from "@/components/UpdatelocalStorage";

const Home = () => {
  const { myTodos, addTodo, index, setIndex, setAddTodos, setMyTodos } =
    useContext(TodoContext);

  const [today, day, time] = CheckDay();
  const [myTodoName, setMyTodoName] = useState("");
  const [delTodoIndex, setDelTodoIndex] = useState<number>()
  const [effect, toggleEffect] = useState(false)

  const router = useRouter();

  const setTodos = () => {
    const name = myTodos.map((e) => e.name);
    const checkName = name.includes(myTodoName);
    checkName
      ? setMyTodos([...myTodos])
      : setMyTodos([
          ...myTodos,
          {
            name: myTodoName,
            active: [],
            done: [],
          },
        ]);
  };

  useEffect (() => {
      const newTodo = myTodos.filter((_, id) => {
        return delTodoIndex !== id
      });
      localStorage.setItem('myTodos', JSON.stringify(newTodo))
      setMyTodos(newTodo);
    
  }, [delTodoIndex, effect]);

  UpdatelocalStorage();

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
          fontSize={{ base: "20vw", sm: "14vw", lg: "10rem" }}
          lineHeight={{ base: "18vw", sm: "13vw", lg: "8rem" }}
          mb="3rem"
          mt="2rem"
        >
          Good {time}
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

        <ActiveTask num={myTodos.length} />

        {myTodos.length === 0 ? (
          <Createtask show={true}>
            Click on the plus sign to create your first task
          </Createtask>
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
                <Flex
                  fontSize={{ base: "6vw", sm: "2rem" }}
                  justify="start"
                  align="center"
                  mb="1rem"
                  cursor="pointer"
                >
                  <Box
                    onClick={() => {
                      setIndex({ ...index, activeTodoIndex: id });
                      router.push("/todo");
                      setAddTodos(true);
                    }}
                    opacity="0.5"
                    _hover={{ opacity: "1" }}
                  >
                    <RiAddCircleFill />
                  </Box>
                  <Spacer />
                  <Box onClick={() => {
                      setDelTodoIndex(id);
                      toggleEffect((prev) => !prev)
                    }} opacity="0.5" _hover={{ opacity: "1" }}>
                    <RiCloseCircleFill />
                  </Box>
                </Flex>
                <Link
                  onClick={() => setIndex({ ...index, activeTodoIndex: id })}
                  href="/todo"
                >
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
