import { ObjectType, Field } from "type-graphql";
import { prop as Property, getModelForClass } from "@typegoose/typegoose";

@ObjectType({ description: "The Task model" })
export class Task {
    @Field()
    taskId: string

    @Field() 
    @Property()
    listId: String

    @Field() 
    @Property()
    type: String

    @Field() 
    @Property()
    description: String

    @Field() 
    @Property()
    state: String

    @Field() 
    @Property()
    priority: number

    @Field() 
    @Property()
    created: Date

    @Field() 
    @Property()
    updated: Date

    @Field() 
    @Property()
    title: String
}

export const TasksModel = getModelForClass(Task);