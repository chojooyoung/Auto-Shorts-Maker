'use client';

import { useState, ChangeEventHandler } from 'react';

function SearchInput() {
  const [searchText, setSearchText] = useState<string>('');

  const handleOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchText(e.currentTarget?.value);
  };

  return (
    <input
      className="text-[red]"
      type="text"
      value={searchText}
      onChange={handleOnChange}
    />
  );
}

export default SearchInput;
