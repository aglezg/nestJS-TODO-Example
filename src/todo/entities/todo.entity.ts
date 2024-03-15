export interface Task {
  description: string
}

export class Todo {

  id: number

  description: string

  tasks: Task[] = []

  done: boolean = false

}
