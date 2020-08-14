import { SMURF_LOADING, SMURF_SUCCESS, SMURF_FAIL } from '../actions/smurfActions'

const intialState = {
    smurfs: [],
    loading: false,
    error: ''
}

export const smurfReducer = (state=intialState, action) => {
    switch (action.type) {
        case SMURF_LOADING:
            return {
                ...state,
                loading: true
            }
        case SMURF_SUCCESS: 
            return {
                ...state,
                smurfs: action.payload,
                loading: false
            }
        case SMURF_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state
    }
}