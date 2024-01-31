// import TodoList from "./features/todos/TodoList";
import Users from "./features/users/Users";
import PostsList from "./features/posts/PostsList";
import "./App.css";

function App() {
  return (
    <div className='App'>
      {/* <TodoList /> */}
      <PostsList/>
      <Users/>
    </div>
  );
}

export default App;
