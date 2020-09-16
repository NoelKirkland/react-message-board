import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as a from './../actions/index';
import v1 from 'uuid';
import ThreadForm from './ThreadForm';

function AddThread(props) {
  const { dispatch, topicId } = props;
  const handleAddNewThread = (event) => {
    const newThread = {
      name: event.target.threadName.value,
      id: v1(),
      topicId: topicId
    }
    dispatch(a.addThread(newThread));
    dispatch(a.viewThread(topicId, newThread.id));
  }

  return(
    <ThreadForm
      handleSubmitForm = {handleAddNewThread}
      onLinkClick = {() => dispatch(a.viewTopic(topicId))}
      buttonText = "Add New Thread" />
  )
}

AddThread.propTypes = {
  topicId: PropTypes.string 
}

export default connect()(AddThread);