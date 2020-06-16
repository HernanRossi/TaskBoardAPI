import { ObjectType, Field } from "type-graphql"
import { prop as Property, getModelForClass } from "@typegoose/typegoose"

@ObjectType({ description: "The List model" })
export class List {
  @Field()
  listId: String

  @Field()
  @Property()
  boardId: String

  @Field()
  @Property()
  title: String

  @Field()
  @Property()
  listIndex: Number
}

export const ListsModel = getModelForClass(List)