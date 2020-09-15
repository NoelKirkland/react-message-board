import threadsListReducer from './../reducers/threads-list-reducer';

describe('threadsListReducer', ()=>{
  let action;
  const topicState = {
    1: {
      name: 'Politics',
      threads: {},
      id: 1
    }
  };

  test('should successful do nothing if not told to do anything', ()=>{
    action = {type: null};
    expect(threadsListReducer({}, action)).toEqual({});
    expect(threadsListReducer(topicState, action)).toEqual(topicState);
  });
});