import React from "react";
import "./App.css";
import client from "./api/client";
import { ApolloProvider } from "@apollo/react-hooks";
import TodoListComponent from "./components/todo-list.component";

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <TodoListComponent />
    </ApolloProvider>
  );
};

export default App;
