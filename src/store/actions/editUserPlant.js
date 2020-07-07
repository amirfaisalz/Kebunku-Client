import { fetchAllMyPlant } from './getUserPlant';
import { AsyncStorage } from 'react-native';
import server from '../config';

export const EDIT_USER_PLANT = 'EDIT_USER_PLANT';

export const editUserPlant = (dataPlant) => {
  return (dispatch) => {
    AsyncStorage.getItem('token', (err, result) => {
      server({
        method: 'PUT',
        url: `/userplant/${dataPlant._id}`,
        data: {
          PlantId: dataPlant.PlantId,
          notes: dataPlant.notes,
          water_reminder: dataPlant.water_reminder,
          last_watering: new Date(),
          watered: true,
        },
        headers: {
          token: result,
        },
      })
        .then(({ data }) => {
          console.log(data, 'data edit user plant ======');
          dispatch(fetchAllMyPlant());
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };
};
