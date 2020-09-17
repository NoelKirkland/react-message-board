import * as a from './../actions/index';
import * as c from './../actions/ActionTypes';

describe('actions', ()=>{
  it('should create an addTopic action', ()=>{
    const newTopic = {name: 'Politics', id: 1};
    expect(a.addTopic(newTopic)).toEqual({
      type: c.ADD_TOPIC,
      name: 'Politics',
      id: 1
    });
  });

  it('deleteTopic should create DELETE_TOPIC action', ()=>{
    expect(a.deleteTopic(1)).toEqual({
      type: c.DELETE_TOPIC,
      id: 1
    });
  });

  it('should create addThread action', ()=>{
    const newThread = {name: 'testThread', topicId: 1, id: 1};
    expect(a.addThread(newThread)).toEqual({
      type: c.ADD_THREAD,
      name: 'testThread',
      topicId: 1,
      id: 1
    });
  });

  it('should create deleteThread action', ()=>{
    expect(a.deleteThread(1)).toEqual({
      type: c.DELETE_THREAD,
      id: 1
    });
  });

  it('should create addPost action', ()=>{
    const time = new Date().toString();
    const newPost = {
      title: "This should be in the first politics post",
      body: "That's where it should be, for sure",
      date: time,
      score: 0,
      id: 'post1',
      threadId: 'thread1',
      topicId: 'topic1'
    }
    expect(a.addPost(newPost)).toEqual({
      type: c.ADD_POST,
      title: "This should be in the first politics post",
      body: "That's where it should be, for sure",
      date: time,
      score: 0,
      id: 'post1',
      threadId: 'thread1',
      topicId: 'topic1'
    });
  });

  it('should create deletePost action', ()=>{
    expect(a.deletePost(1)).toEqual({
      type: c.DELETE_POST,
      id: 1
    });
  });

  it('viewIndex should create VIEW_INDEX action', ()=>{
    expect(a.viewIndex()).toEqual({
      type: c.VIEW_INDEX,
      topicId: null,
      threadId: null
    });
  });

  it('viewTopic should create a VIEW_TOPIC action', ()=>{
    expect(a.viewTopic(1)).toEqual({
      type: c.VIEW_TOPIC,
      topicId: 1,
      threadId: null
    });
  });

  it('viewThread should create a VIEW_THREAD action', ()=>{
    expect(a.viewThread(1,1)).toEqual({
      type: c.VIEW_THREAD,
      topicId: 1,
      threadId: 1
    });
  });

  it('vote should createa a VOTE action', ()=>{
    expect(a.vote(true, 1)).toEqual({
      type: c.VOTE,
      up: true,
      id: 1
    });
  });
});