const toast = (state) => (next) => (action) => {
  if (action.type === 'api/callFailed')
    console.log('Toastify:', action.payload);
  else next(action);
};

export default toast;
