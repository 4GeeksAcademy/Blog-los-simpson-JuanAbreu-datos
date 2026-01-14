import useGlobalReducer from "../hooks/useGlobalReducer";
import { CharacterCard } from "../components/CharacterCard";
import { Link } from "react-router-dom";

export const Favorites = () => {
	const { store } = useGlobalReducer();

	return (
		<div className="container mt-4">
			<div className="d-flex justify-content-between align-items-center mb-4">
				<h1>⭐ Mis Favoritos</h1>
				<Link to="/">
					<button className="btn btn-secondary">Volver al inicio</button>
				</Link>
			</div>

			{store.favorites && store.favorites.length > 0 ? (
				<div className="row">
					{store.favorites.map(character => (
						<div className="col-md-3 mb-4" key={character.id}>
							<CharacterCard Character={character} />
						</div>
					))}
				</div>
			) : (
				<div className="alert alert-info text-center">
					<h4>No tienes favoritos todavía</h4>
					<p>Agrega personajes a favoritos desde la página principal</p>
					<Link to="/">
						<button className="btn btn-primary">Ver personajes</button>
					</Link>
				</div>
			)}
		</div>
	);
};