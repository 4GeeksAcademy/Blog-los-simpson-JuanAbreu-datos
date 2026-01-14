export const initialStore = () => {
  // Cargar favoritos desde localStorage al inicio
  const savedFavorites = localStorage.getItem('favorites');
  
  return {
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    characters: [],
    favorites: savedFavorites ? JSON.parse(savedFavorites) : [], // ← Carga los favoritos guardados
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_task':
      const { id, color } = action.payload
      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    
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
      const newFavoritesAdd = [...store.favorites, action.payload];
      // ← Guardar en localStorage
      localStorage.setItem('favorites', JSON.stringify(newFavoritesAdd));
      return {
        ...store,
        favorites: newFavoritesAdd
      }
    
    case 'remove_from_favorites':
      const newFavoritesRemove = store.favorites.filter(fav => fav.id !== action.payload.id);
      // ← Guardar en localStorage
      localStorage.setItem('favorites', JSON.stringify(newFavoritesRemove));
      return {
        ...store,
        favorites: newFavoritesRemove
      }
    
    default:
      throw Error('Unknown action.');
  }    
}