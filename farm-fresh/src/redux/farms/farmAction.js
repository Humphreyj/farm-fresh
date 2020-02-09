import { axiosWithAuth } from '../../tools/axiosAuth';

export const fetchFarms = () => {
    return dispatch => {
        axiosWithAuth().get('https://farm-fresh-produce-api.herokuapp.com/api/farms/')
        .then(res => {
            console.log(res)
            dispatch({type: 'FETCH_FARMS', payload: res.data})
        })
        .catch(err => {
            console.log(err);
        })
    }
}