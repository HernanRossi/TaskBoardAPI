import { Resolver, Mutation, Arg, Query } from "type-graphql"
import _ from 'lodash'
import { defaultBoard } from '../data/default/default-board'
import { TasksModel, ListsModel, BoardModel, Session } from "../entities"
import { SessionInput } from "./types/session-input"
import {createSession} from '../utils/createSession'

@Resolver()
export class SessionResolver {
  @Query(_returns => Session, { nullable: false })
  async fetchSession(@Arg("sessionId") { sessionId }: SessionInput) {
    const board = await BoardModel.findOne({ sessionId })
    if (!board) return {
      sessionId,
      boards: []
    }
    const lists = await ListsModel.find({ sessionId }).sort({ listIndex: 1 })
    const tasks = await TasksModel.find({ sessionId }).sort({ taskIndex: 1 })
    const response = createSession(sessionId, board, lists, tasks)
    return {
      ...response
    }
  }

  @Mutation(() => Session)
  async defaultSession(@Arg("sessionId") sessionId: string): Promise<any> {
    const { board, lists, tasks } = defaultBoard(sessionId)
    await BoardModel.create(board)
    await ListsModel.insertMany(lists)
    await TasksModel.insertMany(tasks)

    const response = createSession(sessionId, board, lists, tasks)
    return {
      ...response
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