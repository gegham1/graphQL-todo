import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://graphql-todo-server.herokuapp.com/v1/graphql",
});

export default client;
