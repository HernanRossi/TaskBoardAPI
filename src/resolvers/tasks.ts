import { Resolver, Mutation, Arg, Query } from "type-graphql"
import { Task, TasksModel } from "../entities/Task"
import { TasksInput } from "./types/tasks-input"

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

  @Mutation(() => Boolean)
  async deleteTask(@Arg("taskId") taskId: string) {
    await TasksModel.deleteOne({ taskId })
    return true
  }
}