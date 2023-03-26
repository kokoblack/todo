import { Box, Text, Textarea } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState, useContext, useEffect, useRef } from "react";
import { TodoContext } from "@/components/TodoContext";
import SetAsDone from "@/components/SetAsDone";
import { UpdateActive, UpdateDone, delFromActive } from "@/components/UpdateTodos";
import autosize from "autosize";
import { NavigateBack, UpdatelocalStorage } from "../components/import";

const Detailed = () => {
  const { myTodos, index, setMyTodos } = useContext(TodoContext);

  const [todoName, setTodoName] = useState("");
  const [taskName, setTaskName] = useState("");
  const [descText, setDescText] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null!);
  const router = useRouter();

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMyTodos((prev) => {
      const newState = prev.map((obj, ind) => {
        if (index.activeTodoIndex === ind) {
          return {
            ...obj,
            active: UpdateActive(e, myTodos, index),
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
      setTodoName(myTodos[index.activeTodoIndex]?.name);
      setTaskName(
        myTodos[index.activeTodoIndex].active[index.activeTaskIndex]?.name
      );
      setDescText(
        myTodos[index.activeTodoIndex].active[index.activeTaskIndex]?.desc
      );
    }
  }, [index.activeTaskIndex, index.activeTodoIndex]);

  useEffect(() => {
    autosize(textAreaRef.current);
    return () => {
      autosize.destroy(textAreaRef.current);
    };
  }, [descText, textAreaRef.current]);

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

            <Textarea
              bgColor="#EDF1D6"
              fontSize={{ base: "5vw", sm: "1rem" }}
              placeholder="Click here to add discription"
              _placeholder={{ color: "#40513B" }}
              variant="unstyled"
              w="full"
              rows={1}
              transition="none"
              ref={textAreaRef}
              value={
                myTodos[index.activeTodoIndex].active[index.activeTaskIndex]
                  ?.desc
              }
              onChange={onChange}
              resize="none"
            />

            <Box h="20vh" />

            <Box
              onClick={() => {
                UpdateDone(myTodos, index, setMyTodos);
                delFromActive(index, setMyTodos);
                router.push("/todo");
              }}
              cursor="pointer"
            >
              <SetAsDone />
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Detailed;
