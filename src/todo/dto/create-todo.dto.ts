import { IsArray, IsNotEmpty, IsOptional, IsString, ValidateNested } from "class-validator"
import { Task } from "../entities/todo.entity"
import { Type } from "class-transformer"

export class CreateTodoDto {
  
  @IsString()
  @IsNotEmpty()
  description: string

  @IsArray()
  @IsOptional()
  @ValidateNested( {each: true})
  @Type( () => Task)
  tasks?: Task[]

}
