export default (state = {}, action) => {
  const {name, threads, id} = action;
  switch (action.type) {
    case 'ADD_TOPIC':
      return Object.assign({}, state, {
        [id]: {
          name: name,
          threads: threads,
          id: id
        }
      });
      default:
        return state;
  }
};