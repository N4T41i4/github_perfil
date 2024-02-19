import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";

import { useState } from "react";



function App() {
  const nome ='Natalia'

  function retornaNome(){
    return nome;
  }

  const pessoa = {
    nome: "Maria"
  }

  let estaDeDia =true;
  const[formularioEstaVisivel,setFormularioEstaVisivel]=useState(true);
  const[nomeUsuario,setNomeUsuario]=useState('');

  return (
    <>
    <input type="text" onBlur={(e)=>setNomeUsuario(e.target.value)}/>

    {nomeUsuario.length > 4 &&(
      <>
      <Perfil nomeUsuario={nomeUsuario}/>
      <ReposList nomeUsuario={nomeUsuario} />
      </>
    )}

    {formularioEstaVisivel &&( 
    <Formulario/>
    )}
    <button onClick={()=>setFormularioEstaVisivel(!formularioEstaVisivel)} type="button" >toggle form</button>
    
    <h1>Olá,{retornaNome()}</h1>
    <h2>Olá,{pessoa.nome}</h2>
    <h2>Subtitulo</h2>
    {estaDeDia ?'Bom dia ':'Boa tarde'}
    {estaDeDia && 'Bom dia'}
   </>
   
  )
}

export default App
