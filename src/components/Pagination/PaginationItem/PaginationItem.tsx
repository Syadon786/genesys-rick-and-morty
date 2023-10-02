import React, { useCallback } from 'react';
import classnames from 'classnames';

import classes from './paginationItem.module.scss';

interface PaginationItemProps {
  pageItem: number | '...';
  selected: boolean;
  onClick: (pageNumber: number) => void;
}

export const PaginationItem = ({
  pageItem,
  selected,
  onClick,
}: PaginationItemProps) => {
  const handleOnClick = useCallback(() => {
    if (typeof pageItem === 'number') {
      onClick(pageItem);
    }
  }, [onClick, pageItem]);

  return pageItem === '...' ? (
    <span className={classes.item}>...</span>
  ) : (
    <span
      className={classnames(classes.item, classes.pageItem, {
        [classes.selected]: selected,
      })}
      onClick={handleOnClick}
    >
      {pageItem}
    </span>
  );
};
