import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
	const { store } = useGlobalReducer();
	const favoritesCount = store.favorites?.length || 0;

	return (
		<nav className="navbar navbar-warning bg-warning">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Los Simpson</span>
				</Link>
				<div className="ml-auto">
					<Link to="/favorites">
						<button className="btn btn-primary position-relative">
							⭐ Favoritos
							{favoritesCount > 0 && (
								<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
									{favoritesCount}
								</span>
							)}
						</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};