import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import * as a from './../actions/index';

function Thread(props){
  const { thread, postsList, dispatch } = props;
  return (
    <React.Fragment>
      <h2>{thread.name}</h2>
      {postsList.map((post) => {
        return (
          <div key={post.id}>
            <h5>{post.title}</h5>
            <p>{post.body}</p>
            <p>Posted on: {post.date}</p>
            <p>Score: {post.score}</p>
            <ButtonGroup size='sm'>
              <Button variant='outline-success' onClick={()=>dispatch(a.vote(true, post.id))}>Upvote Post</Button>
              <Button variant='outline-danger' onClick={()=>dispatch(a.vote(false, post.id))}>Downvote Post</Button>
              <Button variant='outline-primary' onClick={()=>dispatch(a.editPost(post.id))}>Edit Post</Button>
            </ButtonGroup>
          </div>
        )
      })}
      <ButtonGroup className="mt-3" vertical size='lg'>
        <Button variant="outline-warning" onClick={()=>dispatch(a.createPost(thread.id))}>Create Post</Button>
        <Button variant='outline-info' onClick={()=>dispatch(a.editThread(thread.id))}>Edit This Thread</Button>
        <Button variant='outline-dark' onClick={()=>dispatch(a.deleteThread(thread.id))}>Delete This Thread</Button>
        <Button variant='outline-success' onClick={()=>{dispatch(a.viewIndex())}}>Back To All Topics</Button>
        <Button variant='outline-info' onClick={()=>{dispatch(a.viewTopic(thread.topicId))}}>Back To Topic</Button>
      </ButtonGroup>
    </React.Fragment>
  )
}

Thread.propTypes = {
  id: PropTypes.string,
  thread: PropTypes.object,
  postsList: PropTypes.array
}

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps;
  const thread = state['threadsList'][id];
  const postsList = Object.values(state['postsList']).filter(post => post.threadId === id);
  return {
    thread,
    postsList
  }
}

export default connect(mapStateToProps)(Thread);