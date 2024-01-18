import React from 'react'
import './card.css'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


const Card = (props) => {
 
  const handleChange = () => {
    props.setCheck(!props.checked)
  }
  
  return (
    <div className="card-box">
    <div className="checkBox">
  <input type="checkbox" class="todo-checkbox" checked={props.checked} onChange={handleChange}/>
</div>

    <div className='text'>
    
    <span style={{textDecoration:props.checked?"line-through":"none"}}>{props.message}</span>

    </div>
    <div className='sideIcon'>
      <div id="edit"> <EditIcon/></div>
      <div id="delete" onClick={props.handleDeleteItem}><DeleteIcon/></div>
    </div>
    </div>
  )
}

export default Card;