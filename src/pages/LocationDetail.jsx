import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { set_alllocations } from "../components/APIServices";

export const LocationDetail = () => {
	const { theId } = useParams();
	const { store, dispatch } = useGlobalReducer();
	const [loading, setLoading] = useState(true);
	
	
	useEffect(() => {
		if (!store.locations || store.locations.length === 0) {
			set_alllocations(dispatch).then(() => {
				setLoading(false);
			});
		} else {
			setLoading(false);
		}
	}, [store.locations, dispatch]);

	const location = store.locations?.find(loc => loc.id === parseInt(theId));
	const Location_URL = "https://cdn.thesimpsonsapi.com/1280";

	
	if (loading) {
		return (
			<div className="container mt-5 text-center">
				<div className="spinner-border text-primary" role="status">
					<span className="visually-hidden">Cargando...</span>
				</div>
				<p className="mt-3">Cargando locación...</p>
			</div>
		);
	}

	
	if (!location) {
		return (
			<div className="container mt-5">
				<div className="alert alert-warning">
					<h3>Locación no encontrada</h3>
					<Link to="/">
						<button className="btn btn-primary">Volver al inicio</button>
					</Link>
				</div>
			</div>
		);
	}

	return (
		<div className="container mt-5">
			<div className="mb-4">
				<Link to="/">
					<button className="btn btn-secondary">← Volver</button>
				</Link>
			</div>
			
			<div className="row">
				<div className="col-md-6">
					<img 
						src={`${Location_URL}${location.image_path}`}
						alt={location.name}
						className="img-fluid rounded shadow"
					/>
				</div>
				
				<div className="col-md-6">
					<h1 className="mb-4">{location.name}</h1>
					
					<div className="card">
						<div className="card-body">
							<h5 className="card-title">📍 Información de la Locación</h5>
							<hr/>
							<p><strong>Nombre:</strong> {location.name}</p>
							<p><strong>Ciudad:</strong> {location.town || "Desconocida"}</p>
							<p><strong>Uso:</strong> {location.use || "Desconocido"}</p>
							<p><strong>ID:</strong> {location.id}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};