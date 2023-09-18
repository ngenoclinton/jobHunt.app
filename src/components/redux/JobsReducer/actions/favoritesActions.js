
// actions.js
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';
export const SET_FAVORITES = 'SET_FAVORITES';

export const addToFavorites = (job) => ({
  type: ADD_TO_FAVORITES,
  payload: job,
});

export const removeFromFavorites = (jobId) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: jobId,
});

export const setFavorites = (favorites)=>({
  type:SET_FAVORITES,
  payload:favorites
});
// export const addToFavorites=(job)=>async(dispatch)=>{
//     try{
//       dispatch(addingToFavorites (job));

//   }catch (error) {
//       dispatch(error);
//     }
// }
