import React, { useCallback } from 'react';
import classnames from 'classnames';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import { IconButton } from 'components';
import { usePagination } from 'hooks';

import { PaginationItem } from './PaginationItem/PaginationItem';

import classes from './pagination.module.scss';

interface PaginationProps {
  page: number;
  totalPages: number;
  siblingCount?: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export const Pagination = ({
  page,
  onPageChange,
  totalPages,
  siblingCount,
  className,
}: PaginationProps) => {
  const paginationRange = usePagination({ page, totalPages, siblingCount });

  const onNext = useCallback(() => {
    onPageChange(page + 1);
  }, [onPageChange, page]);

  const onPrevious = useCallback(() => {
    onPageChange(page - 1);
  }, [onPageChange, page]);

  const handleOnPageItemClick = useCallback(
    (pageNumber: number) => {
      onPageChange(pageNumber);
    },
    [onPageChange]
  );

  return totalPages === 1 ? null : (
    <div className={classnames(classes.container, className)}>
      <IconButton
        disabled={page === 1}
        icon={faChevronLeft}
        onClick={onPrevious}
      />

      {paginationRange?.map((pageItem, index) => (
        <PaginationItem
          key={`${index}-${pageItem}`}
          selected={pageItem === page}
          pageItem={pageItem}
          onClick={handleOnPageItemClick}
        />
      ))}

      <IconButton
        disabled={page === totalPages}
        icon={faChevronRight}
        onClick={onNext}
      />
    </div>
  );
};
