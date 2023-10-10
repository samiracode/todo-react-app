import React, {useState} from 'react';
import './App.css';
// Importing components
import Form from './components/Form';
import TodoList from './components/TodoLIst';

function App() {
  const [inputText, setInputText] = useState('');
  return (
    <div className="App">
      <header>
        <h1>Samira's Todo List</h1>
      </header>¨
      <Form />
      <TodoList />
      
    </div>
  );
}

export default App;
