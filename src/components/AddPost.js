import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import * as a from './../actions/index';
import v2 from 'uuid';
import Moment from 'moment';

function AddPost(props) {
  const { dispatch, thread } = props;
  const handleNewPost = (event) => {
    const newPost = {
      title: event.target.postTitle.value,
      body: event.target.postBody.value,
      date: new Moment(),
      score: 0,
      id: v2(),
      threadId: thread.id,
      topicId: thread.topicId
    }
    dispatch(a.addPost(newPost));
    dispatch(a.viewThread(newPost.topicId, newPost.threadId));
  }
  return (
    <PostForm
      handleSubmitForm = {handleNewPost}
      onLinkClick = {()=> dispatch(a.viewThread(thread.id))}
      buttonText = "Add New Post" />
  )
}

AddPost.propTypes = {
  thread: PropTypes.object
}

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps;
  const thread = state['threadsList'][id];
  return {
    thread
  }
}


export default connect(mapStateToProps)(AddPost);