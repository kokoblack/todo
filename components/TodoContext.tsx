import React, { useState, createContext } from "react";

type task = {
  name: string;
  desc: string;
}[];

type test = {
  name: string;
  active: task;
  done: task;
}[];

type todos = {
  myTodos: test;
  activeTodoIndex: number;
  activeTaskIndex: number;
  addTodo: boolean
  setMyTodos: React.Dispatch<React.SetStateAction<test>>;
  setActiveTodoIndex: React.Dispatch<React.SetStateAction<number>>;
  setActiveTaskIndex: React.Dispatch<React.SetStateAction<number>>;
  setAddTodos: React.Dispatch<React.SetStateAction<boolean>>
};

type TodoContextProviderProp = {
  children: React.ReactNode;
};

export const TodoContext = createContext<todos>({} as todos);

export const TodoContextProvider = ({ children }: TodoContextProviderProp) => {
  const [myTodos, setMyTodos] = useState<test>([] as test);
  const [activeTodoIndex, setActiveTodoIndex] = useState(0);
  const [activeTaskIndex, setActiveTaskIndex] = useState(0);
  const [addTodo, setAddTodos] = useState(false)

  return (
    <TodoContext.Provider
      value={{
        myTodos,
        activeTodoIndex,
        activeTaskIndex,
        addTodo,
        setMyTodos,
        setActiveTodoIndex,
        setActiveTaskIndex,
        setAddTodos
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
