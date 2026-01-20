const API_URL = "https://thesimpsonsapi.com/api/characters";
const LOCATIONS_URL = "https://thesimpsonsapi.com/api/locations";

export const set_allcharacters = async (dispatch) => {
    const response = await fetch(API_URL)
    if(!response.ok){
        return
    }
    
    const data = await response.json()
    console.log("Data completa:", data);
    console.log("Results:", data.results);
    
    // ✅ Envía data.results en lugar de data
    dispatch({type:"set_allcharacters" , payload: data.results})
}

// ✅ Nueva función para locaciones
export const set_alllocations = async (dispatch) => {
    const response = await fetch(LOCATIONS_URL)
    if(!response.ok){
        return
    }
    
    const data = await response.json()
    console.log("Locaciones:", data.results);
    
    // ✅ Verifica si locations también tiene la misma estructura
    const locations = data.results || data;
    dispatch({type:"set_alllocations" , payload: locations})
}

export const set_singlecharacter = async() => {
    const response = await fetch("https://thesimpsonsapi.com/api/characters",{
        method: "GET",
    })
    if(!response.ok){
        alert("consiguiendo el personaje")
        return
    }
}