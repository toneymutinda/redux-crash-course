import * as actionTypes from './types'
import { getCategories } from '../../apis/categories'
import { loading, setResponseType } from './utilityActions'

export const fetchCategories = () => async dispatch => {
    dispatch(loading(true))
    try {
        const response = await getCategories()
        dispatch({
            type: actionTypes.GET_CATEGORIES,
            payload: response.data
        })
        dispatch(setResponseType('success', 'Data received successfully'))
    } catch (err) {
        dispatch(setResponseType('error', err))
    }
    dispatch(loading(false))
}