import React, { useCallback } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import classes from './iconButton.module.scss';

interface IconButtonProps {
  icon: IconDefinition;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
}

export const IconButton = ({
  icon,
  onClick,
  disabled,
  className,
}: IconButtonProps) => {
  const handleOnClick = useCallback(() => {
    if (!disabled) {
      onClick();
    }
  }, [onClick, disabled]);

  return (
    <div
      className={classNames(
        classes.container,
        { [classes.disabled]: disabled },
        className
      )}
      onClick={handleOnClick}
    >
      <FontAwesomeIcon className={classes.icon} icon={icon} />
    </div>
  );
};
