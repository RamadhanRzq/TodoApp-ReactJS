import { atom } from "recoil";
import { TodoList } from "../../src/models/TodoList";

const todoState = atom<TodoList[]>({
  key: "todoState",
  default: [],
});

export { todoState };