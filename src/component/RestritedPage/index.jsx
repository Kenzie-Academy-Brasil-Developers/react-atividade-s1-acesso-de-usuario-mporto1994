export const RestritedPage = ({setLogged}) => {
    return(
        <div>
              <p>Bem vindo Matheus!</p>
              <button onClick={()=>setLogged(false)}>Sair</button></div>
    )
}