import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions/index';

function TopicIndex(props) {
  return (
    <React.Fragment>
      {Object.values(props.topicsList).map((topics) => {
        return (
          <h2 onClick={() => props.dispatch(a.viewTopic(topics.id))} key={topics.id}>{topics.name}</h2>
        )
      })}
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