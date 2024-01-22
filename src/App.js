import React, { useState } from "react";
import TodoInput from "./component/TodoInput";
import TodoItem from "./component/TodoItem";
import MenuIcon from '@mui/icons-material/Menu';
import './App.css'
function App() {
  const[todoItem,setTodoItem]=useState([])
  const createTodoItem=(todo)=>{
    const newItem = [...todoItem,{todo,complete:false}]
    setTodoItem(newItem)
  } 
  const deleteTodoItem =(i)=>{
    const newItem = [...todoItem];
    newItem.splice(todoItem,1);
    setTodoItem(newItem)
  }
  const completeTodoItem = (index) => {
    const newTodoItems = [...todoItem];
    newTodoItems[index].complete === false
    ? (newTodoItems[index].complete = true)
    : (newTodoItems[index].complete = false);
    setTodoItem(newTodoItems)
    };
    const updateTodoItem = (index) => {
      const newTodoItems = [...todoItem];
      const item = newTodoItems[index];
      let newItem = prompt(`Update ${item.todo}?`, item.todo);
      let todoObj = { todo: newItem, complete: false };
      newTodoItems.splice(index, 1, todoObj);
      if (newItem === null || newItem === "") {
      return;
      } else {
      item.todo = newItem;
      }
      setTodoItem(newTodoItems);
      };
  return (
    <div className="app">
    <div className="header">
    <div className="icon">
    <MenuIcon/>
    </div>
    <div className="heading">
      <h3>Todo List</h3>
    </div>


    </div>
    <TodoInput createTodoItem={createTodoItem}/>
    {todoItem?.map((item,index)=>(<TodoItem key={index} index={index} item={item} deleteTodoItem={deleteTodoItem} completeTodoItem={completeTodoItem}
      updateTodoItem={updateTodoItem}
    />))}

    </div>
  );
}


export default App;
