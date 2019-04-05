// actions
export function setLanguage(lng) {
    return {
        type: 'SET_LANGUAGE',
        payload: {
            language: lng
        }
    }
}