const defaultState = {
    text: '',
    showCompleted: true,
    startDate: 0,
    endDate: 0
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
        default:
            return state;
    }
};
