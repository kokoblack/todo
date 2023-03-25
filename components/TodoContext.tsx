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

type index = {
  activeTodoIndex: number
  activeTaskIndex: number
  activeDoneIndex: number
}

type todos = {
  myTodos: test;
  addTodo: boolean
  index: index,
  setIndex: React.Dispatch<React.SetStateAction<index>>;
  setMyTodos: React.Dispatch<React.SetStateAction<test>>;
  setAddTodos: React.Dispatch<React.SetStateAction<boolean>>
};

type TodoContextProviderProp = {
  children: React.ReactNode;
};

export const TodoContext = createContext<todos>({} as todos);

export const TodoContextProvider = ({ children }: TodoContextProviderProp) => {
  const [myTodos, setMyTodos] = useState<test>([] as test);
  const [index, setIndex] = useState<index>({} as index)
  const [addTodo, setAddTodos] = useState(false)

  return (
    <TodoContext.Provider
      value={{
        myTodos,
        addTodo,
        index,
        setIndex,
        setMyTodos,
        setAddTodos
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
