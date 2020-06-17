import { ObjectType, Field } from "type-graphql"
import { prop as Property, getModelForClass } from "@typegoose/typegoose"
import { List } from "."

@ObjectType({ description: "The Board model" })
export class Board {
  @Field()
  @Property({ unique: true })
  sessionId: String

  @Field()
  @Property()
  boardId: String

  @Field()
  @Property()
  title: String


  @Field(_ => [List])
  lists?: List[]
}

export const BoardModel = getModelForClass(Board)