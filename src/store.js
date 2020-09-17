import rootReducer from './reducers/index';
import { createStore } from 'redux';
import Moment from 'moment';

const topic1 = {
  name: 'Politics',
  id: 'topic1'
}
const topic2 = {
  name: 'Religion',
  id: 'topic2'
}
const thread1 = {
  name: 'This should be under Politics',
  topicId: 'topic1',
  id: 'thread1'
}
const thread2 = {
  name: 'This should also be under Politics',
  topicId: 'topic1',
  id: 'thread2'
}
const post1 = {
  title: "This should be in the first politics post",
  body: "That's where it should be, for sure",
  date: new Moment(),
  score: 0,
  id: 'post1',
  threadId: 'thread1',
  topicId: 'topic1'
}

const initialState = {
  topicsList: {topic1, topic2},
  threadsList: {thread1, thread2},
  postsList: {post1},
  display: {page: 'index', threadId: null, topicId: null}
}
export default createStore(rootReducer, initialState);