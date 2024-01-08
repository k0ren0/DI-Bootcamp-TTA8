class TodoList {
    constructor() {
      this.tasks = [];
    }
  
    addTask(task) {
      this.tasks.push({ task, completed: false });
    }
  
    markTaskAsComplete(taskIndex) {
      if (this.tasks[taskIndex]) {
        this.tasks[taskIndex].completed = true;
      }
    }
  
    listTasks() {
      return this.tasks;
    }
  }
  
  export default TodoList;