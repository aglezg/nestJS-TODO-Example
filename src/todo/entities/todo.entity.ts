import { IsNotEmpty, IsString } from "class-validator"

export class Task {
  @IsString()
  description: string
}

export class Todo {

  id: number

  description: string

  tasks: Task[] = []

  done: boolean = false

}
