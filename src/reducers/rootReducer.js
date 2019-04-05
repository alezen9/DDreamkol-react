const initState = {
    language: 'mkd'
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_LANGUAGE':
            return {
                ...state,
                language: action.payload.language
            }
        default:
            return state;
    }
}

export default rootReducer;