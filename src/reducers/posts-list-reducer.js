export default (state = {}, action) => {
  const { title, body, date, score, id, threadId, topicId } = action;
  switch (action.type) {
    case 'ADD_POST':
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
    case 'DELETE_POST':
      const newState = {...state};
      delete newState[id];
      return newState;
    default:
      return state;
  }
};