import axios from 'axios';

import {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} from './contactsSlice';

axios.defaults.baseURL = 'https://63308c18f5fda801f8e28cea.mockapi.io';
export const fetchTasks = () => async dispatch => {
  try {
    // Индикатор загрузки
    dispatch(fetchingInProgress());
    // HTTP-запрос
    const response = await axios.get('/contacts');
    // Обработка данных
    dispatch(fetchingSuccess(response.data));
  } catch (e) {
    // Обработка ошибки
    dispatch(fetchingError(e.message));
  }
};
