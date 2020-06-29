import React from 'react';
import { Highlight } from 'react-instantsearch-dom';
import PropTypes from 'prop-types';

const Hit = props => {
  return (
    <div>
      <div className="hit-name">
        <Highlight attribute="name" hit={props.hit} />
      </div>
      <div className="hit-description">
        <Highlight attribute="description" hit={props.hit} />
      </div>
    </div>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default Hit;