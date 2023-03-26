import { Flex, Spacer, Box, Text, Grid, Input } from "@chakra-ui/react";
import { TodoContext } from "@/components/TodoContext";
import Link from "next/link";
import { useContext } from "react";

type DisplayTaskProps = {
  checkActive: boolean;
};

const DisplayTasks = ({ checkActive }: DisplayTaskProps) => {
  const { myTodos, index, setIndex } = useContext(TodoContext);
  const isActive = checkActive
    ? myTodos[index.activeTodoIndex].active
    : myTodos[index.activeTodoIndex].done;

  return (
    <Grid
      templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
      placeItems="center"
      columnGap="2%"
      mt="1rem"
    >
      {isActive.map((todo, id) => (
        <Box
          key={id}
          w="100%"
          mt="2%"
          borderLeftRadius={{ base: "8vw", sm: "2rem" }}
          borderRightRadius={{ base: "8vw", sm: "2rem" }}
          bgColor="#9DC08B"
          p={{ base: "6%", sm: "3%" }}
        >
          <Link
            onClick={() =>
              checkActive
                ? setIndex({ ...index, activeTaskIndex: id })
                : setIndex({ ...index, activeDoneIndex: id })
            }
            href={checkActive ? "/active" : "/done"}
          >
            <Text fontSize={{ base: "8vw", sm: "3rem" }}>{todo.name}</Text>
            <Text fontSize={{ base: "4vw", sm: "1.2rem" }} noOfLines={1}>
              {checkActive
                ? todo.desc === ""
                  ? "Click to add description"
                  : todo.desc
                : todo.desc === ""
                ? "No description"
                : todo.desc}
            </Text>
          </Link>
        </Box>
      ))}
    </Grid>
  );
};

export default DisplayTasks;
