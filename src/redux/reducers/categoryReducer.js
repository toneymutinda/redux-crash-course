import * as actionTypes from '../actions/types'

const initialCategoriesState = {
    categories: [],
}

const categoryReducer = (state = initialCategoriesState, action) => {
    switch(action.type) {
        case actionTypes.GET_CATEGORIES: {
            return {
                ...state,
                categories: action.payload
            }
        }
        default: {
            return state
        }
    }
}

export default categoryReducer