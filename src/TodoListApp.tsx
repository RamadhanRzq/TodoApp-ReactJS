import { Box } from "@chakra-ui/react";
import AddTodoList from "../src/features/AddTodoList";
import ListTodoList from "./components/ListTodoList";

const TodoListApp = () => {
  return (
    <>
      <Box p={4}>
        <Box my={3}>
          <AddTodoList />
        </Box>
        <Box my={3}>
          <ListTodoList />
        </Box>
      </Box>
    </>
  );
};

export default TodoListApp;