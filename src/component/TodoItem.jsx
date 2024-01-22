import React from 'react'
import './todolist.css'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
const TodoItem = ({item,index,deleteTodoItem,completeTodoItem,updateTodoItem}) => {
  return (
    <div className="todo-list">
    <input type='checkbox' className='checkbox' onClick={() => completeTodoItem(index)}></input>
<li style={{textDecoration: item.complete ? "line-through" : ""}}>{item.todo}</li>
<div className="btns">

<IconButton aria-label="delete" color="gray" onClick={() => updateTodoItem(index)} sx={{color:"grey"}}>
<EditIcon  />
</IconButton>
<IconButton aria-label="delete" color="gray" onClick={() => deleteTodoItem(index)}>
  <DeleteIcon />
</IconButton>


</div>
</div>

  )
}

export default TodoItem