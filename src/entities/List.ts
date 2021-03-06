import { ObjectType, Field } from "type-graphql"
import { prop as Property, getModelForClass } from "@typegoose/typegoose"
import { Task } from "."

@ObjectType({ description: "The List model" })
export class List {
  @Field()
  @Property()
  sessionId: String

  @Field()
  @Property()
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

  @Field(_ => [Task])
  tasks?: Task[]
}

export const ListsModel = getModelForClass(List)