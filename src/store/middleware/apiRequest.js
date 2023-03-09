import axios from 'axios';
import { API_URL } from '../../config/AppPath';
import * as actions from '../apiCall';

const apiRequest =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== actions.apiCallBegan.type) return next(action);

    const { url, method, data, onStart, onSuccess, onError } = action.payload;

    if (onStart) dispatch({ type: onStart });
    next(action);

    try {
      const response = await axios.request({
        baseURL: API_URL,
        url,
        method,
        data,
      });
      dispatch(actions.apiCallSuccess(response.data));
      if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
    } catch (error) {
      const { data } = error.response;
      dispatch(actions.apiCallFailed(data.message));
      if (onError) dispatch({ type: onError, payload: data.message });
    }
  };

export default apiRequest;
