import { ListInterface } from "../interfaces/listInterface";
export class List implements ListInterface {
  title: string
  listId: string
  boardId: string
  listIndex: number


  constructor(props: ListInterface) {
    if (!props.listId) throw new Error('List must have listId.')
    this.listId = props.listId
    this.boardId = props.boardId
    this.title = props.title
    this.listIndex = props.listIndex
  }
}