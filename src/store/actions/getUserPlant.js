import server from '../config.js';
import { AsyncStorage } from 'react-native';

export const FETCH_All_USER_PLANT = 'FETCH_All_USER_PLANT';

export const fetchAllMyPlant = () => {
  return (dispatch) => {
    dispatch({
      type: FETCH_All_USER_PLANT,
      payload: {
        data: [],
        error: false,
        loading: true,
      },
    })
    AsyncStorage.getItem('token', (err, result) => {
      server({
        method: 'GET',
        url: '/userplant',
        headers: {
          token: result
        }
      })
      .then(({ data }) => {
        // console.log(data.UserPlant, 'INI DATA USER PLANT')
        dispatch({
          type: FETCH_All_USER_PLANT,
          payload: {
            data: data.UserPlant,
            error: false,
            loading: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_All_USER_PLANT,
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
