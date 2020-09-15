import displayReducer from './../reducers/display-reducer.js';

describe('displayReducer', ()=>{
  const defaultState = {
    page: 'index',
    topicId: null,
    threadId: null
  }

  test("should do nothing if not told to do anything", ()=>{
    expect(displayReducer(defaultState, {type: null})).toEqual(defaultState);
  });

  test('should be able to view all threads of a specific topic', ()=>{
    const action = {
      type: 'VIEW_TOPIC',
      topicId: 1
    };
    expect(displayReducer(defaultState, action)).toEqual({
      page: 'index',
      topicId: 1,
      threadId: null
    });
  });

  test('should be able to view all the posts of a specific thread', ()=>{
    const action = {
      type: 'VIEW_THREAD',
      topicId: 1,
      threadId: 1
    };
    expect(displayReducer(defaultState, action)).toEqual({
      page: 'index',
      topicId: 1,
      threadId: 1
    });
  });
});