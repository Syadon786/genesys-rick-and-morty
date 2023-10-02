import React, { useState, useCallback } from 'react';

import { CharactersTable, Page, SearchInput } from 'components';
import { useCharacters } from 'queries';

import classes from './homePage.module.scss';

const HomePage = () => {
  const [actualPage, setActualPage] = useState(1);
  const [filter, setFilter] = useState('');

  const { items, totalPages } = useCharacters(actualPage, filter);

  const handleFilterChange = useCallback((value: string) => {
    setFilter(value);
    setActualPage(1);
  }, []);

  const handleOnPageChange = useCallback((page: number) => {
    setActualPage(page);
  }, []);

  return (
    <Page title="Rick and Morty Characters">
      <div className={classes.inputContainer}>
        <SearchInput
          placeholder="Search by name"
          initialValue={filter}
          onChange={handleFilterChange}
        />
      </div>
      {items && items?.length !== 0 ? (
        <CharactersTable
          page={actualPage}
          totalPages={totalPages}
          onPageChange={handleOnPageChange}
          items={items}
        />
      ) : (
        <div className={classes.noResults}>No results found</div>
      )}
    </Page>
  );
};

export default HomePage;
