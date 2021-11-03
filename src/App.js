import React, {useState} from 'react';
import Header from "./header";
import Form from "./form";
import "./App.css";
import Todos from './todos';

function App() {

  const [input, setInput] = useState('');
  const [todo, setTodo] = useState([]);

  return (
  <div className="App">
    <main className="main">
      <Header />
      <Form
        input={input}
        todo={todo}
        setInput={setInput}
        setTodo={setTodo}
        />
      <div>
      <Todos
        todo={todo}
        setTodo={setTodo}
        />
        </div>
    </main>
  </div>
  );
}

export default App;
