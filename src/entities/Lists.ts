import { ObjectType, Field, ID } from "type-graphql"
import { prop as Property, getModelForClass } from "@typegoose/typegoose"

@ObjectType({ description: "The Lists model" })
export class Lists {
  @Field(() => ID)
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

export const ListsModel = getModelForClass(Lists)