import { nanoid } from "nanoid"
import { ListInterface, BoardInterface, TaskInterface } from "src/models/interfaces"

const createTask = (title: string, description: string, listId: string): TaskInterface => {
  return { title, description, taskId: nanoid(), listId }
}

export const defaultTasks = (listIds: string[]) =>  [
  createTask('Move Task', 'Click on a Task and move it around.', listIds[0]),
  createTask('Move List', 'Click on a List and move it around.', listIds[0]),
  createTask('About App front-end', 'This app is created using TypeScript, React and the amazing react-dnd library.', listIds[1]),
  createTask('Add Task', 'Try adding a new task to a list.', listIds[2]),
  createTask('Add List', 'Try adding a new list to the board.', listIds[2]),
  createTask('Delete Task', 'Try to delete a task from a list.', listIds[3]),
  createTask('Delete List', 'Try to delete a list from the board.', listIds[3])
]

export const defaultLists = (listIds: string[], boardId: string): ListInterface[] => {
  return ([
    {
      listId: listIds[0],
      listIndex: 0,
      boardId,
      title: 'TO DO',
    }, {
      listId: listIds[1],
      listIndex: 1,
      title: 'IN PROGRESS',
      boardId,
    }, {
      listId: listIds[2],
      listIndex: 2,
      title: 'REVIEW',
      boardId,
    }, {
      listId: listIds[3],
      listIndex: 3,
      title: 'DONE',
      boardId,
    }
  ])
}

export const defaultBoard = (userId: string) => {
  const boardId = nanoid()
  const board: BoardInterface = { title: 'Default Board', userId, boardId }
  const listIds = [nanoid(), nanoid(), nanoid(), nanoid()]
  const lists: ListInterface[] = defaultLists(listIds, boardId)
  const tasks: TaskInterface[] = defaultTasks(listIds)

  return { board, lists, tasks }
}