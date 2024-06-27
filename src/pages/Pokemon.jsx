import { useState, useEffect } from "react";
import styles from './Pokemon.module.css';
import axios from "axios";

function SearchPokemon() {
  const [nombre, setNombre] = useState('');
  const [pokemon, setPokemon] = useState({});
  const [error, setError] = useState('');
  const [mensaje, setMensaje] = useState(false);

  const getPoke = async () => {
    let response;
   
    setPokemon({});
    try {
      setMensaje(true);
      response = await  axios.get(`https://pokeapi.co/api/v2/pokemon/${nombre.toLowerCase()}`);
      const infoPoke = response.data;
      setPokemon(infoPoke);
      setError('');
     }
     catch (err) {
        setPokemon({});
        setError(err.response.status + ' Pokemon no encontrado');
     } 
     finally {
      setMensaje(false);
     }
  }
  
  useEffect(() => {
    getPoke();
  }, [nombre]);

  return (
    <>
     <h2>Búsqueda de Pokemon</h2>
       
      <div className={styles.form}>
        <p>Introduce el nombre del pokemon a encontrar:</p>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div className={styles.container-pokemon }>
            {mensaje && <p>Buscando...</p>}
            {(!mensaje && error) && <p className={styles.mensaje}>{error}</p>}
            {!error && (<div key={pokemon?.id} className={styles.pokemon}>
                <h3>{pokemon?.name}</h3>

                <img src={pokemon?.sprites?.other.dream_world.front_default} alt={pokemon?.name} />
            </div>)}
        </div>
    </>
  );
}


//<p><span>Peso:</span> {pokemon?.weight}</p>
//<p><span>Altura:</span> {pokemon?.height}</p>


export default SearchPokemon;