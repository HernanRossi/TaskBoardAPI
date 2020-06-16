import { BoardInterface } from "../interfaces/boardInterface"

export class Board implements BoardInterface {
  userId: string
  boardId: string
  title: string

  constructor(props: BoardInterface) {
    if (!props.boardId) throw new Error('Board must have boardId.')
    this.userId = props.userId
    this.boardId = props.boardId
    this.title = props.title || 'Default Task Board'
  }

  toJSON() {
    return {
      userId: this.userId,
      boardId: this.boardId,
      title: this.title
    }
  }
}