import { Resolver, Mutation, Arg, Query } from "type-graphql"
import { BoardInput } from "./types/board-inputs"
import { BoardModel, Board } from "../entities"

@Resolver()
export class BoardsResolver {

  @Query(_returns => Board, { nullable: false })
  async returnSingleBoard(@Arg("id") id: string) {
    return await BoardModel.findById({ _id: id })
  }

  @Query(() => [Board])
  async returnAllBoardsByUser(@Arg("id") id: string) {
    return await BoardModel.find({ sessionId: id })
  }

  @Mutation(() => Board)
  async createBoard(@Arg("data") { sessionId, title, boardId }: BoardInput): Promise<Board> {
    const board = await BoardModel.create({
      sessionId, title, boardId
    })
    return board
  }

  @Mutation(() => Boolean)
  async deleteBoard(@Arg("id") id: string) {
    await BoardModel.deleteOne({ id })
    return true
  }
}