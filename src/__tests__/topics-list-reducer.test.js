import topicsListReducer from './../reducers/topics-list-reducer';

describe('topicsListReducer', ()=>{
  test('should return the default state if no action is passed to the reducer', ()=>{
    expect(topicsListReducer({}, {action: null})).toEqual({});
  })
})