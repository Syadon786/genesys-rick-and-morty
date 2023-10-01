import React from 'react';

import { Card, CardProperty, StatusIndicator } from 'components';
import { Status } from 'models';

interface CharacterCardProps {
  image: string;
  alt?: string;
  name: string;
  status: Status;
  species: string;
  type: string;
  gender: string;
  className?: string;
}

export const CharacterCard = ({
  name,
  image,
  status,
  alt,
  className,
  ...rest
}: CharacterCardProps) => (
  <Card image={image} alt={alt} title={name} className={className}>
    <CardProperty
      propKey="status"
      value={<StatusIndicator status={status} />}
    />
    {Object.entries(rest).map(([key, value]) =>
      value !== '' ? (
        <CardProperty key={key} propKey={key} value={value} />
      ) : null
    )}
  </Card>
);
