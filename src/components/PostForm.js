import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function PostForm(props) {
  const { handleSubmitForm, onLinkClick, buttonText, postTitle, postBody } = props;
  const onFormSubmit = (event) => {
    event.preventDefault();
    handleSubmitForm(event);
  }

  return (
    <React.Fragment>
      <Form onSubmit={onFormSubmit} >
        <Form.Group controlId = 'postTitle'>
          <Form.Label>Thread Title</Form.Label>
          <Form.Control type='text' placeholder='Title' defaultValue={postTitle} required />
        </Form.Group>
        <Form.Group controlId = 'postBody'>
          <Form.Label>Post</Form.Label>
          <Form.Control as='textarea' rows='5' defaultValue={postBody} required />
        </Form.Group>
        <Button variant='outline-success' type='submit'>{buttonText}</Button>
      </Form>
      <Button className="mt-2" variant='outline-secondary' type='button' onClick={onLinkClick}>Back</Button>
    </React.Fragment>
  )
}

PostForm.propTypes = {
  handleSubmitForm: PropTypes.func,
  onLinkClick: PropTypes.func,
  buttonText: PropTypes.string,
  postString: PropTypes.string,
  postBody: PropTypes.string,
}

export default PostForm;