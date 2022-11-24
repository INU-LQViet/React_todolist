import './App.css';
import Todolist from './components/Todolist';
import FormTodo from './components/FormTodo';
import React from 'react';

// const list = [
//   {
//     "id":1,
//     "title":"1st todo",
//     "body":"Learn Django properly.",
//   },
//   {
//     "id":2,
//     "title":"Second item",
//     "body":"Learn Python.",
//   },
// ]

function App() {
  
  const [listTodo, setlistTodo] = React.useState([])
  console.log(listTodo);
  React.useEffect(
    ()=>{
      fetch('http://127.0.0.1:8000/api/', {
        method: 'GET',
      })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        setlistTodo(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
    ,[]);
  
  function addtodo(newtodo){
    setlistTodo(prev=>
      [...prev, {
        "id": listTodo.length + 1,
        "title": newtodo.title,
        "body":newtodo.body,
      }]
    )
  }
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className='App-main'>
        <FormTodo
          handle = {addtodo}
        ></FormTodo>
        <Todolist 
          listdata = {listTodo}  
        ></Todolist>
      </div>
    </div>
  );
}

export default App;
