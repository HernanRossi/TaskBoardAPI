import { ObjectType, Field } from "type-graphql"
import { prop as Property, getModelForClass } from "@typegoose/typegoose"

@ObjectType({ description: "The Board model" })
export class Board {
  @Field()
  @Property()
  userId: string

  @Field()
  @Property()
  _id: String

  @Field()
  @Property()
  boardId: String

  @Field()
  @Property()
  title: String
}

export const BoardModel = getModelForClass(Board)