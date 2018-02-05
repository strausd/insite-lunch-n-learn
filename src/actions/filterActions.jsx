export const setText = (text) => {
    return {
        type: 'SET_TEXT',
        text
    };
};

export const filterCompleted = () => {
    return {
        type: 'FILTER_COMPLETED'
    };
};