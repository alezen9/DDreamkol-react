const initState = {
    language: 'mkd',
    mode: 'day'
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_LANGUAGE':
            return {
                ...state,
                language: action.payload.language
            }
        case 'SET_MODE':
            return {
                ...state,
                mode: action.payload.mode
            }
        default:
            return state;
    }
}

export default rootReducer;