import { Flex, Box, Text, Textarea } from "@chakra-ui/react";
import { BsArrowLeftShort } from "react-icons/bs";
import { useState, useContext, useEffect, useRef } from "react";
import { TodoContext } from "@/components/TodoContext";
import SetAsDone from "@/components/SetAsDone";
import Done from "@/components/Done";
import NavigateBack from "@/components/navigateBack";

const Detailed = () => {
  const {
    myTodos,
    activeTodoIndex,
    activeTaskIndex,
    addTodo,
    setActiveTaskIndex,
    setAddTodos,
    setMyTodos,
  } = useContext(TodoContext);

  const todoName = myTodos[activeTodoIndex].name;
  const taskName = myTodos[activeTodoIndex].active[activeTaskIndex].name;
  const descText = myTodos[activeTodoIndex].active[activeTaskIndex].desc;
  console.log(myTodos);

  const [val, setVal] = useState(descText);
  const [done, toggleDone] = useState(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null!);

  const resizeTextArea = () => {
    textAreaRef.current.style.height = "auto";
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
    console.log(textAreaRef.current.scrollHeight);
  };

  const UpdateActive = () => {
    const newObj = myTodos[activeTodoIndex].active.map((obj, ind) => {
      if (activeTaskIndex === ind) {
        return { ...obj, desc: val };
      }

      return obj;
    });

    return newObj;
  };

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setVal(e.target.value);
    setMyTodos((prev) => {
      const newState = prev.map((obj, ind) => {
        if (activeTodoIndex === ind) {
          return {
            ...obj,
            active: UpdateActive(),
          };
        }

        return obj;
      });

      return newState;
    });
    localStorage.setItem("myTodos", JSON.stringify(myTodos));
  };

  useEffect(resizeTextArea, [val]);

  return (
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
        <NavigateBack page="/todo"/>

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
          placeholder="Click here to add discription"
          _placeholder={{ color: "#40513B" }}
          variant="unstyled"
          w="full"
          resize="none"
          rows={1}
          ref={textAreaRef}
          value={val}
          onChange={onChange}
        />

        <Box h="20vh" />

        <Box
          onClick={() => {
            toggleDone((prev) => !prev);
          }}
        >
          {!done ? <SetAsDone /> : <Done />}
        </Box>
      </Box>
    </Box>
  );
};

export default Detailed;
