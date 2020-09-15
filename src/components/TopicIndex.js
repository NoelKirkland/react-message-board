import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function TopicIndex(props) {
  return (
    <React.Fragment>
      {Object.values(props.topicsList).map((topics) => {
        return (
          <h2 onClick={() => props.dispatch({type: "VIEW_TOPIC", topicId: topics.id})} key={topics.id}>{topics.name}</h2>
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