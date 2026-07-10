import CartaJugador from "./CartaJugador";
import styles from './galeria.module.css'

function Galeria ({jugadores}){
    
    
    return (
        <div className={styles.galeria}>
            {
                jugadores.map(jugador => (
                    <CartaJugador
                    key={jugador.id}
                    nombre={jugador.nombre}
                    equipo={jugador.equipo}
                    posicion={jugador.posicion}
                    foto={jugador.foto}
                    />
                ))
            }

        </div>
    )
}
export default Galeria