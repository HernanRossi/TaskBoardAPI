import { ObjectType, Field } from "type-graphql"
import { prop as Property, getModelForClass } from "@typegoose/typegoose"
import { Board, List, Task } from "."

@ObjectType({ description: "The Session model" })
export class Session {
  @Field(_ => Board)
  boards: [Board]

  @Field(_ => List)
  lists: [List]

  @Field(_ => Task)
  tasks: [Task]

  @Field()
  @Property()
  sessionId: string

  @Field()
  @Property()
  created: Date

  @Field()
  message: string
}

export const SessionModel = getModelForClass(Session)