import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {resetAll} from '../actions/resetActions';

const Reset = ({reset}) => (
  <div className="reset">
    <Link to={"/Participants"} onClick={reset}>Reset</Link>
  </div>
);

const mapDispatchToProps = dispatch => ({
  reset: () => dispatch(resetAll())
});

export default connect(null, mapDispatchToProps)(Reset)
