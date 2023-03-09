import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import _ from 'lodash';

import { CONST_ONEU } from '../../config/Basic';

const Pagination = ({
  itemsCount,
  pageSize,
  currentPage,
  onPageChange,
  onPrevClick,
  onNextClick,
}) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === CONST_ONEU) return null;
  const pages = _.range(CONST_ONEU, pagesCount + CONST_ONEU);

  return (
    <nav>
      <ul className="pagination">
        <li
          id="prev"
          className={
            currentPage <= CONST_ONEU ? 'page-item disabled' : 'page-item'
          }
          onClick={onPrevClick}
        >
          <Link className="page-link" to="#">
            <span className="fa fa-angle-left"></span>
          </Link>
        </li>
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? 'page-item active' : 'page-item'}
            onClick={() => onPageChange(page)}
          >
            <Link to={'#'} className="page-link">
              {page}
            </Link>
          </li>
        ))}
        <li
          className={
            currentPage >= pagesCount ? 'page-item disabled' : 'page-item'
          }
          onClick={onNextClick}
        >
          <Link id="next" className="page-link" to="#">
            <span className="fa fa-angle-right"></span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
