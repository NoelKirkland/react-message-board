const defaultState = {
  page: 'index',
  topicId: null,
  threadId: null,
}

export default (state=defaultState, action) => {
  const { topicId, threadId} = action;
  switch (action.type) {
    case 'VIEW_INDEX':
      return {
        page: 'index',
        topicId: null,
        threadId: null
      }
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