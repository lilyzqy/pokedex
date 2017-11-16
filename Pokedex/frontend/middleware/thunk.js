const thunkMiddleware = ({dispatch, gerState}) => next => action => {
  if(typeof action === 'function'){
    return action(dispatch);
  }
  return next(action);
};

export default thunkMiddleware;
