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
      defaultName = {name} />
  )
}

EditTopic.propTypes = {
  topic: PropTypes.object
}

export default connect()(EditTopic);