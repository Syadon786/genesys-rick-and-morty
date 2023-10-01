import React, { ChangeEvent, useEffect, useState, useCallback } from 'react';

import classes from './searchInput.module.scss';

interface SearchInputProps {
  placeholder?: string;
  initialValue?: string;
  onChange: (value: string) => void;
  delay?: number;
}

export const SearchInput = ({
  placeholder = 'Search',
  initialValue = '',
  onChange,
  delay = 500,
}: SearchInputProps) => {
  const [inputValue, setInputValue] = useState(initialValue);
  const [debouncedInputValue, setDebouncedInputValue] = useState('');

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
    },
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedInputValue(inputValue);
    }, delay);
    return () => clearTimeout(timeoutId);
  }, [inputValue, delay]);

  useEffect(() => {
    onChange(debouncedInputValue);
  }, [debouncedInputValue, onChange]);

  return (
    <input
      className={classes.input}
      type="text"
      value={inputValue}
      placeholder={placeholder}
      onChange={handleInputChange}
    />
  );
};
