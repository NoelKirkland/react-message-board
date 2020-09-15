import topicsListReducer from './../reducers/topics-list-reducer';

describe('topicsListReducer', ()=>{
  test('should return the default state if no action is passed to the reducer', ()=>{
    expect(topicsListReducer({}, {action: null})).toEqual({});
  });

  test('should add a topic to the topics list', ()=>{
    const action = {
      type: "ADD_TOPIC",
      name: 'Politics',
      threads: {},
      id: 1
    };

    expect(topicsListReducer({}, action)).toEqual({
      1: {
        name: 'Politics',
        threads: {},
        id: 1
      }
    });
  });
});