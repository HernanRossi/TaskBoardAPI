import { InputType, Field } from "type-graphql"
import { Length } from "class-validator"
import { List } from "../../entities/List"

@InputType()
export class ListsInput implements Partial<List> {
  @Field()
  sessionId: string
  
  @Field()
  listId: string

  @Field()
  boardId: string
  
  @Field()
  listIndex: number

  @Field()
  @Length(1, 255)
  title: string
}