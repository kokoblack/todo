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
  activeTodoIndex: number;
  activeTaskIndex: number;
};

export const UpdateActive = (
  e: React.ChangeEvent<HTMLTextAreaElement>,
  myTodos: test,
  index: index
) => {
  const newObj = myTodos[index.activeTodoIndex].active.map((obj, ind) => {
    if (index.activeTaskIndex === ind) {
      return { ...obj, desc: e.target.value };
    }

    return obj;
  });

  return newObj;
};

export const delActive = (myTodos: test, index: index) => {
  const newObj = myTodos[index.activeTodoIndex].active.filter((_, ind) => {
    return index.activeTaskIndex !== ind;
  });

  return newObj;
};

export const UpdateDone = (myTodos: test, index: index, setMyTodos: React.Dispatch<React.SetStateAction<test>>) => {
  const uptDone = myTodos[index.activeTodoIndex].done;
  const uptActive =
    myTodos[index.activeTodoIndex].active[index.activeTaskIndex];
  setMyTodos((prev) => {
    const newState = prev.map((obj, ind) => {
      if (index.activeTodoIndex === ind) {
        return {
          ...obj,
          done: [...uptDone, uptActive],
        };
      }

      return obj;
    });

    return newState;
  });
};

export  const delFromActive = (index: index, setMyTodos: React.Dispatch<React.SetStateAction<test>>) => {
    setMyTodos((prev) => {
      const newState = prev.map((obj, ind) => {
        if (index.activeTodoIndex === ind) {
          return {
            ...obj,
            active: delActive(prev, index),
          };
        }

        return obj;
      });

      return newState;
    });
  };