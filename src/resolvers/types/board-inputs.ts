import { InputType, Field } from "type-graphql"
import { Length } from "class-validator"
import { Boards } from "../../entities/Board"

@InputType()
export class BoardInput implements Partial<Boards> {
  @Field()
  userId: string
  
  @Field()
  boardId: string

  @Field()
  @Length(1, 255)
  title: string
}