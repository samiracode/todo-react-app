import React, {useState, useEffect} from 'react';
import './App.css';
// Importing components
import Form from './components/Form';
import TodoList from './components/TodoLIst';

function App() {

  // Our State
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [ status, setStatus] = useState("all")
  const [ filteredTodos, setFilterTodos ] = useState([])
  // Run Once When The app Starts


  //Use Effect
  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  // functions
  const filterHandler = () => {
    switch(status) {
      case 'completed': 
        setFilterTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilterTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilterTodos(todos);
        break;
    }
  }
  //Local Storage

  

  return (
    <div className="App">
      <header>
        <h1>Samira's Todo List</h1>
      </header>¨
      <Form 
        todos={todos} 
        inputText={inputText} 
        setTodos={setTodos} 
        setInputText={setInputText}
        setStatus = {setStatus}
        filteredTodos={filteredTodos}
      />
      <TodoList 
        todos={todos} 
        setTodos={setTodos} 
        filteredTodos={filteredTodos}
      />
      
      
    </div>
  );
}

export default App;
