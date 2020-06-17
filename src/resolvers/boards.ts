import { Resolver, Mutation, Arg, Query } from "type-graphql"
import { BoardInput } from "./types/board-inputs"
import { BoardModel, Board } from "../entities"

@Resolver()
export class BoardsResolver {

  @Query(_returns => Board, { nullable: false })
  async fetchBoard(@Arg("boardId") boardId: string) {
    return await BoardModel.findById({ boardId })
  }

  @Query(() => [Board])
  async featchBoardsBySession(@Arg("sessionId") sessionId: string) {
    return await BoardModel.find({ sessionId })
  }

  @Mutation(() => Board)
  async createBoard(@Arg("data") { sessionId, title, boardId }: BoardInput): Promise<Board> {
    const board = await BoardModel.create({
      sessionId, title, boardId
    })
    return board
  }

  @Mutation(() => Boolean)
  async destroyBoard(@Arg("boardId") boardId: string) {
    await BoardModel.deleteOne({ boardId })
    return true
  }
}