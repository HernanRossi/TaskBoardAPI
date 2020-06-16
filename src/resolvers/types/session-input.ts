import { InputType, Field } from "type-graphql"
import { Session } from "../../entities/Session"

@InputType()
export class SessionInput implements Partial<Session> {
  @Field()
  sessionId: string
}