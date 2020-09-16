import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions/index';
import Button from 'react-bootstrap/Button';

function TopicIndex(props) {
  const { topicsList, dispatch } = props;
  return (
    <React.Fragment>
      {Object.values(topicsList).map((topics) => {
        return (
          <h2 onClick={() => dispatch(a.viewTopic(topics.id))} key={topics.id}>{topics.name}</h2>
        )
      })}
      <Button variant='outline-danger' type='button' onClick={() => dispatch(a.createTopic())}>Create Topic</Button>
    </React.Fragment>
  )
}

TopicIndex.propTypes = {
  topicsList: PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    topicsList: state['topicsList']
  }
}

export default connect(mapStateToProps)(TopicIndex);