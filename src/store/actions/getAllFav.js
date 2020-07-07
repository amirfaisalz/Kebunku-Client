import server from '../config.js';
import { AsyncStorage } from 'react-native';
export const FETCH_All_FAV = 'FETCH_All_FAV';

export const fetchAllFav = () => {
  
  return (dispatch) => {
    dispatch({
      type: FETCH_All_FAV,
      payload: {
        data: [],
        error: false,
        loading: true,
      },
    })
    AsyncStorage.getItem('token', (err, result) => {
      server({
        method: 'GET',
        url: '/userfav',
        headers: {
          token: result
        }
      })
      .then(({ data }) => {
        dispatch({
          type: FETCH_All_FAV,
          payload: {
            data: data.UserFav,
            error: false,
            loading: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_All_FAV,
          payload: {
            data: false,
            error: error.message,
            loading: false,
          },
        });
      });
    })
  };
};
