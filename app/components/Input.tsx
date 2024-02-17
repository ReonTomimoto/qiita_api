import React from 'react';

type InputType = {
  placeholder: string;
  func: (event: string) => void;
};

export default function Input(props: InputType) {
  const { placeholder, func } = props;

  return (
    <input
      type="text"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => func(e.target.value)}
      placeholder={placeholder}
      className="h-10 w-1/6 px-3 mx-2"
    />
  );
}
