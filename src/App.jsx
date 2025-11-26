import { useState } from "react"

function App() {
  const [task, setTask] = useState([
    {
      id: 1,
      title: "Estudar programação",
      description: "Estudar programação para se tornar um desenvolvedor full stack",
      isCompleted: false
    },
    {
      id: 2,
      title: "Estudar inglês",
      description: "Estudar inglês para se tornar fluente",
      isCompleted: false
    },
    {
      id: 3,
      title: "Estudar matemática",
      description: "Estudar matemática para desenvolver minha lógica",
      isCompleted: false
    }
  ]);

  return (
    <h1>Gerenciando tarefas</h1>
  );
}

export default App;


















/*import { useState } from "react";

function App() {
  const [message, setMessage] = useState('Olá, mundo');

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={() => {setMessage('Olá, fui clicado!');}}></button>
    </div>
  );
}

export default App */

