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

export const filterDate = (startDate, endDate) => {
    const start = startDate ? startDate.valueOf() : undefined;
    const end = endDate ? endDate.valueOf() : undefined;
    return {
        type: 'FILTER_DATE',
        start,
        end
    };
};