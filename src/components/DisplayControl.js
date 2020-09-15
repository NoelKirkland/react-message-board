import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import store from './../store';
import TopicIndex from './TopicIndex';
import Topic from './Topic';
import Thread from './Thread';

function DisplayControl(props) 
{
  store.subscribe(() => console.log(store.getState()));
  let pageToDisplay;
  const { page, topicId, threadId } = props.display;
  if (page === 'index' && !topicId && !threadId) {
    pageToDisplay = <TopicIndex />;
  } else if (page === 'index' && topicId && !threadId) {
    pageToDisplay = <Topic id = {topicId} />;
  } else if (page === 'index' && topicId && threadId) {
    pageToDisplay = <Thread id = {threadId} />
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