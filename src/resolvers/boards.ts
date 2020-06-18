import { Resolver, Mutation, Arg, Query } from "type-graphql"
import { BoardInput } from "./types/board-inputs"
import { BoardModel, Board, UpdateResult } from "../entities"

@Resolver()
export class BoardsResolver {

  @Query(_returns => Board, { nullable: true })
  async fetchBoard(@Arg("boardId") boardId: string) {
    return await BoardModel.findOne({ boardId })
  }

  @Query(_ => [Board])
  async featchBoardsBySession(@Arg("sessionId") sessionId: string) {
    return await BoardModel.find({ sessionId })
  }

  @Mutation(() => UpdateResult )
  async updateBoard(@Arg("data") { sessionId, title, boardId }: BoardInput) {
    const result = await BoardModel.updateOne({ sessionId, boardId }, { title })
    return {
      modified: result.n
    }
  }

  @Mutation(() => Board )
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