import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TopicIndex from './TopicIndex';
import Topic from './Topic';

function DisplayControl(props) {
  let pageToDisplay;
  const { page, topicId, threadId } = props.display;
  if (page === 'index' && !topicId && !threadId) {
    pageToDisplay = <TopicIndex />;
  } else if (page === 'index' && topicId && !threadId) {
    pageToDisplay = <Topic id = {topicId} />;
  }
  return (
    <React.Fragment>
      {pageToDisplay}
    </React.Fragment>
  )
}

DisplayControl.propTypes = {
  display: PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    display: state['display']
  }
}

export default connect(mapStateToProps)(DisplayControl);