import './App.css'
import Galeria from './components/Galeria'
import jugadores from './data/jugadores.json'
function App() {

  return(
    <div className="app">
        <h1>⚽Galeria de Jugadores del Mundial</h1>
        <h2>Enríquez Rodríguez Alejandro Guillermo</h2>
        <p><strong>Selecciona tus jugadores favoritos Marcando ❤️</strong></p>
        <Galeria jugadores={jugadores}/>
    </div>
  )
}

export default App
