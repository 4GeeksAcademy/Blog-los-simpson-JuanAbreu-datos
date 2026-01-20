import { Link } from "react-router-dom";

export const LocationCard = ({ Location }) => {
  const Location_URL = "https://cdn.thesimpsonsapi.com/1280";

  return (
    <div className="card h-100">
      <img 
        src={`${Location_URL}${Location.image_path}`}
        className="card-img-top" 
        alt={Location.name}
      />
      <div className="card-body">
        <h5 className="card-title">{Location.name}</h5>
        <p className="card-text">
          <strong>Ubicación:</strong> {Location.town || "Desconocida"}<br/>
          <strong>Uso:</strong> {Location.use || "Desconocido"}
        </p>
        <Link to={`/location/${Location.id}`} className="btn btn-primary w-100">
          Ver más
        </Link>
      </div>
    </div>
  );
};