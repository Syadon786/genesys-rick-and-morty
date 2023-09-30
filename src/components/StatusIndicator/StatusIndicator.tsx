import React from 'react';
import classNames from 'classnames';

import { Status } from 'models';

import classes from './statusIndicator.module.scss';

interface StatusIndicatorProps {
  status: Status;
}

export const StatusIndicator = ({ status }: StatusIndicatorProps) => (
  <div className={classes.container}>
    <div className={classNames(classes.statusIndicator, classes[status])} />
    <div>{status}</div>
  </div>
);
