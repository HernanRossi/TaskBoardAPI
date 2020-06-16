import { Resolver, Mutation, Arg, Query } from "type-graphql"
import _ from 'lodash'
import { defaultBoard } from '../data/default/default-board'
import { TasksModel, ListsModel, BoardModel, Session } from "../entities"
import { SessionInput } from "./types/session-input"

@Resolver()
export class SessionResolver {

  @Query(_returns => Session, { nullable: false })
  async returnSingleBoard(@Arg("id") { sessionId }: SessionInput) {
    const boards = await BoardModel.find({ sessionId })
    const lists = await ListsModel.find({ sessionId })
    const tasks = await TasksModel.find({ sessionId })

    return {
      boards,
      lists,
      tasks,
      sessionId
    }
  }

  @Mutation(() => Session)
  async createSession(@Arg("sessionId") sessionId: string): Promise<any> {
    const { board, lists, tasks } = defaultBoard(sessionId)
    const newBoard = await BoardModel.create(board)
    const newLists = await ListsModel.insertMany(lists)
    const newTasks = await TasksModel.insertMany(tasks)
    return {
      boards: [newBoard],
      lists: newLists,
      tasks: newTasks
    }
  }

  @Mutation(() => Boolean)
  async destroySession(@Arg("sessionId") sessionId: string): Promise<any> {
    await BoardModel.deleteMany({ sessionId })
    await ListsModel.deleteMany({ sessionId })
    await TasksModel.deleteMany({ sessionId })
    return true
  }
}