import { useRef, useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const inputRef = useRef()
  
  const handelAddTodo = () => {
    const text = inputRef.current.value;
    const newItem = {completed: false , text }  
    setTodos([...todos, newItem]);
    inputRef.current.value = "";
  }

  const handelItemDone = (index) => {
    const newTodos = [...todos]
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos)
  }

  const handelItemDelete = (index) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return (
<>
    <div className="App">
        <h2>TodoList</h2>
        <div className='todo-container'> 
          <ul>
            {todos.map(({text , completed} ,index) =>{
              return (
              <div className='item'>
                <li className={completed ? "done" : ""} key={index} onClick={() => handelItemDone(index)}>{text}</li> 
                <span onClick={() => handelItemDelete(index)} className='trash'>❌</span>
              </div> 
              );
            })}
          </ul>
          <input ref={inputRef} placeholder='Enter item.....'/>
          <button onClick={handelAddTodo}>Add</button>
        </div>

        
    </div>

    <footer>تم تصميم الموقع بواسطة <a href='https://github.com/suleimanalfaraj'>سليمان الفراج</a></footer>
    
</>
  );
}

export default App;
