export const getMonth = (date) => {
    return date.toLocaleString('en-US', {month: 'long'});
}

export const getYear = (date) => {
    return date.getFullYear();
}

export const getDay = (date) => {
    return date.toLocaleString('en-US', {day: '2-digit'});
}