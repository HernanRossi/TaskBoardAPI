import { InputType, Field } from "type-graphql"
import { Length } from "class-validator"
import { Task } from "../../entities/Task"

@InputType()
export class TasksInput implements Partial<Task> {
  @Field()
  sessionId: string
  
  @Field({ nullable: true })
  listId: string
  
  @Field()
  taskId: string

  @Field({ nullable: true })
  taskIndex: number

  @Field({ nullable: true })
  @Length(1, 255)
  title?: string

  @Field({ nullable: true })
  @Length(1, 255)
  description?: string

  @Field({ nullable: true })
  updated?: Date

  @Field({ nullable: true })
  created?: Date
}