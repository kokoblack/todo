import { Flex, Text } from "@chakra-ui/react";

type ActivetaskProp = {
    num : number
}

const ActiveTask = ({num} : ActivetaskProp) => {
  return (
    <Flex justifyContent="start" alignItems="center" gap="4%">
            <Text
              fontSize={{ base: "6vw", sm: "2rem" }}
              bgColor="#609966"
              px={{ base: "6vw", sm: "1.5rem" }}
              py={{ base: ".7vw", sm: "0" }}
              borderLeftRadius={{ base: "4vw", sm: "2xl" }}
              borderRightRadius={{ base: "4vw", sm: "2xl" }}
            >
              {num}
            </Text>
            <Text>Tasks</Text>
          </Flex>
  )
}

export default ActiveTask