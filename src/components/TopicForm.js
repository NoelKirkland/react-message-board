import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

function TopicForm(props) {
  const { onSubmitForm, onLinkClick, defaultName } = props;
  const handleSubmitForm = (event) => {
    event.preventDefault();
    onSubmitForm(event);
  }

  return (
    <React.Fragment>
      <Form onSubmit={ handleSubmitForm } >
        <Form.Group controlId = "name" >
          <Form.Label>Topic Name</Form.Label>
          <Form.Control type='text' placeholder='Topic Name' defaultValue = {defaultName} required />
        </Form.Group>
        <Button variant='outline-success' type='submit' >Add This Topic</Button>
      </Form>
      <Button variant='outline-info' type='button' onClick={()=>onLinkClick()}>Back To Index</Button>
    </React.Fragment>
  )
}

TopicForm.propTypes = {
  onSubmitForm: PropTypes.func,
  onLinkClick: PropTypes.func,
  defaultName: PropTypes.string
}

export default TopicForm;