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
});