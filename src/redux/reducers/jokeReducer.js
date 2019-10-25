import * as actionTypes from '../actions/types'

const initialJokesState = {
    jokes: [],
}

const jokeReducer = (state = initialJokesState, action) => {
    switch(action.type) {
        case actionTypes.GET_SINGLE_JOKE: {
            return {
                ...state,
                jokes: action.payload
            }
        }
        case actionTypes.GET_JOKE_BY_CATEGORY: {
            return {
                ...state,
                jokes: action.payload
            }
        }
        case actionTypes.SEARCH_JOKES: {
            return {
                ...state,
                jokes: action.payload
            }
        }
        default: {
            return state
        }
    }
}

export default jokeReducer