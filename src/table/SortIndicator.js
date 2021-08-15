import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import SortOrder from './SortOrder';

/**
 * default SortIndicator for BaseTable
 */
const SortIndicator = ({ sortOrder, className, style }) => {
  const cls = clsx('BaseTable__sort-indicator', className, {
    'BaseTable__sort-indicator--descending': sortOrder === SortOrder.DESC,
  });
  return (
    <div
      className={cls}
      style={{
        userSelect: 'none',
        width: '16px',
        height: '16px',
        lineHeight: '16px',
        textAlign: 'center',
        ...style,
      }}
    >
      {sortOrder === SortOrder.DESC ? '\u2193' : '\u2191'}
    </div>
  );
};

SortIndicator.propTypes = {
  sortOrder: PropTypes.oneOf([SortOrder.ASC, SortOrder.DESC]),
  className: PropTypes.string,
  style: PropTypes.object,
};

export default SortIndicator;
