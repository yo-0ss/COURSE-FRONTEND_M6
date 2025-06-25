import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'

/*//1. Uso de if y else
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const toggleLogin = () => setIsLoggedIn(!isLoggedIn)

  if(isLoggedIn){
    return(
      <section>
        <h1>Bienvenido</h1>
        <button onClick={toggleLogin}>Cerrar Sesión</button>
      </section>
    )
  }else{
    return(
      <section>
        <h1>Inicia Sesión</h1>
        <button onClick={toggleLogin}>Iniciar Sesion</button>
      </section>
    )
  }
}*/

/*//2. Uso del operador ternario (? :)
function App() {
  const [isEnglish, setIsEnglish] = useState(false)

  return(
    <section>
      <h1>{isEnglish ? "Hello World!!!" : "Hola Mundo!!!"}</h1>

      <button onClick={()=>setIsEnglish(!isEnglish)}>
        {isEnglish ? "Cambiar a Español" : "Switch to English"}
      </button>
    </section>
  )
}*/

/*//3. Uso del operador lógico &&;
function App() {
  const [showAlert, setShowAlert] = useState(false)

  return(
    <section>
      <button onClick={()=>setShowAlert(!showAlert)}>
        {showAlert ? "Ocultar Alerta" : "Mostrar Alerta"}
      </button>

      {showAlert && (
        <section>
          <section style={{marginTop: "10px", color:"red"}}>
            ⚠️ Este mensaje es una alerta.
          </section>
        </section>
      )}

    </section>
  )
}*/
 
//4. Renderizado condicional con switch
function App() {
  const [role, setRole] = useState("viewer")

  const renderByRole = () => {
    switch(role){
      case "admin":
        return <h2>Vista de Administrador</h2>
      case "editor":
        return <h2>Vista de Editor</h2>
      case "viewer":
        return <h2>Vista de Lector</h2>
      default:
        return <h2>Vista Desconocida</h2>
    }
  }

  return(
    <>
    <Header></Header>
    <section>
      <h1>Selecciona tu Rol:</h1>
      <select onChange={(e) => setRole(e.target.value)} value={role}>
        <option value="admin">Administrador</option>
        <option value="editor">Editor</option>
        <option value="viewer">Lector</option>
        <option value="god">God</option>
      </select>
    </section>

    <section style={{marginTop:"10px"}}>
        {renderByRole()}
    </section>
    <Footer></Footer>
    </>
  )
}

export default App
