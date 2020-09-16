import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as a from './../actions/index';
import TopicForm from './TopicForm';

function EditTopic(props){
  const { dispatch, topic } = props;
  const { name, id } = topic;
  const handleEditingTopic = (event) => {
    const editTopic = {
      name: event.target.name.value,
      id: id
    }
    dispatch(a.addTopic(editTopic));
    dispatch(a.viewIndex());
  }

  return(
    <TopicForm 
      onSubmitForm = {handleEditingTopic}
      onLinkClick = {() => dispatch(a.viewIndex())}
      buttonText = "Edit This Topic"
      defaultName = {name} />
  )
}

EditTopic.propTypes = {
  topic: PropTypes.object
}

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps;
  const topic = state['topicsList'][id];
  return ({
    topic
  })
}

export default connect(mapStateToProps)(EditTopic);