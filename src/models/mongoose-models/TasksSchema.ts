import { Document, model, Model, Schema } from 'mongoose'
import { ObjectID } from 'mongodb'
import { TaskInterface } from '../interfaces/taskInterface'

const TaskSchema = new Schema({
  taskId: {
    type: String,
    required: true
  },
  listId: {
    type: String,
    required: true
  },
  type: String,
  description: String,
  state: String,
  priority: Number,
  created: Date,
  updated: Date,
  assignee: String,
  title: {
    type: String,
    required: true
  },
})

export interface ITaskDocument extends TaskInterface, Document {
  _id: ObjectID
}

export const UserModel: Model<ITaskDocument> = model<ITaskDocument>('tasks', TaskSchema)
