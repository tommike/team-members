import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchForm = props => {
  const { changeCallback, searchTerm } = props;

  return (
    <form className="search">
      <div className="search__field">
        <FontAwesomeIcon icon="search" color="#888" />
        <input
          type="search"
          name="search-term"
          value={searchTerm}
          placeholder="Find by name"
          autoComplete="off"
          onChange={changeCallback}
          className="search__keyword"
        />
      </div>
    </form>
  );
};

SearchForm.propTypes = {
  searchTerm: PropTypes.string,
  changeCallback: PropTypes.func.isRequired,
};

export default SearchForm;
