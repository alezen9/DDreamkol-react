// actions
export function setLanguage(lng) {
    return {
        type: 'SET_LANGUAGE',
        payload: {
            language: lng
        }
    }
}

export function setMode(val) {
    return {
        type: 'SET_MODE',
        payload: {
            mode: val ? 'night' : 'day'
        }
    }
}