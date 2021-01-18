import axios from "axios";
import { FETCHING_USERS, lOAD_USERS } from "./types";

export const load_users=(term)=>async dispatch=>{
    try {
      dispatch({
        type:FETCHING_USERS
      });//dispatching the start of the process
        const {data}= await axios.get('https://api.github.com/search/users',{
        params:{ //the params will be added in the url
          action:'query',
          in:'user',
          origin:'*',
          format:'json',
          q:term,
          per_page:100
        },
      });
      dispatch({
        type:lOAD_USERS,
        payload:data
      });//dispatching the data from github
    } catch (error) {
        console.log("error:",error);
    }
};