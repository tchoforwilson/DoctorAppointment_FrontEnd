import { configureStore } from '@reduxjs/toolkit';
import logger from './middleware/logger';
import apiRequest from './middleware/apiRequest';
import toast from './middleware/toastify';
import reducer from './reducer';

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      logger({ destination: 'console' }),
      toast,
      apiRequest
    ),
});
