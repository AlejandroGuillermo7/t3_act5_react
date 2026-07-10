import { useState } from "react"; 
import style from './cartaJugador.module.css'

function CartaJugador({nombre,equipo,posicion,foto}){
    const [esfavorito,setFavorito] = useState(false)

    return (
        <div className={style.cartaJugador}>
            <img src={foto} alt={nombre}/>
            <h2>{nombre}</h2>
            <p>{equipo}-{posicion}</p>
            <button onClick={()=> setFavorito(!esfavorito)}>{esfavorito ? '❤️' : '🤍'}</button>
        </div>
    )
}
export default CartaJugador