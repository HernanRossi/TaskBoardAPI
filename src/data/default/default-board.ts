import { nanoid } from "nanoid"
import { List, Board, Task } from "src/entities"

const createTask = (title: string, description: string, listId: string, sessionId: string): Task => {
  return { title, description, taskId: nanoid(), listId, sessionId, created: new Date() }
}

export const defaultTasks = (listIds: string[], sessionId: string) =>  [
  createTask('Move Task', 'Click on a Task and move it around.', listIds[0], sessionId),
  createTask('Move List', 'Click on a List and move it around.', listIds[0], sessionId),
  createTask('About App front-end', 'This app is created using TypeScript, React and the amazing react-dnd library.', listIds[1], sessionId),
  createTask('Add Task', 'Try adding a new task to a list.', listIds[2], sessionId),
  createTask('Add List', 'Try adding a new list to the board.', listIds[2], sessionId),
  createTask('Delete Task', 'Try to delete a task from a list.', listIds[3], sessionId),
  createTask('Delete List', 'Try to delete a list from the board.', listIds[3], sessionId)
]

export const defaultLists = (listIds: string[], boardId: string, sessionId: string): List[] => {
  return ([
    {
      listId: listIds[0],
      sessionId,
      listIndex: 0,
      boardId,
      title: 'TO DO',
    }, {
      listId: listIds[1],
      sessionId,
      listIndex: 1,
      title: 'IN PROGRESS',
      boardId,
    }, {
      listId: listIds[2],
      sessionId,
      listIndex: 2,
      title: 'REVIEW',
      boardId,
    }, {
      listId: listIds[3],
      sessionId,
      listIndex: 3,
      title: 'DONE',
      boardId,
    }
  ])
}

export const defaultBoard = (sessionId: string) => {
  const boardId = nanoid()
  const board: Board = { title: 'Default Board', sessionId, boardId }
  const listIds = [nanoid(), nanoid(), nanoid(), nanoid()]
  const lists: List[] = defaultLists(listIds, boardId, sessionId)
  const tasks: Task[] = defaultTasks(listIds, sessionId)

  return { board, lists, tasks }
}