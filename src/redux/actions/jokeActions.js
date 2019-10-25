import * as actionTypes from './types'
import { getJoke, getJokeByCategory, getSearchJoke } from '../../apis/jokes'
import { loading, setResponseType } from './utilityActions'

export const fetchJoke = () => async dispatch => {
    dispatch(loading(true))
    try {
        const response = await getJoke()
        dispatch({
            type: actionTypes.GET_SINGLE_JOKE,
            payload: response
        })
        dispatch(setResponseType('success', 'Data received successfully'))
    } catch (err) {
        dispatch(setResponseType('error', err))
    }
    dispatch(loading(false))
}

export const fetchJokeByCategory = (category) => async dispatch => {
    dispatch(loading(true))
    try {
        const response = await getJokeByCategory(category)
        dispatch({
            type: actionTypes.GET_JOKE_BY_CATEGORY,
            payload: response
        })
        dispatch(setResponseType('success', 'Data received successfully'))
    } catch (err) {
        dispatch(setResponseType('error', err))
    }
    dispatch(loading(false))
}

export const searchJoke = (query) => async dispatch => {
    dispatch(loading(true))
    try {
        const response = await getSearchJoke(query)
        dispatch({
            type: actionTypes.SEARCH_JOKES,
            payload: response.result
        })
        dispatch(setResponseType('success', response.total === 0 ? 'No jokes found' : 'Data received successfully'))
    } catch (err) {
        dispatch(setResponseType('error', err))
    }
    dispatch(loading(false))
}