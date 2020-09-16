import * as c from './../actions/ActionTypes';


export default (state = {}, action) => {
  const {name, id} = action;
  switch (action.type) {
    case c.ADD_TOPIC:
      return Object.assign({}, state, {
        [id]: {
          name: name,
          id: id
        }
      });
    case c.DELETE_TOPIC:
      const newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
};