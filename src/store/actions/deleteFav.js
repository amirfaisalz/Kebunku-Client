import server from '../config.js';
import {fetchAllFav} from './getAllFav'
import { AsyncStorage } from 'react-native';

export const DELETE_FAV = 'DELETE_FAV';

export const deleteFavorite = (id) => {
  
  return (dispatch) => {
    console.log('masuk delete ===========')
    AsyncStorage.getItem('token', (err, result) => {
      server({
        method: 'DELETE',
        url: `/userfav/${id}`,
        headers: {
          token: result
        }
      })
      .then(({ data }) => {
        dispatch(fetchAllFav())
      })
      .catch((error) => {
        console.log(error)
      });
    });
  };
};
