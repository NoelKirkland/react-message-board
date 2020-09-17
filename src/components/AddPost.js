import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import * as a from './../actions/index';
import v2 from 'uuid';

function AddPost(props) {
  const { dispatch, thread } = props;
  const currentTime = new Date();
  const dateDictionary = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const date = currentTime.getHours() + ":" + currentTime.getMinutes() + ":" + currentTime.getSeconds() + ", " + dateDictionary[currentTime.getMonth()] + "-" + currentTime.getDate() + "-" + currentTime.getFullYear();
  const handleNewPost = (event) => {
    const newPost = {
      title: event.target.postTitle.value,
      body: event.target.postBody.value,
      date,
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