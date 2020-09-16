import * as c from './../actions/ActionTypes';

const thread1 = {
  name: 'This should be under Politics',
  topicId: 'topic1',
  id: 'thread1'
}

const thread2 = {
  name: 'This should also be under Politics',
  topicId: 'topic1',
  id: 'thread2'
}


export default (state = {thread1, thread2}, action) => {
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