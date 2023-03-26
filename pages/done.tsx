import { Box, Text } from "@chakra-ui/react";
import { useState, useContext, useEffect } from "react";
import { TodoContext } from "@/components/TodoContext";
import { Done, NavigateBack, UpdatelocalStorage } from "../components/import";

const Detailed = () => {
  const { myTodos, index } = useContext(TodoContext);

  const [todoName, setTodoName] = useState("");
  const [taskName, setTaskName] = useState("");
  const [descText, setDescText] = useState("");

  UpdatelocalStorage();

  useEffect(() => {
    if (myTodos.length !== 0) {
      setTodoName(myTodos[index.activeTodoIndex]?.name);
      setTaskName(
        myTodos[index.activeTodoIndex].done[index.activeDoneIndex]?.name
      );
      setDescText(
        myTodos[index.activeTodoIndex].done[index.activeDoneIndex]?.desc
      );
    }
  }, [index.activeTaskIndex, index.activeTodoIndex]);

  return (
    <>
      {myTodos.length !== 0 && (
        <Box
          bgColor="#EDF1D6"
          position="absolute"
          top="0"
          w="full"
          h="full"
          maxW="1440px"
          color="#40513B"
        >
          <Box
            w="full"
            h="full"
            py={{ base: "5%", sm: "3%" }}
            px="2%"
            position="relative"
          >
            <NavigateBack page="/todo" />

            <Text
              fontSize={{ base: "5vw", sm: "1rem" }}
              bgColor="#EDF1D6"
              px={{ base: "4vw", sm: "1rem" }}
              py={{ base: "1vw", sm: ".5rem" }}
              borderLeftRadius={{ base: "6vw", sm: "3xl" }}
              borderRightRadius={{ base: "6vw", sm: "3xl" }}
              borderColor="#609966"
              border="1px"
              w="max-content"
              my="2rem"
            >
              {todoName}
            </Text>

            <Text
              fontSize={{ base: "16vw", sm: "4rem", lg: "5rem" }}
              lineHeight={{ base: "14vw", sm: "4rem", lg: "5rem" }}
              my="3%"
            >
              {taskName}
            </Text>

            <Text
              fontSize={{ base: "4vw", sm: ".8rem" }}
              mb="1rem"
              mt="2rem"
              color="#405136"
              opacity="0.8"
            >
              Additional Description
            </Text>
            <Text fontSize={{ base: "5vw", sm: "1rem" }}>
              {descText ? descText : "No description"}
            </Text>
            <Done />
          </Box>
        </Box>
      )}
    </>
  );
};

export default Detailed;
