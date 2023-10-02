import React, { useEffect, useState, useCallback } from 'react';

import { Character } from 'models';
import { CharactersTable, Page, SearchInput } from 'components';
import { characterService } from 'services';

import classes from './homePage.module.scss';

const HomePage = () => {
  const [items, setItems] = useState<Character[]>();
  const [totalPages, setTotalPages] = useState(0);
  const [actualPage, setActualPage] = useState(1);
  const [filter, setFilter] = useState('');

  const handleFilterChange = useCallback((value: string) => {
    setFilter(value);
    setActualPage(1);
  }, []);

  const handleOnPageChange = useCallback((page: number) => {
    setActualPage(page);
  }, []);

  useEffect(() => {
    const getCharacters = async () => {
      const { info, results } =
        (await characterService.getCharacters({ page: actualPage, filter })) ??
        {};
      if (info) {
        setTotalPages(info.pages);
      }
      setItems(results);
    };
    getCharacters();
  }, [filter, actualPage]);

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
