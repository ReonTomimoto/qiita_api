import React, { useState } from 'react';
import Input from './Input';
import { IoIosSearch, IoMdSettings } from 'react-icons/io';

type SearchInputType = {
  setTitleKey: React.Dispatch<React.SetStateAction<string>>;
  setTagKey: React.Dispatch<React.SetStateAction<string>>;
  setBodyKey: React.Dispatch<React.SetStateAction<string>>;
  setApiKey: React.Dispatch<React.SetStateAction<string>>;
};

const SearchInput = (props: SearchInputType) => {
  const { setTitleKey, setTagKey, setBodyKey, setApiKey } = props;

  const [titleInput, setTitleInput] = useState('');
  const [tagInput, setTagInput] = useState('');
  const [bodyInput, setBodyInput] = useState('');
  const [isApiKey, setIsApiKey] = useState(false);

  const handleSearch = () => {
    setTitleKey(titleInput);
    setTagKey(tagInput);
    setBodyKey(bodyInput);
  };

  return (
    <div className="p-12 bg-gray-100 flex justify-center">
      <Input placeholder="タイトルキーワード" func={setTitleInput} />
      <Input placeholder="タグキーワード" func={setTagInput} />
      <Input placeholder="本文キーワード" func={setBodyInput} />
      <IoIosSearch onClick={handleSearch} className="text-4xl mx-4 hover:cursor-pointer" />
      {isApiKey ? <Input placeholder="APIキー" func={setApiKey} /> : <div></div>}
      <IoMdSettings
        onClick={() => setIsApiKey(!isApiKey)}
        className="text-4xl mx-4 hover:cursor-pointer"
      />
    </div>
  );
};

export default SearchInput;
