import { Resolver, Mutation, Arg, Query } from "type-graphql";
import { BoardModel, Boards } from "../entities/Board";
import { BoardInput } from "./types/board-inputs"

@Resolver()
export class BoardsResolver {

  @Query(_returns => Boards, { nullable: false })
  async returnSingleBoard(@Arg("id") id: string) {
    return await BoardModel.findById({ _id: id });
  };

  @Query(() => [Boards])
  async returnAllBoardsByUser(@Arg("id") id: string) {
    return await BoardModel.find({userId: id});
  };

  @Mutation(() => Boards)
  async createBoard(@Arg("data") { userId, boardId, title }: BoardInput): Promise<Boards> {
    const list = (await BoardModel.create({
      userId, title, boardId
    })).save();
    return list;
  };

  @Mutation(() => Boolean)
  async deleteBoard(@Arg("id") id: string) {
    await BoardModel.deleteOne({ id });
    return true;
  }
}