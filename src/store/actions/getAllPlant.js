import server from '../config.js';

export const FETCH_All_PLANT = 'FETCH_All_PLANT';

export const fetchAllPlant = () => {
  return (dispatch) => {
    dispatch({
      type: FETCH_All_PLANT,
      payload: {
        data: [],
        error: false,
        loading: true,
      },
    })
    server
      .get('/plants')
      .then(({ data }) => {
        dispatch({
          type: FETCH_All_PLANT,
          payload: {
            data: data.Plants,
            error: false,
            loading: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_All_PLANT,
          payload: {
            data: false,
            error: error.message,
            loading: false,
          },
        });
      });
  };
};
