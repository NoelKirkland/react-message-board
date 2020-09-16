import * as c from './../actions/ActionTypes';

const defaultState = {
  page: 'index',
  topicId: null,
  threadId: null,
}

export default (state=defaultState, action) => {
  const { topicId, threadId} = action;
  switch (action.type) {
    case c.VIEW_INDEX:
      return {
        page: 'index',
        topicId: null,
        threadId: null
      }
    case c.VIEW_TOPIC: 
      return {
        page: 'index',
        topicId,
        threadId: null
      }
    case c.VIEW_THREAD:
      return {
        page: 'index',
        topicId,
        threadId
      }
    case c.CREATE_TOPIC:
      return {
        page: 'create-topic',
        topicId: null,
        threadId: null
      }
    case c.EDIT_TOPIC:
      return {
        page: 'edit-topic',
        topicId,
        threadId: null
      }
    case c.CREATE_THREAD:
      return {
        page: 'create-thread',
        topicId,
        threadId: null
      }
    case c.EDIT_THREAD:
      return {
        page: 'edit-thread',
        topicId: null,
        threadId
      }
    default:
      return state;
  }
};