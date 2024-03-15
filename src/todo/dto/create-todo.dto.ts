import { IsArray, IsNotEmpty, IsString } from "class-validator"
import { Task } from "../entities/todo.entity"

export class CreateTodoDto {
  
  @IsString()
  @IsNotEmpty()
  description: string

  @IsArray()
  tasks: Task[]

}
