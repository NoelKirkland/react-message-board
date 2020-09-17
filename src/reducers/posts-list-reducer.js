import * as c from './../actions/ActionTypes';


export default (state = {}, action) => {
  const { title, body, date, score, id, threadId, topicId } = action;
  switch (action.type) {
    case c.ADD_POST:
      return Object.assign({}, state, {
        [id]: {
          title,
          body,
          date,
          score,
          id,
          threadId,
          topicId
        }
      });
    case c.DELETE_POST:
      const newState = {...state};
      delete newState[id];
      return newState;
    case c.VOTE:
      const postToEdit = state[id];
      let newPost;
      if (action.up) {
        newPost = { ...postToEdit, score: postToEdit.score + 1};
      } else {
        newPost = { ...postToEdit, score: postToEdit.score - 1};
      }
      return Object.assign({}, state, { [id]: newPost });
    default:
      return state;
  }
};