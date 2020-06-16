import { InputType, Field } from "type-graphql"
import { Length } from "class-validator"
import { Lists } from "../../entities/Lists"

@InputType()
export class ListsInput implements Partial<Lists> {
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