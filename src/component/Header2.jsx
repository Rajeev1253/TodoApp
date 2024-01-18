import React,{useState} from 'react'
import './header.css'
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add'
import Card from './Card3';



const Header2 = (props) => {
    const [todos,setTodos]=useState([]);
    const [inputMessage,setinputMessage]=useState("")
    const addToDos=()=>{
        setTodos([...todos,inputMessage]);
        setinputMessage("");
    }
    function handleDeleteItem(id){
        const newList= [...todos];
        newList.splice(id,1)
        setTodos(newList)
    }
    function handleCheckBoxChange(id){
        
    }
  return (
    <div>
        <div className='header-m'>
        <div className='menu'>
        <MenuIcon/>
        </div>

            <p>Website Todo</p>
        </div>

        <div className="input">
        <input className='inputBox' type='text'value={inputMessage} onChange={e=>{
            setinputMessage(e.target.value)
        }} placeholder='Enter your task'></input>
        <button onClick={addToDos} ><AddIcon/></button>
      
        </div>
        {
            todos.map((todo, i)=>{
                return <div>
                <Card 
                message={todo}
                handleDeleteItem={() => handleDeleteItem(i)}
                handleChange={()=>   handleCheckBoxChange()}
                
                />

                </div>
            })
        }
    </div>
  )
}

export default Header2