// import React from 'react';
import './SearchBar.scss';

export function SearchBar() {
  return (
    <form role="search" className="searchInputWrapper">
      <img
        loading="lazy"
        src="search.png"
        className="searchIcon"
        alt=""
      />
      <label htmlFor="searchInput" className={['visually-hidden']}>
        Search for anything
      </label>
      <input
        type="search"
        id="searchInput"
        className="searchInput"
        placeholder="Search for anything..."
        aria-label="Search for anything"
      />
    </form>
  );
}