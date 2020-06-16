import { Resolver, Mutation, Arg, Query } from "type-graphql";
import { Task, TasksModel } from "../entities/Task";
import { TasksInput } from "./types/tasks-input"

@Resolver()
export class TasksResolver {

  @Query(_returns => Task, { nullable: false })
  async returnSingleTask(@Arg("id") id: string) {
    return await TasksModel.findById({ _id: id });
  };

  @Query(() => [Task])
  async returnAllTasksByList(@Arg("id") id: string) {
    return await TasksModel.find({listId: id});
  };

  @Mutation(() => Task)
  async createTask(@Arg("data") { taskId, listId, type, description, state, priority, created, updated, title, sessionId }: TasksInput): Promise<Task> {
    const list = (await TasksModel.create({
      taskId, listId, type, description, state, priority, created, updated, title, sessionId
    })).save();
    return list;
  };

  @Mutation(() => Boolean)
  async deleteTask(@Arg("id") id: string) {
    await TasksModel.deleteOne({ id });
    return true;
  }
}