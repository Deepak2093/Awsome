import axios from 'axios';
import {APIS, URLs} from '../utils/Urls';

export const GetMovies = (callback) => {
// console.log(">>>>>>>>>>>>>>>>",URLs.base_url+URLs.MOVIES_List)
  axios.get(URLs.base_url+URLs.MOVIES_List, {
    headers: {
      'Content-Type': 'application/json',
      Authorization:`bearer ${URLs.TOKEN}`
    },
  })
    .then(response => {
      // console.log('MoviesResponse=> ', response);
      callback(response);
    })
    .catch(error => {
        // console.log("MovieError--> ",error)
      if (error.response) callback(error.response);
      else callback(error);
    });
};
