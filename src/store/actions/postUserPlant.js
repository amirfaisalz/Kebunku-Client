import server from '../config.js';
import { fetchAllMyPlant } from './getUserPlant';
import { AsyncStorage } from 'react-native';

export const POST_USER_PLANT = 'POST_USER_PLANT';

export const postUserPlant = (dataPlant) => {
  return (dispatch) => {
    AsyncStorage.getItem('token', (err, result) => {
      server({
        method: 'POST',
        url: '/userplant',
        // mungkin nanti Object Plant keseluruhan ?
        data: {
          PlantId: dataPlant.PlantId,
          notes: dataPlant.notes,
          water_reminder: +dataPlant.reminder,
          planted_date: new Date(dataPlant.plantedDate),
          pupuk: dataPlant.pupuk,
        },
        headers: {
          token: result,
        },
      })
        .then(({ data }) => {
          dispatch(fetchAllMyPlant());
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };
};
