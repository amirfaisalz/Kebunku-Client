import {fetchAllMyPlant} from './getUserPlant.js'
import { AsyncStorage } from 'react-native';
import server from '../config.js';
export const DELETE_USER_PLANT = 'DELETE_USER_PLANT';

export const deleteUserPlant = (id) => {
  return (dispatch) => {
    AsyncStorage.getItem('token', (err, result) => {
      server({
        method: 'DELETE',
        url: `/userplant/${id}`,
        headers: {
          token: result
        }
      })
      .then(({ data }) => {
        dispatch(fetchAllMyPlant())
      })
      .catch((error) => {
        console.log(error)
      });
    });
  };
};
