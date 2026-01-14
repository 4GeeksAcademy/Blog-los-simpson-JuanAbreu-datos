import { useParams, Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const CharacterDetail = () => {
	const { theId } = useParams();
	const { store, dispatch } = useGlobalReducer();
	
	// Buscar el personaje por ID
	const character = store.characters.find(char => char.id === parseInt(theId));

	const BASE_URL = "https://thesimpsonsapi.com";
     const URL_IMG = "https://cdn.thesimpsonsapi.com/200"

	// Verificar si está en favoritos
	const isFavorite = store.favorites?.some(fav => fav.id === character?.id);

	const toggleFavorite = () => {
		if (isFavorite) {
			dispatch({
				type: "remove_from_favorites",
				payload: character
			});
		} else {
			dispatch({
				type: "add_to_favorites",
				payload: character
			});
		}
	};

	// Si no encuentra el personaje
	if (!character) {
		return (
			<div className="container mt-5">
				<div className="alert alert-warning">
					<h3>Personaje no encontrado</h3>
					<Link to="/">
						<button className="btn btn-primary">Volver al inicio</button>
					</Link>
				</div>
			</div>
		);
	}

	return (
		<div className="container mt-5">
			<div className="d-flex justify-content-between align-items-center mb-4">
				<Link to="/">
					<button className="btn btn-secondary">← Volver</button>
				</Link>
				<button 
					onClick={toggleFavorite}
					className={`btn ${isFavorite ? 'btn-warning' : 'btn-outline-warning'}`}
				>
					{isFavorite ? '⭐ En Favoritos' : '☆ Añadir a Favoritos'}
				</button>
			</div>
			
			<div className="row">
				<div className="col-md-4">
					<img 
						src={`${URL_IMG}${character.portrait_path}`}
						alt={character.name}
						className="img-fluid rounded shadow"
					/>
				</div>
				
				<div className="col-md-8">
					<h1 className="mb-4">{character.name}</h1>
					
					<div className="card mb-3">
						<div className="card-body">
							<h5 className="card-title">📋 Información Personal</h5>
							<hr/>
							<p><strong>Edad:</strong> {character.age || "Desconocida"}</p>
							<p><strong>Fecha de nacimiento:</strong> {character.birthdate || "Desconocida"}</p>
							<p><strong>Género:</strong> {character.gender || "Desconocido"}</p>
							<p><strong>Ocupación:</strong> {character.occupation || "Desconocida"}</p>
							<p><strong>Estado:</strong> {character.status || "Desconocido"}</p>
						</div>
					</div>

					{character.phrases && character.phrases.length > 0 && (
						<div className="card">
							<div className="card-body">
								<h5 className="card-title">💬 Frases Icónicas</h5>
								<hr/>
								<ul className="list-group list-group-flush">
									{character.phrases.map((phrase, index) => (
										<li key={index} className="list-group-item">
											<i className="text-muted">"{phrase}"</i>
										</li>
									))}
								</ul>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};