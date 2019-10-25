import * as actionTypes from './types'

export const loading = (isLoading) => {
    return {
        type: actionTypes.SET_LOADING,
        payload: isLoading
    }
}

export const setResponseType = (type, message) => {
    return {
        type: actionTypes.SET_RESPONSE_TYPE,
        payload: {
            type,
            message
        }
    }
}