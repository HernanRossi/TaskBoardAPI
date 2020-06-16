import { Resolver, Mutation, Arg, Query } from "type-graphql";
import { Tasks, TasksModel } from "../entities/Tasks";
import { TasksInput } from "./types/tasks-input"

@Resolver()
export class TasksResolver {

  @Query(_returns => Tasks, { nullable: false })
  async returnSingleTask(@Arg("id") id: string) {
    return await TasksModel.findById({ _id: id });
  };

  @Query(() => [Tasks])
  async returnAllTasksByList(@Arg("id") id: string) {
    return await TasksModel.find({listId: id});
  };

  @Mutation(() => Tasks)
  async createTask(@Arg("data") { taskId, listId, type, description, state, priority, created, updated, title }: TasksInput): Promise<Tasks> {
    const list = (await TasksModel.create({
      taskId, listId, type, description, state, priority, created, updated, title
    })).save();
    return list;
  };

  @Mutation(() => Boolean)
  async deleteTask(@Arg("id") id: string) {
    await TasksModel.deleteOne({ id });
    return true;
  }
}