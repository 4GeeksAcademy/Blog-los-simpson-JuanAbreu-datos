import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { LocationCard } from "../components/LocationCard.jsx";
import { set_alllocations } from "../components/APIServices.js";

export const Locations = () => {
  const { store, dispatch } = useGlobalReducer();
  
  useEffect(() => {
    set_alllocations(dispatch);
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Locaciones de Los Simpsons</h2>
      
      <div className="row">
        {
          store.locations && store.locations.map(location => (
            <div className="col-md-3 mb-4" key={location.id}>
              <LocationCard Location={location} />
            </div>
          ))
        }
      </div>

      {store.locations?.length === 0 && (
        <div className="alert alert-info text-center">
          Cargando locaciones...
        </div>
      )}
    </div>
  );
};