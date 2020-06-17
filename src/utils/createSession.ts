import { Board, List, Task } from "src/entities"

export const createSession = (sessionId: string, board: Board, lists: List[], tasks: Task[]) => {
  const listMap = new Map()
  lists.forEach((list) => {
    list.tasks = []
    listMap.set(list.listId, list)
    list.sessionId = sessionId
  })
  tasks.forEach((task) => {
    const { listId } = task
    task.sessionId = sessionId
    if (listMap.has(listId)) {
      const list = listMap.get(listId)
      list.tasks.push(task)
      listMap.set(listId, list)
    }
  })
  const resultArray: List[] = []
  listMap.forEach((list, _) => resultArray.push(list))

  const respBoard: Board = { boardId: board.boardId, sessionId, title: board.title, lists: resultArray }
  return {
    boards: [respBoard],
    sessionId
  }
}