export default (state = {}, action) => {
  const { name, id, topicId } = action;
  switch (action.type) {
    case 'ADD_THREAD':
      return Object.assign({}, state, {
        [id]: {
          name: name,
          id: id,
          topicId: topicId
        }
      });
    case 'DELETE_THREAD':
      const newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
}