import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { CharacterCard } from "../components/CharacterCard.jsx";
import { set_allcharacters } from "../components/APIServices.js";
import { useEffect } from "react";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	
	useEffect(() => {
		set_allcharacters(dispatch)
	}, [])

	return (
		<div className="container-fluid mt-4">
			<h2 className="mb-3 px-3">Personajes de Los Simpsons</h2>
			
			<div className="overflow-x-auto pb-3">
				<div className="d-flex gap-3 px-3" style={{width: "max-content"}}>
					{
						store.characters && store.characters.map(character => (
							<div key={character.id} style={{width: "300px"}}>
								<CharacterCard Character={character} />
							</div>
						))
					}
				</div>
			</div>
		</div>
	);
}