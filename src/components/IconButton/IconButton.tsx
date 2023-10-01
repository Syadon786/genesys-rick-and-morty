import React, { useCallback } from 'react';
import classNames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import classes from './iconButton.module.scss';

interface IconButtonProps {
  icon: IconDefinition;
  onClick: () => void;
  className?: string;
}

export const IconButton = ({ icon, onClick, className }: IconButtonProps) => {
  const handleOnClick = useCallback(() => {
    onClick();
  }, [onClick]);

  return (
    <div
      className={classNames(classes.container, className)}
      onClick={handleOnClick}
    >
      <FontAwesomeIcon className={classes.icon} icon={icon} />
    </div>
  );
};
