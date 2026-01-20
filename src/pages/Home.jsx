import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { CharacterCard } from "../components/CharacterCard.jsx";
import { LocationCard } from "../components/LocationCard.jsx";
import { set_allcharacters, set_alllocations } from "../components/APIServices.js";

export const Home = () => {
	const { store, dispatch } = useGlobalReducer()
	
	useEffect(() => {
		set_allcharacters(dispatch)
		set_alllocations(dispatch)  
	}, [])

	return (
		<div className="container-fluid mt-4">
			<h2 className="mb-3 px-3 bg-warning">Personajes de Los Simpsons</h2>
			<div className="overflow-x-auto pb-3 mb-5" style={{scrollBehavior: "smooth"}}>
				<div className="d-flex gap-4 px-3" style={{width: "max-content"}}>
					{
						store.characters && store.characters.map(character => (
							<div key={character.id} style={{minWidth: "280px", maxWidth: "280px"}}>
								<CharacterCard Character={character} />
							</div>
						))
					}
				</div>
			</div>

			
			<h2 className="mb-3 px-3  bg-warning ">Locaciones de Springfield</h2>
			<div className="overflow-x-auto pb-3" style={{scrollBehavior: "smooth"}}>
				<div className="d-flex gap-4 px-3" style={{width: "max-content"}}>
					{
						store.locations && store.locations.map(location => (
							<div key={location.id} style={{minWidth: "280px", maxWidth: "280px"}}>
								<LocationCard Location={location} />
							</div>
						))
					}
				</div>
			</div>
		</div>
	);
}