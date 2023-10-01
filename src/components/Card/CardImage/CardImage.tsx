import React from 'react';

import classes from './cardImage.module.scss';

interface CardImageProps {
  image: string;
  alt?: string;
}

export const CardImage = ({ image, alt }: CardImageProps) => (
  <div className={classes.imageContainer}>
    <img className={classes.image} src={image} alt={alt} />
  </div>
);
