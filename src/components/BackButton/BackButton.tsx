import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import classes from './backButton.module.scss';

export const BackButton = () => {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate('/');
  }, [navigate]);

  return (
    <button className={classes.button} onClick={handleClick}>
      Back to Home
    </button>
  );
};
