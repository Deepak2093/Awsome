import axios from 'axios';
import {APIS, URLs} from '../utils/Urls';

export const TrandingAPI = (payload,callback) => {
console.log("Tranding console ",URLs.base_url+URLs.TRANDING)
  axios.get(URLs.base_url+URLs.TRANDING,{
    headers: {
      'Content-Type': 'application/json',
      Authorization:`bearer ${URLs.TOKEN}`
    },
  })
    .then(response => {
      console.log('MoviesTranding=> ', response);
      callback(response);
    })
    .catch(error => {
        console.log("MovieTranding--> ",error)
      if (error.response) callback(error.response);
      else callback(error);
    });
};
