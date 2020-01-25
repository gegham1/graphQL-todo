import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import TodoItemComponent from "./todo-item.component";
import TaskInterface from "../models/task.interface";

interface TasksQueryDTO {
  tasks: Array<Pick<TaskInterface, "id" | "name" | "completed">>;
}

const TASKS_QUERY = gql`
  {
    tasks {
      id
      name
      completed
    }
  }
`;

const TodoListComponent: React.FC = () => {
  const { loading, error, data } = useQuery<TasksQueryDTO>(TASKS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <ul>
      {data &&
        data.tasks.map(({ id, name, completed }) => (
          <TodoItemComponent key={id} name={name} completed={completed} />
        ))}
    </ul>
  );
};

export default TodoListComponent;
