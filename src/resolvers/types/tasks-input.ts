import { InputType, Field } from "type-graphql"
import { Length } from "class-validator"
import { Tasks } from "../../entities/Tasks"

@InputType()
export class TasksInput implements Partial<Tasks> {
  @Field()
  listId: string
  
  @Field()
  taskId: string
  
  @Field()
  listIndex: number
  
  @Field()
  priority: number

  @Field()
  @Length(1, 255)
  title: string
  
  @Field()
  @Length(1, 255)
  assignee: string

  @Field()
  @Length(1, 255)
  creator: string

  @Field()
  @Length(1, 255)
  description: string

  @Field()
  @Length(1, 8)
  type: string

  @Field()
  @Length(1, 12)
  state: string

  @Field()
  updated: Date

  @Field()
  created: Date
}