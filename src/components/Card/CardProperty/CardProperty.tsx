import React, { ReactNode } from 'react';

import { capitalizeFirstLetter } from 'utils';

import classes from './cardProperty.module.scss';

interface CardPropertyProps {
  propKey: string;
  value: ReactNode;
}

export const CardProperty = ({ propKey, value }: CardPropertyProps) => (
  <div className={classes.propertyContainer}>
    <span className={classes.propertyName}>{`${capitalizeFirstLetter(
      propKey
    )}:`}</span>
    <span>{value}</span>
  </div>
);
