import { ObjectType, Field, ID } from "type-graphql";
import { prop as Property, getModelForClass } from "@typegoose/typegoose";

@ObjectType({ description: "The Tasks model" })
export class Tasks {
    @Field(()=> ID)
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

export const TasksModel = getModelForClass(Tasks);