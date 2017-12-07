const defaultState = [];

export default (state = defaultState, action)=>{
    switch(action.type){
        case 'UPDATE_POLLUTION':
            return state.concat(action.pollution)
        default:
            return state;
    }
};