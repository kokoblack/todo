import { Input, Button, Flex } from "@chakra-ui/react";

type AddNewProp = {
  setTodoName: React.Dispatch<React.SetStateAction<string>>;
  setAddTodo: React.Dispatch<React.SetStateAction<boolean>>;
  setTodo: React.Dispatch<React.SetStateAction<void>>;
  name: string;
};

const AddNewTodo = ({ setTodo, setAddTodo, setTodoName, name }: AddNewProp) => {
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
        onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
          if (event.key === "Enter") {
            name !== "" ? setTodo() : null;
            setAddTodo(false);
          }
        }}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTodoName(e.target.value)
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
          name !== "" ? setTodo() : null;
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
