import React from 'react';

import classes from './avatar.module.scss';

interface AvatarProps {
  src: string;
  alt: string;
}

export const Avatar = ({ src, alt }: AvatarProps) => (
  <img className={classes.avatar} src={src} alt={alt} />
);
