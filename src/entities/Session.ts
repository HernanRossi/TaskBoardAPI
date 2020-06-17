import { ObjectType, Field } from "type-graphql"
import { prop as Property, getModelForClass } from "@typegoose/typegoose"
import { Board } from "."

@ObjectType({ description: "The Session model" })
export class Session {
  @Field(_ => Board)
  boards: [Board]

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