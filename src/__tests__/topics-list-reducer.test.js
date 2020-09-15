import topicsListReducer from './../reducers/topics-list-reducer';

describe('topicsListReducer', ()=>{
  test('should return the default state if no action is passed to the reducer', ()=>{
    expect(topicsListReducer({}, {action: null})).toEqual({});
  });

  test('should add a topic to the topics list', ()=>{
    const action = {
      type: "ADD_TOPIC",
      name: 'Politics',
      id: 1
    };

    expect(topicsListReducer({}, action)).toEqual({
      1: {
        name: 'Politics',
        id: 1
      }
    });
  });

  test('should be able to delete a topic', ()=>{
    const action = {
      type: "ADD_TOPIC",
      name: 'Politics',
      id: 1
    };

    const testState = topicsListReducer({}, action);
    const deleteAction = {
      type: 'DELETE_TOPIC',
      id: 1
    }

    expect(topicsListReducer(testState, deleteAction)).toEqual({});
  })
});