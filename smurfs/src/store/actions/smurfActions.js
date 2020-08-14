import axios from 'axios'

//establish three states
export const SMURF_LOADING = 'SMURF_LOADING'
export const SMURF_SUCCESS = 'SMURF_SUCCESS'
export const SMURF_FAIL = 'SMURF_FAIL'



export const getSmurfs = () => (dispatch) => {
    //put in loading state
    dispatch({ type: SMURF_LOADING })
    axios.get('http://localhost:3333/smurfs')
        .then (res => {
            
            //put in success state
            dispatch({ type: SMURF_SUCCESS, payload: res.data})
        })
        //if fails , put in error state
        .catch(err => dispatch({type: SMURF_FAIL, payload: err.message}))
}
