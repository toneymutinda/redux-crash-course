import * as actionTypes from '../actions/types'

const initialUtilityState = {
    loading: true,
    error: {
        showError: false,
        message: null
    }
}

const utilityReducer = (state = initialUtilityState, action) => {
    switch(action.type) {
        case actionTypes.SET_RESPONSE_TYPE: {
            return {
                ...state,
                error: {
                    showError: action.payload.error,
                    message: action.payload.message
                }
            }
        }
        case actionTypes.SET_LOADING: {
            return {
                ...state,
                loading: action.payload
            }
        }
        default: {
            return state
        }
    }
}

export default utilityReducer