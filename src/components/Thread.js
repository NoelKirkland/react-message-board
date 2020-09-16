import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
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
            <p>{post.date}</p>
            <p>{post.score}</p>
          </div>
        )
      })}
      <Button variant='outline-success' onClick={()=>{dispatch(a.viewIndex())}}>Back To All Topics</Button>
      <Button variant='outline-success' onClick={()=>{dispatch(a.viewTopic(thread.topicId))}}>Back To Topic</Button>
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