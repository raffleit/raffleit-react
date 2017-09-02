import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {resetAll} from '../actions/resetActions';

class Reset extends React.Component {
    render() {
        const {reset} = this.props;

        return (
            <div className="reset">
                <Link to={"/Participants"} onClick={reset}>Reset</Link>
            </div>
        )
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    reset: () => dispatch(resetAll())
});

export default connect(mapStateToProps, mapDispatchToProps)(Reset)