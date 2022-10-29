import { Button, Checkbox, Flex, Text } from "@chakra-ui/react";

type Todos = {
  getTodos: {
    id: string;
    title: string;
    description: string;
    completed: boolean;
  }[];
};

type Props = {
  todos: {
    data: Todos;
  };
  handleOpenModal: (id: string) => void;
  handleDelete: (id: string) => void;
};

export const TodoList = ({ todos, handleDelete, handleOpenModal }: Props) => {
  return (
    <form>
      {todos.data?.getTodos?.map((todo: any) => (
        <Flex
          key={todo.id}
          justifyContent="space-between"
          w="100%"
          h="100%"
          mt="2"
          alignItems="center"
        >
          <Flex
            bg="white"
            color="blackAlpha.900"
            p="3"
            w="100%"
            alignItems="center"
          >
            <Checkbox pr="3" isChecked={todo.completed} />
            <Text pr="2">{todo.title}</Text>
          </Flex>
          <Flex bg="white" p="2">
            <Button
              size="sm"
              mr="1"
              ml="1"
              bg="green.300"
              type="button"
              onClick={() => handleOpenModal(todo.id)}
            >
              Edit
            </Button>
            <Button
              size="sm"
              mr="1"
              bg="red.400"
              ml="1"
              type="button"
              onClick={() => handleDelete(todo.id)}
            >
              Exclude
            </Button>
          </Flex>
        </Flex>
      ))}
    </form>
  );
};
