import { combineReducers } from 'redux'
import jokesReducer from './jokeReducer'
import utilityReducer from './utilityReducer'
import categoryReducer from './categoryReducer'

export default combineReducers({
    jokes: jokesReducer,
    utilities: utilityReducer,
    categories: categoryReducer
})