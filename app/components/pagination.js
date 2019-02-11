import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {
    this.bindEventHandlers();
  }

  componentDidUpdate() {
    this.bindEventHandlers();
  }

  componentWillUnmount() {
    const allLinks = document.querySelectorAll('.pagination a');
    allLinks.forEach(button => button.removeEventListener('click', this.clickHandler));
  }

  bindEventHandlers() {
    const allLinks = document.querySelectorAll('.pagination a');
    allLinks.forEach(button => button.addEventListener('click', this.clickHandler));
  }

  clickHandler(event) {
    event.preventDefault();
    const { changeCallback } = this.props;
    changeCallback(parseInt(event.target.getAttribute('data-page-index')));
  }

  render() {
    const { nrOfItems, resultsPerPage, currentPage } = this.props;
    const nrOfPages = Math.ceil(nrOfItems / resultsPerPage);
    const range = [...Array(nrOfPages).keys()];

    if (range.length === 1) return null;

    return (
      <>
        <ul className="pagination">
          {range.map((item, index) => (
            <li
              key={index}
              data-page-index={index}
              className={`pagination__item ${
                currentPage === index ? 'pagination__item--active' : ''
              }`}
            >
              <a href="#" data-page-index={index}>
                {index + 1}
              </a>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

Pagination.propTypes = {
  currentPage: PropTypes.number,
  nrOfItems: PropTypes.array,
  changeCallback: PropTypes.func,
  resultsPerPage: PropTypes.number,
};

export default Pagination;
