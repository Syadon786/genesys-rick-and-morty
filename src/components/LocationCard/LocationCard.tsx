import React, { ReactNode } from 'react';

import { Card, CardProperty } from 'components';

interface LocationCardProps {
  title: ReactNode;
  name: string;
  type: string;
  dimension: string;
  className?: string;
}

export const LocationCard = ({
  title,
  className,
  ...props
}: LocationCardProps) => (
  <Card title={title} className={className}>
    {Object.entries(props).map(([key, value]) =>
      value !== '' ? (
        <CardProperty key={key} propKey={key} value={value} />
      ) : null
    )}
  </Card>
);
