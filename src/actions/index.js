import * as c from './ActionTypes';

export const addTopic = (newTopic) => {
  const { name, id } = newTopic;
  return ({
    type: c.ADD_TOPIC,
    name,
    id
  });
}

export const deleteTopic = (id) => {
  return ({
    type: c.DELETE_TOPIC,
    id
  });
}