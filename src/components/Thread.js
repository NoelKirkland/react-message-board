import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import * as a from './../actions/index';
import Post from './Post';

function Thread(props){
  const { thread, postsList, dispatch } = props;
  const [scoreSort, setScoreSort] = useState(false);

  if (scoreSort) {
    postsList.sort((post1, post2) => post2.score - post1.score);
  } else {
    postsList.sort((post1, post2) => post1.date - post2.date)
  }

  const handleScoreSort = () => setScoreSort(!scoreSort);
  
  return (
    <React.Fragment>
      <h2>{thread.name}</h2>
      <Row>
        <Col md={2}>
          <ButtonGroup className="mt-3" vertical>
            <Button variant='outline-secondary' onClick={handleScoreSort}>Toggle Sort</Button>
            <Button variant="outline-warning" onClick={()=>dispatch(a.createPost(thread.id))}>Create Post</Button>
            <Button variant='outline-info' onClick={()=>dispatch(a.editThread(thread.id))}>Edit This Thread</Button>
            <Button variant='outline-dark' onClick={()=>dispatch(a.deleteThread(thread.id))}>Delete This Thread</Button>
            <Button variant='outline-success' onClick={()=>{dispatch(a.viewIndex())}}>Back To All Topics</Button>
            <Button variant='outline-info' onClick={()=>{dispatch(a.viewTopic(thread.topicId))}}>Back To Topic</Button>
          </ButtonGroup>
        </Col>
        <Col md={10}>
          {postsList.map((post) => {
            return (
              <Post
                key={post.id}
                postObject={post}
                onUpVote={()=>dispatch(a.vote(true, post.id))}
                onDownVote={()=>dispatch(a.vote(false, post.id))}
                onClickEdit={()=>dispatch(a.editPost(post.id))} />
            )
          })}
        </Col>
      </Row>
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