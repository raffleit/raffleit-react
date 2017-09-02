import React from 'react';
import {withRouter} from 'react-router';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class NavLink extends React.Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        to: PropTypes.string.isRequired
    };

    render() {
        const {location, to, children} = this.props;
        const classes = location.pathname === to ? 'active' : '';

        return (
            <li className={classes}>
                <Link to={to}>{children}</Link>
            </li>
        )
    }
}

export default withRouter(NavLink)