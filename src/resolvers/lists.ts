import { Resolver, Mutation, Arg, Query } from "type-graphql"
import { List, ListsModel } from "../entities"
import { ListsInput } from "./types/lists-input"

@Resolver()
export class ListsResolver {

  @Query(_returns => List, { nullable: false })
  async returnSingleList(@Arg("id") id: string) {
    return await ListsModel.findById({ _id: id })
  }

  @Query(() => [List])
  async returnAllListsByBoard(@Arg("id") id: string) {
    return await ListsModel.find({boardId: id})
  }

  @Mutation(() => List)
  async createList(@Arg("data") { listId, listIndex, title, boardId }: ListsInput): Promise<List> {
    const list = (await ListsModel.create({
      listId, listIndex, title, boardId
    })).save()
    return list
  }

  @Mutation(() => Boolean)
  async deleteList(@Arg("id") id: string) {
    await ListsModel.deleteOne({ id })
    return true
  }
}