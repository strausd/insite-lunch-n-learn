const defaultState = {
    text: '',
    showCompleted: true,
    startDate: undefined,
    endDate: undefined
};

export const filterReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT':
            return {
                ...state,
                text: action.text
            }
        case 'FILTER_COMPLETED':
            return {
                ...state,
                showCompleted: !state.showCompleted
            }
        case 'FILTER_DATE':
            return {
                ...state,
                startDate: action.start,
                endDate: action.end
            }
        default:
            return state;
    }
};
