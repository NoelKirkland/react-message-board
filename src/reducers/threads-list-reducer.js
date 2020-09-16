import * as c from './../actions/ActionTypes';


export default (state = {}, action) => {
  const { name, id, topicId } = action;
  switch (action.type) {
    case c.ADD_THREAD:
      return Object.assign({}, state, {
        [id]: {
          name: name,
          id: id,
          topicId: topicId
        }
      });
    case c.DELETE_THREAD:
      const newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
}