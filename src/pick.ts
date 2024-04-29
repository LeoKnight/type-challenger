interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyPick<Todo, "title" | "completed">;

// MyPick
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
