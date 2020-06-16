import { ApolloServer } from "apollo-server-express";
import Express from "express";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { connect } from "mongoose";

// resolvers
import { ListsModel } from "./resolvers/ists"
import { TasksResolver } from "./resolvers/Tasks"

const main = async () => {
  const schema = await buildSchema({
    resolvers: [ListsModel, TasksResolver],
    emitSchemaFile: true,
    validate: false,
  });

  // create mongoose connection
  const mongoose = await connect('mongodb://localhost:27017/test', { useNewUrlParser: true });
  await mongoose.connection;


  const server = new ApolloServer({ schema });
  const app = Express();
  server.applyMiddleware({ app });
  app.listen({ port: 8080 }, () =>
    console.log(`🚀 Server ready and listening at ==> http://localhost:8080${server.graphqlPath}`))
};

main().catch((error) => {
  console.log(error, 'error');
})