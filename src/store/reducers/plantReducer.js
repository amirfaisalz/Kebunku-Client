import { FETCH_All_PLANT } from '../actions';

const initialState = {
  plantList: [],
  error: '',
  loading: '',
};

const plantListReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_All_PLANT:
      return {
        ...state,
        loading: payload.loading,
        plantList: payload.data,
        error: payload.error,
      };
    default:
      return state;
  }
};

export default plantListReducer;
