const API_URL = "https://thesimpsonsapi.com/api/characters";

export const set_allcharacters = async (dispatch) => {
    const response = await fetch(API_URL)
    if(!response.ok){
        
        return
    }
    

    const data = await response.json()
    console.log(data.results);
    dispatch({type:"set_allcharacters" , payload: data.results})

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