import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [logged,setLogged]=useState(false)
  console.log(logged===false)
  return (
    
    <div className="App">
      <header className="App-header">
        
        {logged===false?<div>
            <p>Voce não pode acessar esta página, faça Login</p>
            <button onClick={()=>setLogged(true)}>Entrar</button>
            </div>:<div>
              <p>Bem vindo Matheus!</p>
              <button onClick={()=>setLogged(false)}>Sair</button></div>
        }
        
      </header>
    </div>
  );
}

export default App;
