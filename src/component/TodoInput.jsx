import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const TodoInput = ({createTodoItem}) => {
    const [value, setValue] = useState("")
    const handleSubmit = e => {
        e.preventDefault();
        if(value === ""){
        return alert("Please add something to-do")
        }
        createTodoItem(value)
        setValue("")
        }
  return (
    <form onSubmit={handleSubmit}>
    <TextField id="filled-basic"  variant="filled"  className='input-box' placeholder="Create a new task" value={value} onChange={(e) => setValue(e.target.value)}  style={{backgroundColor:"white"}}/>
    <Button variant="contained" onClick={handleSubmit} sx={{height:50,marginLeft:5,backgroundColor:'rgb(175, 126, 234)','&:hover':{
      backgroundColor:'rgb(175, 126, 234)'
    }}}>ADD</Button>

</form>
  )
}

export default TodoInput