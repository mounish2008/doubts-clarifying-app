import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [questions,SetQuestions]=useState([])
  const[q,SetQ]=useState()
  const handleSubmit=(m)=>{
    m.preventDefault()
    SetQuestions([...questions,q])
    SetQ("")
  }
  console.log(questions)
  return (
    <div className="App">
     <h1>doubts-clarifying-app</h1>
      <div>
        <form onSubmit={handleSubmit}>
        <input type="text" value={q} onChange={(m)=>{SetQ(m.target.value)}}/>
        <button>send</button>
        </form>
      </div>
    </div>
  );
}

export default App;
