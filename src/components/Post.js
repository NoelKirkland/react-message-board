import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function Post(props) {
  const { title, body, date, score } = props.postObject;
  const { onUpVote, onDownVote, onClickEdit } = props;
  return (
    <React.Fragment>
      <h5>{title}</h5>
      <p>{body}</p>
      <p>Posted on: {date}</p>
      <p>Score: {score}</p>
      <ButtonGroup size='sm'>
        <Button variant='outline-success' onClick={onUpVote}>Upvote Post</Button>
        <Button variant='outline-danger' onClick={onDownVote}>Downvote Post</Button>
        <Button variant='outline-primary' onClick={onClickEdit}>Edit Post</Button>
      </ButtonGroup>
    </React.Fragment>
  )
}

Post.propTypes = {
  postObject: PropTypes.object,
  onUpVote: PropTypes.func,
  onDownVote: PropTypes.func,
  onClickEdit: PropTypes.func
}

export default Post;