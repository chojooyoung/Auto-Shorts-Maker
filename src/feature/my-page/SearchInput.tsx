'use client';

import { useState, ChangeEventHandler } from 'react';

function SearchInput() {
  const [searchText, setSearchText] = useState<string>('');

  const handleOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchText(e.currentTarget?.value);
  };

  return (
    <>
      <div className="text-lg text-[red]">dffdfdfdds</div>
      {/* <input
        className="text"
        type="text"
        value={searchText}
        onChange={handleOnChange}
      /> */}
    </>
  );
}

export default SearchInput;
