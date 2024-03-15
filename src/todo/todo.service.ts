import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {

  private todos: Todo[] = [
    { id: 1, description: 'Piedra del Alma', tasks: [], done: true },
    { id: 2, description: 'Piedra del Tiempo', tasks: [], done: false},
    { id: 3, description: 'Piedra del Espacio', tasks: [], done: false }
  ]

  create(createTodoDto: CreateTodoDto): Todo {

    const todo: Todo = new Todo()
    todo.id = Math.max(...this.todos.map((todo) => todo.id), 0) + 1
    todo.description = createTodoDto.description
    todo.tasks = createTodoDto.tasks

    this.todos.push(todo)

    return todo;
  }

  findAll(): Todo[] {
    return this.todos;
  }

  findOne(id: number): Todo {
    const todo: Todo | undefined = this.todos.find( todo => todo.id === id)
    if ( !todo ) throw new NotFoundException(`Todo with id ${id} not found`)
    else return todo ;
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return `This action updates a #${id} todo`;
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
