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
  useEffect(() => {
    localStorage.setTodos('todos', JSON.stringify(todos));
  }, [todos]);

  //Use Effect
  

  useEffect(() => {
    const todos = JSON.parse(localStorage.getTodos('todos'));
    if (todos) {
    setTodos(todos);
    }
  }, []);

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
  localStorage.setItem('todos', JSON.stringify(todos));


  

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
