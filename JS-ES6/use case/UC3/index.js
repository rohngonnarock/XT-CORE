// Model
class Todo {
  constructor(title, date) {
    Todo.nextId++;
    this.id = Todo.nextId; // auto_increment
    this.title = title;
    this.completed = false;
    this.date = date;
  }
}
Todo.nextId = 0;
// Service
class TodosService {
  constructor() {
    this.todoList = [];
  }

  // adding new instance of model todo class to array list.
  addTodo(title) {
    this.todoList.push(new Todo(title, new Date().toDateString()));
    return this.todoList[this.todoList.length - 1].id;
  }

  // edit todo based on id
  editTodo(id, newTitle) {
    this.todoList.forEach(element => {
      if (id === element.id) {
        element.title = newTitle;
      }
    });
  }

  // mark todo as completed
  completeTodo(id) {
    this.todoList.forEach(element => {
      if (id === element.id) {
        element.completed = true;
      }
    });
  }
  completeAll() {
    this.todoList.forEach(element => {
      element.completed = true;
    });
  }
  deleteTodo(id) {
    let deleteIndex;
    this.todoList.forEach((element, index) => {
      if (id === element.id) {
        deleteIndex = index;
      }
    });
    this.todoList.splice(deleteIndex, 1);
  }
  clearCompleted() {
    let deleteIndexs = [];
    this.todoList.forEach((element, index) => {
      if (element.completed) {
        deleteIndexs.push(index);
      }
    });
    deleteIndexs.forEach(element => this.deleteTodo(element));
  }
  viewTodos(filter) {
    return this.todoList.filter(element => {
      return element.completed === filter;
    });
  }
}

const service = new TodosService();
