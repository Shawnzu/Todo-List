import React, {useState} from "react";
import ToDoList from "./ToDoList";
import "./index";

function App() {
  const [todos,setTodos] = useState("");
  const [todoLists, setTodoLists] = useState([]);
  const handleInputChange =(e)=>{
    setTodos(e.target.value);
  };
  const handleClick = ()=>{
      setTodoLists((oldTodo)=>{
        return [...oldTodo, todos];
      });
      setTodos("");
  };
  const handleDelete= (id)=>{
      setTodoLists((oldTodo) => {
        return todoLists.filter((arrElem, index)=>{
          return index !== id;
        })
      })
  }
  return (
    <div className="main_div">
      <div className="center_div"><br/>
      <h1>Todo-List</h1><br/>
       <form>
          <input type="text" placeholder="Add items" value={todos} onChange={handleInputChange}/>
          <button type="button" onClick={handleClick}>+</button>
        </form>
      <ol>
        {
        todoLists.map((todo, index) => {
        return <ToDoList id={index} text={todo}
        handleDelete = {handleDelete}/>
        })}
      </ol>
      </div>
    </div>
  );
};

export default App;
