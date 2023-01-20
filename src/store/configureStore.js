import { configureStore } from '@reduxjs/toolkit';
import logger from './middleware/logger';
import apiRequest from './middleware/apiRequest';
import reducer from './reducer';

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        logger({ destination: 'console' }),
        apiRequest
      ),
  });
}
