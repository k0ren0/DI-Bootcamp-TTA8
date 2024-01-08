import TodoList from './todo.js';

// Create an instance of TodoList
const myTodoList = new TodoList();

// Add tasks
myTodoList.addTask('Watch video');
myTodoList.addTask('Complete homework');
myTodoList.addTask('Play computer');
myTodoList.addTask('Write a book');

// Mark a task as complete :)
myTodoList.markTaskAsComplete(0); 
myTodoList.markTaskAsComplete(2);

// List all tasks
const tasks = myTodoList.listTasks();
console.log('Todo List:', tasks);
  