import threadsListReducer from './../reducers/threads-list-reducer';

describe('threadsListReducer', ()=>{
  let action;
  const testState = {
    1: {
      name: 'ADRENOCHROME!',
      id: 1,
      topicId: 1
    },
    2: {
      name: 'Pastafarianism: A seekers guide',
      id: 2,
      topicId: 2
    }
  }

  test('should successful do nothing if not told to do anything', ()=>{
    action = {type: null};
    expect(threadsListReducer({}, action)).toEqual({});
  });

  test('Should successfully add a thread to a topic', () => {
    action = {
      type: 'ADD_THREAD',
      name: 'AdrenoChrome!!!',
      id: 1,
      topicId: 1
    };
    expect(threadsListReducer({}, action)).toEqual({
      1: {
        name: 'AdrenoChrome!!!',
        id: 1,
        topicId: 1
      }
    });
  });

  test('should successfully delete a thread from a topic', () => {
    action = {
      type: 'DELETE_THREAD',
      id: 1
    }
    expect(threadsListReducer(testState, action)).toEqual({
      2: {
        name: 'Pastafarianism: A seekers guide',
        id: 2,
        topicId: 2
      }
    });
  });
});