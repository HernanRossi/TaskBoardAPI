import { InputType, Field } from "type-graphql"
import { Length } from "class-validator"
import { Task } from "../../entities/Task"

@InputType()
export class TasksInput implements Partial<Task> {
  @Field()
  sessionId: string
  
  @Field()
  listId: string
  
  @Field()
  taskId: string

  @Field()
  taskIndex: number

  @Field()
  @Length(1, 255)
  title: string

  @Field()
  @Length(1, 255)
  description: string

  @Field()
  updated: Date

  @Field()
  created: Date
}