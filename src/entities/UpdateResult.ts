import { ObjectType, Field } from "type-graphql"

@ObjectType({ description: "The UpdateResult model" })
export class UpdateResult {
  @Field()
  modified: number
}
