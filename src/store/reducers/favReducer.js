import { FETCH_All_FAV} from '../actions';
// import { POST_FAVORITE} from '../actions';
// import { DELETE_FAV} from '../actions';

const initialState = {
  favList: [],
  error: '',
  loading: '',
};

const plantListReducer = (state = initialState, action) => {
  const { type, payload } = action;
  // console.log(state.favList)
  switch (type) {
    case FETCH_All_FAV:
      return {
        ...state,
        loading: payload.loading,
        favList: payload.data,
        error: payload.error,
      };
    default:
      return state;
  }
};

export default plantListReducer;
