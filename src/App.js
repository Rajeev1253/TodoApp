import React,{useState} from "react";
import Header2 from "./component/Header2";
function App() {
  const [ListToDo,SetListTodo]=useState([]);
  let addList=(inputText)=>{
    SetListTodo([...ListToDo,inputText]);
  }
  return (
    <div className="App">
    <Header2 addList={addList}/>

    </div>
  );
}

export default App;
