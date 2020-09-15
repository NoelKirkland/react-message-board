import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class DisplayControl extends React.Component {

}

DisplayControl.propTypes = {
  topicsList: PropTypes.object,
  threadsList: PropTypes.object,
  postsList: PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    topicsList: state['topicsList'],
    threadsList: state['threadsList'],
    postsList: state['postsList']
  }
}

DisplayControl = connect(mapStateToProps)(DisplayControl);

export default DisplayControl;