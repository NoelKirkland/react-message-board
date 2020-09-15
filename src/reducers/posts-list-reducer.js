const post1 = {
  title: "This should be in the first politics post",
  body: "That's where it should be, for sure",
  date: new Date().toString(),
  score: 0,
  id: 'post1',
  threadId: 'thread1',
  topicId: 'topic1'
}


export default (state = {post1}, action) => {
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