import React,{useState} from 'react'
import './card.css'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


const Card = (props) => {
const [checked, setChecked] = useState([]);
 
 
  return (
    <div className="card-box">
    <div className="checkBox">
  <input type="checkbox" class="todo-checkbox" onChange={handleChange}/>
</div>

    <div className='text'>
    
    <p>{props.message}</p>

    </div>
    <div className='sideIcon'>
      <div id="edit"> <EditIcon/></div>
      <div id="delete" onClick={props.handleDeleteItem}><DeleteIcon/></div>
    </div>
    </div>
  )
}

export default Card;