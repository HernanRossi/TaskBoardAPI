import { ObjectType, Field, ID } from "type-graphql"
import { prop as Property, getModelForClass } from "@typegoose/typegoose"

@ObjectType({ description: "The Boards model" })
export class Boards {
  @Field(() => ID)
  userId: string

  @Field()
  @Property()
  boardId: String

  @Field()
  @Property()
  title: String
}

export const BoardModel = getModelForClass(Boards)