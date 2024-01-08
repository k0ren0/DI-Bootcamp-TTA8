import TodoList from './todo.js';

const myTodoList = new TodoList();

// My tasks on today)
myTodoList.addTask('Watch video');
myTodoList.addTask('Complete homework');
myTodoList.addTask('Play computer');
myTodoList.addTask('Write a book');


myTodoList.markTaskAsComplete(0); 
myTodoList.markTaskAsComplete(2); // Mark a task as complete :)

const tasks = myTodoList.listTasks();
console.log('Todo List:', tasks);
  