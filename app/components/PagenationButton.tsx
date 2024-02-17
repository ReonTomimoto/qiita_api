import React from 'react';
import Button from '../types/Button';

interface PagenationButtonType {
  button: Button;
  func: (arg: number) => void;
  arg: number;
}

export default function PagenationButton(props: PagenationButtonType): JSX.Element {
  const { button, func, arg } = props;
  const { isDisabled, text } = button;

  return (
    <>
      {isDisabled ? (
        <button className="w-40 p-3 mx-4 bg-gray-100 rounded-xl text-gray-400 hover:cursor-default disabled:">
          {text}
        </button>
      ) : (
        <button
          className="w-40 p-3 mx-4 bg-gray-200 rounded-xl hover:bg-gray-300 hover:shadow-lg duration-300"
          onClick={() => func(arg)}
        >
          {text}
        </button>
      )}
    </>
  );
}
