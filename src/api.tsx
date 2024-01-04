// eslint-disable-next-line react-refresh/only-export-components
const API: string = 'http://localhost:3000/subs';

export const getUsers = async () => await fetch(API)