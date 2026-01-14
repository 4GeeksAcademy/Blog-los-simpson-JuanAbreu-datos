import useGlobalReducer from "../hooks/useGlobalReducer"
import { Link } from "react-router-dom";

export const CharacterCard = ({Character}) => {

  const URL_IMG = "https://cdn.thesimpsonsapi.com/200"
  const { store, dispatch } = useGlobalReducer();

  const isFavorite = store.favorites?.some(fav => fav.id === Character.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch({
        type: "remove_from_favorites",
        payload: Character
      });
    } else {
      dispatch({
        type: "add_to_favorites",
        payload: Character
      });
    }
  };

  return (
    <div className="card h-100">
      <img 
        src={`${URL_IMG}${Character.portrait_path}`}
        className="card-img-top" 
        alt={Character.name}
      />
      <div className="card-body">
        <h5 className="card-title">{Character.name}</h5>
        <p className="card-text">
          <strong>Edad:</strong> {Character.age || "Desconocida"}<br/>
          <strong>Fecha de nacimiento:</strong> {Character.birthdate || "Desconocida"}<br/>
          <strong>Ocupación:</strong> {Character.occupation || "Personaje de Los Simpsons"}
        </p>
        <button 
          onClick={toggleFavorite}
          className={`btn ${isFavorite ? 'btn-warning' : 'btn-outline-warning'} w-100 mb-2`}
        >
          {isFavorite ? '⭐ En Favoritos' : '☆ Añadir a Favoritos'}
        </button>
        <Link to={`/character/${Character.id}`} className="btn btn-primary w-100">
          Ver más
        </Link>
      </div>
    </div>
  )
}