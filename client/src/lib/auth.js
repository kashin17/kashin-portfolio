import Cookies from 'js-cookie';
export const setToken = (t) => Cookies.set('token', t, { sameSite: 'lax' });
export const clearToken = () => Cookies.remove('token');
