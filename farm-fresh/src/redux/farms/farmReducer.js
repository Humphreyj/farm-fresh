const initialState = {
    farms: []
}

export const farmReducer = (state =  initialState, action) => {
    switch(action.type) {
        case 'FETCH_FARMS':
            return {...state, farms: action.payload};
        default:
            return state;
    }
    
};