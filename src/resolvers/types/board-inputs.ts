import { InputType, Field } from "type-graphql"
import { Length } from "class-validator"
import { Board } from "../../entities/Board"

@InputType()
export class BoardInput implements Partial<Board> {
  @Field()
  userId: string
  
  @Field()
  boardId: string

  @Field()
  @Length(1, 255)
  title: string
}