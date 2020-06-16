import { Document, model, Model, Schema } from 'mongoose'
import { ObjectID } from 'mongodb'
import { ListInterface } from '../interfaces/listInterface'

const ListSchema = new Schema({
  listId: {
    type: String,
    required: true
  },
  listIndex: 
  {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
})

export interface IListDocument extends ListInterface, Document {
  _id: ObjectID
}

export const UserModel: Model<IListDocument> = model<IListDocument>('lists', ListSchema)
