import { Input, Button, Flex } from "@chakra-ui/react";
import { useRef, useEffect } from "react";

type AddNewProp = {
  setTodoName: React.Dispatch<React.SetStateAction<string>>;
  setAddTodo: React.Dispatch<React.SetStateAction<boolean>>;
  setTodo: React.Dispatch<React.SetStateAction<void>>;
  name: string;
  dep: boolean;
};

const AddNewTodo = ({
  setTodo,
  setAddTodo,
  setTodoName,
  name,
  dep,
}: AddNewProp) => {
  const inputRef = useRef<any>();

  useEffect(() => {
    inputRef.current.focus();
  }, [dep]);
  return (
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
        ref={inputRef}
        onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
          if (event.key === "Enter") {
            name !== "" ? setTodo() : null;
            setAddTodo(false);
          }
        }}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTodoName(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1).toLowerCase())
        }
        bgColor="#EDF1D6"
        placeholder="Add Todo"
        _placeholder={{ color: "#40513B" }}
        size={{ base: "lg", sm: "lg" }}
        variant="unstyled"
        _focus={{ outlineColor: "#40513B" }}
        w={{ base: "70%", sm: "50%" }}
      />
      <Button
        onClick={() => {
          if (name !== "") {
            setTodo() 
          }
          setAddTodo(false);
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
  );
};

export default AddNewTodo;
