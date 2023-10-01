import React, { ReactNode } from 'react';
import classNames from 'classnames';

import { CardImage } from 'components';

import classes from './card.module.scss';

interface CardProps {
  className?: string;
  title?: ReactNode;
  image?: string;
  alt?: string;
  children: ReactNode;
}

export const Card = ({ title, className, image, alt, children }: CardProps) => (
  <div className={classNames(classes.card, className)}>
    {image && <CardImage image={image} alt={alt} />}
    {title && <h3 className={classes.title}>{title}</h3>}
    {children}
  </div>
);
