import { Resolver, Mutation, Arg, Query } from "type-graphql"
import { List, ListsModel } from "../entities"
import { ListsInput } from "./types/lists-input"

@Resolver()
export class ListsResolver {

  @Query(_returns => List, { nullable: false })
  async fetchList(@Arg("listId") listId: string) {
    return await ListsModel.findById({ listId })
  }

  @Query(() => [List])
  async fetchListsByBoard(@Arg("boardId") boardId: string) {
    return await ListsModel.find({boardId})
  }

  @Mutation(() => List)
  async createList(@Arg("data") { listId, listIndex, title, boardId, sessionId }: ListsInput): Promise<List> {
    const list = (await ListsModel.create({
      listId, listIndex, title, boardId, sessionId
    })).save()
    return list
  }

  @Mutation(() => Boolean)
  async deleteList(@Arg("listId") listId: string) {
    await ListsModel.deleteOne({ listId })
    return true
  }
}