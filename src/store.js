export const initialStore=()=>{
  return{
    
  
    characters: [],
    favorites: []
  }

}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    default:
      throw Error('Unknown action.');

      case 'set_allcharacters':
        return {
          ...store,
          characters: action.payload

    }
      
    case 'add_to_favorites': 
      const isAlreadyFavorite = store.favorites.some(fav => fav.id === action.payload.id);
      if (isAlreadyFavorite) {
        return store; 
      }
      return {
        ...store,
        favorites: [...store.favorites, action.payload]
      }
    
    case 'remove_from_favorites': 
      return {
        ...store,
        favorites: store.favorites.filter(fav => fav.id !== action.payload.id)
      }
  }    
}
