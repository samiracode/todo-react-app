import React, {useState} from 'react';
import './App.css';
// Importing components
import Form from './components/Form';
import TodoList from './components/TodoLIst';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [ status, setStatus] = useState("all")
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
      />
      <TodoList todos={todos} setTodos={setTodos} />
      
      
    </div>
  );
}

export default App;
