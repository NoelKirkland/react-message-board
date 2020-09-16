import React from 'react';
import { connect } from 'react-redux';
import * as a from './../actions/index';
import TopicForm from './TopicForm';
import v1 from 'uuid';

function AddTopic(props) {
  const { dispatch } = props;
  const handleAddingNewTopic = (event) => {
    const newTopic = {
      name: event.target.name.value,
      id: v1()
    }
    dispatch(a.addTopic(newTopic));
    dispatch(a.viewIndex());
  }

  return (
    <TopicForm
      onSubmitForm = {handleAddingNewTopic}
      onLinkClick = {() => dispatch(a.viewIndex())} />
  )
}

export default connect()(AddTopic);