import server from '../config.js';
import { fetchAllFav } from './getAllFav'
import { AsyncStorage } from 'react-native';

export const POST_FAVORITE = 'POST_FAVORITE';

export const postFavorite = (PlantId) => {
  console.log('masuk ========')
  return (dispatch) => {
    AsyncStorage.getItem('token', (err, result) => {
      server({
        method: 'POST',
        url: '/userfav',
        data: {PlantId},
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
    })
  };
};
