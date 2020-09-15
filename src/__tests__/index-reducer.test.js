import rootReducer from './../reducers/index';
import topicsListReducer from './../reducers/topics-list-reducer';
import threadsListReducer from './../reducers/threads-list-reducer';
import postsListReducer from './../reducers/posts-list-reducer';
import { createStore } from 'redux';

let store = createStore(rootReducer);

describe('rootReducer', ()=>{
  const nullAction = {type: null}
  test('should not alter state if action type not recognized', ()=>{
    expect(rootReducer({}, {type: null})).toEqual({
      topicsList: {},
      threadsList: {},
      postsList: {}
    });
  });

  test('check that initial state of topicsList matches rootReducer', ()=>{
    expect(store.getState().topicsList).toEqual(topicsListReducer(undefined, nullAction));
  });

  test('check that initial state of threadsList matches rootReducer', () => {
    expect(store.getState().threadsList).toEqual(threadsListReducer(undefined, nullAction));
  });

  test('check that initial state of postsList matches rootReducer', () => {
    expect(store.getState().postsList).toEqual(postsListReducer(undefined, nullAction));
  });

  test('check that adding a topic via dispatch matches the expected action', ()=>{
    const action = {
      type: 'ADD_TOPIC',
      name: 'POLITICS',
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().topicsList).toEqual(topicsListReducer({}, action));
  });
});