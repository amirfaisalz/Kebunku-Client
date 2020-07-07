import server from '../config.js';
import { fetchAllMyPlant } from './getUserPlant';
import { AsyncStorage } from 'react-native';

export const PUT_USER_PLANT = 'PUT_USER_PLANT';

export const putUserPlant = (dataPlant) => {
  console.log(dataPlant, "dataplant nih========>")
  return (dispatch) => {
    AsyncStorage.getItem('token', (err, result) => {
      server({
        method: 'PUT',
        url: `/userplant/${dataPlant.PlantId}`,
        // mungkin nanti Object Plant keseluruhan ?
        data: {
          notes: dataPlant.notes,
          water_reminder: +dataPlant.reminder,
          planted_date: dataPlant.plantedDate,
          pupuk: dataPlant.pupuk,
        },
        headers: {
          token: result,
        },
      })
        .then(({ data }) => {
          console.log(data, 'data post user plant ======');
          dispatch(fetchAllMyPlant());
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };
};
