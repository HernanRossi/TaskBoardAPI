import { Resolver, Mutation, Arg, Query, Field, InputType } from "type-graphql"
import { Task, TasksModel, UpdateResult } from "../entities"
import { TasksInput } from "./types/tasks-input"
@InputType()
class UpdateTasks {
  @Field(() => [TasksInput])
  tasks: TasksInput[]
}

@Resolver()
export class TasksResolver {

  @Query(_returns => Task, { nullable: false })
  async fetchTask(@Arg("taskId") taskId: string) {
    return await TasksModel.findById({ taskId })
  }

  @Query(() => [Task])
  async fetchTasksByList(@Arg("listId") listId: string) {
    return await TasksModel.find({ listId })
  }

  @Mutation(() => Task)
  async createTask(@Arg("data") { sessionId, listId, taskId, taskIndex, title, description, created, updated }: TasksInput): Promise<Task> {
    const task = (await TasksModel.create({
      taskId, taskIndex, description, created, updated, title, sessionId, listId
    })).save()
    return task
  }

  @Mutation(() => UpdateResult)
  async updateTaskLocation(@Arg("data") {tasks} : UpdateTasks) {
    let modified = 0
    for(let i = 0; i < tasks.length; i++) {
      let task: TasksInput = tasks[i]
      const { taskId, sessionId } = task
      const result = await TasksModel.updateOne({ taskId, sessionId }, { $set: task })
      modified = modified + result.n
    }
    return {
      modified
    }
  }

  @Mutation(() => UpdateResult)
  async updateTaskInfo(@Arg("data") task : TasksInput) {
    const { taskId, sessionId } = task
    const result = await TasksModel.updateOne({ taskId, sessionId }, { $set: task })
    return {
      modified: result.n
    }
  }

  @Mutation(() => Boolean)
  async deleteTask(@Arg("taskId") taskId: string) {
    await TasksModel.deleteOne({ taskId })
    return true
  }
}