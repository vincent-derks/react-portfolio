const initialState = {
    content: {
        work: []
    }
}

const contentReducer = (state = initialState, action) => {
    let newState = {...state}
    switch(action.type){
        case 'LOAD_CONTENT':
            return {
                ...state,
                content: action.data
            }
        default:
            return newState
    }
}

export default contentReducer
