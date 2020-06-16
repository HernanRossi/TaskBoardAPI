import { ApolloServer } from "apollo-server-express"
import Express from "express"
import "reflect-metadata"
import { buildSchema } from "type-graphql"
import { logger, getMongoConnection } from './utils'

// resolvers
import { ListsResolver } from "./resolvers/lists"
import { TasksResolver } from "./resolvers/tasks"
import { BoardsResolver } from "./resolvers/boards"

const main = async () => {
  const schema = await buildSchema({
    resolvers: [ListsResolver, TasksResolver, BoardsResolver],
    emitSchemaFile: true,
    validate: false,
  })

  // create mongoose connection
  await getMongoConnection()
  const server = new ApolloServer({ schema })
  const app = Express()
  server.applyMiddleware({ app })
  app.listen({ port: 8080 }, () =>
    console.log(`🚀 Server ready and listening at ==> http://localhost:8080${server.graphqlPath}`))
  logger.info({ message: `🚀 Server ready and listening at ==> http://localhost:8080${server.graphqlPath}` })
}

main().catch((error) => {
  console.log(error, 'error')
  logger.info({ message: `Server Error!`, error: error.message, stack: error.stack })
})