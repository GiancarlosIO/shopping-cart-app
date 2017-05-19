import React from 'react';
import { Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CustomLink = ({label, to, activeOnlyWhenExact, childrenComponent}) => (
  <Route
    to={to}
    path={to}
    exact={activeOnlyWhenExact}
    children={ (props) =>
      {
        return (
          <li className={ props.match ? 'active' : '' }>
             <Link to={to}>
              {
                !childrenComponent ?
                label :
                childrenComponent()
              }
            </Link>
          </li>
        )
      }
    }
  />
);

CustomLink.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string,
  activeOnlyWhenExact: PropTypes.bool,
  childrenComponent: PropTypes.func
}

export default CustomLink;