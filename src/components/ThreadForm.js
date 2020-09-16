import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ThreadForm(props) {
  const { handleSubmitForm, onLinkClick, buttonText, defaultThreadName } = props;
  const onSubmitForm = (event) => {
    event.preventDefault();
    handleSubmitForm(event);
  }

  return (
    <React.Fragment>
      <Form onSubmit={onSubmitForm} >
        <Form.Group controlId='threadName'>
          <Form.Label>Thread Title</Form.Label>
          <Form.Control type='text' required placeholder='Thread Title' defaultValue = {defaultThreadName} />
        </Form.Group>
        <Button variant='outline-success' type='submit'>{buttonText}</Button>
      </Form>
      <Button variant='outline-info' type='button' onClick={onLinkClick}>Back</Button>
    </React.Fragment>
  )
}

ThreadForm.propTypes = {
  handleSubmitForm: PropTypes.func,
  onLinkClick: PropTypes.func,
  buttonText: PropTypes.string,
  defaultThreadName: PropTypes.string
}

export default ThreadForm;