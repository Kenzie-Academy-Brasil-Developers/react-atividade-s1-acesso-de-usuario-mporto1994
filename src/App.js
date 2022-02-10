import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { RestritedPage } from './component/RestritedPage';

function App() {

  const [logged,setLogged]=useState(false)
  console.log(logged===false)
  return (
    
    <div className="App">
      <header className="App-header">
        
        {logged===false?<div>
            <p>Voce não pode acessar esta página, faça Login</p>
            <button onClick={()=>setLogged(true)}>Entrar</button>
            </div>:<RestritedPage setLogged={setLogged}/>
        }
        
      </header>
    </div>
  );
}

export default App;
