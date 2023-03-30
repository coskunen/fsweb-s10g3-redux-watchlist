import { movies } from "../../movies";

//actions
export const REMOVE_FAV = "Favorilerden Kaldir" 
export const ADD_FAVORITES = "Favorilere Ekle";

export function removeFav(id) {
    return{ type: REMOVE_FAV , payload : id};
}
const initialState = {
    movies : movies ,
    favorites : [
        {
            "id": 8,
            "title": "Memento",
            "year": "2000",
            "runtime": "113",
            "genres": [
              "Mystery",
              "Thriller"
            ],
            "director": "Christopher Nolan",
            "actors": "Guy Pearce, Carrie-Anne Moss, Joe Pantoliano, Mark Boone Junior",
            "plot": "A man juggles searching for his wife's murderer and keeping his short-term memory loss from being an obstacle.",
            "posterUrl": "https://www.moviemem.com/wp-content/uploads/2020/07/MEMENTO1SH.jpg"
          }
    ]
};

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_FAVORITES :
            let newMovie = action.payload;
            let newMoviesList = state.movies.filter((mov => mov.id !== action.payload.id))
            //if(state.favorites.every((movie)=> movie.id !== newMovie.id))
                return{
                    ...state,
                    favorites:[...state.favorites, newMovie],
                    movies : newMoviesList
                }
        case REMOVE_FAV :
            let exFavItemId = action.payload;
            let exFavoriteMovieObj = state.favorites.find((ex)=>ex.id === exFavItemId)
            let newFavList = state.favorites.filter((fav) => fav.id !== exFavItemId)
                return{
                    ...state,
                    favorites: newFavList,
                    movies : [...state.movies, exFavoriteMovieObj]
                }

        default:
        return state
    }
}

export default reducer;