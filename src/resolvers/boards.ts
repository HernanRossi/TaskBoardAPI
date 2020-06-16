import { Resolver, Mutation, Arg, Query } from "type-graphql"
import _ from 'lodash'
import { defaultBoard } from '../data/default/default-board'
import { BoardInput } from "./types/board-inputs"
import { TasksModel, ListsModel, BoardModel, Board } from "../entities"

@Resolver()
export class BoardsResolver {

  @Query(_returns => Board, { nullable: false })
  async returnSingleBoard(@Arg("id") id: string) {
    return await BoardModel.findById({ _id: id })
  }

  @Query(() => [Board])
  async returnAllBoardsByUser(@Arg("id") id: string) {
    return await BoardModel.find({ userId: id })
  }

  @Mutation(() => Board)
  async createBoard(@Arg("data") { userId, title, boardId }: BoardInput): Promise<Board> {
    const board = await BoardModel.create({
      userId, title, boardId
    })
    return board
  }

  @Mutation(() => Board)
  async defaultSession(@Arg("id") id: string): Promise<any> {
    const { board, lists, tasks } = defaultBoard(id)
    const newBoard = await BoardModel.create(board)
    //get board back and get the _id and make the new lists this that id
    const newLists = await ListsModel.insertMany(lists)
    const newTasks = await TasksModel.insertMany(tasks)
    console.log("Created default state: ", newBoard, newLists, newTasks)
    return {
      board: newBoard,
      lists: newLists,
      tasks: newTasks
    }
  }

  @Mutation(() => Boolean)
  async deleteBoard(@Arg("id") id: string) {
    await BoardModel.deleteOne({ id })
    return true
  }
}