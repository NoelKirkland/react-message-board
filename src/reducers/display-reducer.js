const defaultState = {
  page: 'index',
  topicId: null,
  threadId: null,
}

export default (state=defaultState, action) => {
  const {page, topicId, threadId} = action;
  switch (action.type) {
    case 'VIEW_TOPIC': 
      return {
        page: 'index',
        topicId,
        threadId: null
      }
    case 'VIEW_THREAD':
      return {
        page: 'index',
        topicId,
        threadId
      }
    default:
      return state;
  }
};