import { ApolloServer } from "apollo-server-express"
import Express from "express"
import "reflect-metadata"
import { buildSchema } from "type-graphql"
import { logger, getMongoConnection } from './utils'
import cors from 'cors'
import { ListsResolver } from "./resolvers/lists"
import { TasksResolver } from "./resolvers/tasks"
import { BoardsResolver } from "./resolvers/boards"
import { SessionResolver } from "./resolvers/session"

const main = async () => {
  const schema = await buildSchema({
    resolvers: [SessionResolver, ListsResolver, TasksResolver, BoardsResolver],
    emitSchemaFile: true,
    validate: false,
  })

  await getMongoConnection()
  const server = new ApolloServer({ schema })
  const app = Express()
  app.use(cors())
  server.applyMiddleware({ app })
  app.listen({ port: 8080 }, () =>
    console.log(`Server ready and listening at port 8080${server.graphqlPath}`))
  logger.info({ message: `Server ready and listening at port 8080${server.graphqlPath}` })
}

main().catch((error) => {
  console.log(error, 'error')
  logger.info({ message: `Server Error!`, error: error.message, stack: error.stack })
})