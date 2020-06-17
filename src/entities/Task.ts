import { ObjectType, Field } from "type-graphql";
import { prop as Property, getModelForClass } from "@typegoose/typegoose";

@ObjectType({ description: "The Task model" })
export class Task {
    @Field()
    @Property()
    sessionId: String

    @Field()
    @Property()
    taskId: String

    @Field()
    @Property()
    taskIndex: Number

    @Field() 
    @Property()
    listId: String

    @Field() 
    @Property()
    title: String

    @Field() 
    @Property()
    description: String

    @Field() 
    @Property()
    created: Date

    @Field() 
    @Property()
    updated?: Date
}

export const TasksModel = getModelForClass(Task);