import { FETCH_All_USER_PLANT } from '../actions';

const initialState = {
  myPlant: [],
  error: '',
  loading: '',
};

const userPlantReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_All_USER_PLANT:
      return {
        ...state,
        loading: payload.loading,
        myPlant: payload.data,
        error: payload.error,
      };
    default:
      return state;
  }
};

export default userPlantReducer;
