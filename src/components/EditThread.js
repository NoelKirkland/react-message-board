import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ThreadForm from './ThreadForm';
import * as a from './../actions/index';

function EditThread(props) {
  const { dispatch, thread } = props;
  const { name, id, topicId } = thread;
  const handleEditingThread = (event) => {
    const editThread = {
      name: event.target.threadName.value,
      id,
      topicId
    }
    dispatch(a.addThread(editThread));
    dispatch(a.viewThread(topicId, id));
  }

  return (
    <ThreadForm
      handleSubmitForm = {handleEditingThread}
      onLinkClick = {() => dispatch(a.viewThread(topicId, id))}
      buttonText = "Edit this thread"
      defaultThreadName = {name} />
  )
}

EditThread.propTypes = {
  thread: PropTypes.object
}

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps;
  const thread = state['threadsList'][id];
  return ({
    thread
  });
};

export default connect(mapStateToProps)(EditThread);