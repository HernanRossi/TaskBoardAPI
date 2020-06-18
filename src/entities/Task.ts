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
    taskIndex?: Number

    @Field() 
    @Property()
    listId?: String

    @Field({ nullable: true }) 
    @Property()
    title?: String

    @Field({ nullable: true }) 
    @Property()
    description?: String

    @Field({ nullable: true }) 
    @Property()
    created?: Date

    @Field({ nullable: true }) 
    @Property()
    updated?: Date
}

export const TasksModel = getModelForClass(Task);