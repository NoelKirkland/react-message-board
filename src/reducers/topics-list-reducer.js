import * as c from './../actions/ActionTypes';

const topic1 = {
  name: 'Politics',
  id: 'topic1'
}
const topic2 = {
  name: 'Religion',
  id: 'topic2'
}


export default (state = {topic1, topic2}, action) => {
  const {name, threads, id} = action;
  switch (action.type) {
    case c.ADD_TOPIC:
      return Object.assign({}, state, {
        [id]: {
          name: name,
          threads: threads,
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