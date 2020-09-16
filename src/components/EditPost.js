import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as a from './../actions/index';
import PostForm from './PostForm';

function EditPost(props) {
  const { dispatch, post } = props;
  const { title, body, date, score, id, threadId, topicId } = post;
  const handleEditPost = (event) => {
    const editPost = {
      title: event.target.postTitle.value,
      body: event.target.postBody.value,
      date,
      score,
      id,
      threadId,
      topicId
    }
    dispatch(a.editPost(editPost));
    dispatch(a.viewThread(threadId));
  }


  return (
    <PostForm
      handleSubmitForm = {handleEditPost}
      onLinkClick = {() => dispatch(a.viewThread(threadId))}
      buttonText = "Edit Post"
      postTitle = {title}
      postBody = {body} />
  );
}

EditPost.propTypes = {
  post: PropTypes.object
};

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps;
  const post = state['postsList'][id];
  return ({
    post
  });
};

export default connect(mapStateToProps)(EditPost);