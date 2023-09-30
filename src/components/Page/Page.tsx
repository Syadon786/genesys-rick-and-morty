import React, { ReactElement } from 'react';

import classes from './page.module.scss';

interface PageProps {
  title?: string;
  children: ReactElement;
}

export const Page = ({ title, children }: PageProps) => (
  <div className={classes.container}>
    {title && <h1 className={classes.title}>{title}</h1>}
    {children}
  </div>
);
