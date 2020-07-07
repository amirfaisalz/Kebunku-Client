import { combineReducers } from 'redux';
import plantReducer from './plantReducer';
import favReducer from './favReducer';
import userPlantReducer from './userPlantReducer';

const rootReducers = combineReducers({
    plantReducer,
    favReducer,
    userPlantReducer
});

export default rootReducers;
