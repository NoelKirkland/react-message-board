import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import * as a from './../actions/index';

function Topic(props){
  const { topic, threadsList, dispatch } = props;
  const handleDeleteTopic = () => {
    dispatch(a.deleteTopic(topic.id));
    dispatch(a.viewIndex());
  }
  return(
    <React.Fragment>
      <h2>{topic.name}</h2>
      {threadsList.map((thread) => {
        return (
          <h5 key={thread.id} onClick={()=> dispatch(a.viewThread(topic.id, thread.id))}>{thread.name}</h5>
        )
      })}
      <Button variant='outline-primary' type='button' onClick={() => dispatch(a.createThread(topic.id))}>Add Thread to Topic</Button>
      <Button className = "mb-3 mt-3" variant='outline-warning' type='button' onClick={()=>dispatch(a.editTopic(topic.id))}>Edit Topic</Button>
      <Button className = "ml-2 mr-2" variant='outline-danger' type='button' onClick={handleDeleteTopic}>Delete Topic</Button>
      <Button variant="outline-success" onClick={()=> dispatch(a.viewIndex())}>Back to All Topics</Button>
    </React.Fragment>
  )
}

Topic.propTypes = {
  id: PropTypes.string,
  topic: PropTypes.object,
  threadsList: PropTypes.array
}

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps;
  const topic = state['topicsList'][id];
  const threadsList = Object.values(state['threadsList']).filter(thread => thread.topicId === id);
  return {
    topic,
    threadsList
  }
}

export default connect(mapStateToProps)(Topic);