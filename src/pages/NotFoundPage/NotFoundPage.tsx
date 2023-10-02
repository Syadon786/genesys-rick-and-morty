import React from 'react';

import { BackButton } from 'components';

import classes from './notFoundPage.module.scss';

const NotFoundPage = () => (
  <div className={classes.container}>
    <h2>Ooops...! This route does not exists.</h2>
    <BackButton />
  </div>
);

export default NotFoundPage;
