import React from 'react';
import {withRouter} from 'react-router';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const NavLink = ({match, location, to, children}) => {
  const classes = location.pathname === to ? 'active' : '';

  return (
    <li className={classes}>
      <Link to={to}>{children}</Link>
    </li>
  );
};

NavLink.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  to: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired
};

export default withRouter(NavLink)
