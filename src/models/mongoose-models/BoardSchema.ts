import { Document, model, Model, Schema } from 'mongoose'
import { ObjectID } from 'mongodb'
import { BoardInterface } from "../interfaces/boardInterface";

const BoardSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  boardId: {
    type: String,
    required: true
  },
  title: String,
})

export interface IBoardDocument extends BoardInterface, Document {
  _id: ObjectID
}

export const UserModel: Model<IBoardDocument> = model<IBoardDocument>('boards', BoardSchema)
