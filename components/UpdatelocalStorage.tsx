import { useEffect, useContext } from "react";
import { TodoContext } from "@/components/TodoContext";

export const UpdatelocalStorage = () => {
  const { myTodos, index, setIndex, setMyTodos } = useContext(TodoContext);
  useEffect(() => {
    const getTodos = JSON.parse(localStorage.getItem("myTodos") || "[]");
    const getTodosIndex = JSON.parse(localStorage.getItem("TodoIndex") || "{}");
    if (getTodos === null || myTodos.length !== 0) {
      localStorage.setItem("myTodos", JSON.stringify(myTodos));
      localStorage.setItem("TodoIndex", JSON.stringify(index));
    } else {
      if (myTodos !== getTodos) {
        setMyTodos(getTodos);
        setIndex(getTodosIndex);
      }
    }
  }, [myTodos, setMyTodos]);
};
