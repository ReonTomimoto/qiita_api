import React from 'react';
import parse from 'html-react-parser';
import Link from 'next/link';

type DetailType = {
  isDetail: boolean;
  setIsDetail: React.Dispatch<React.SetStateAction<boolean>>;
  detail: string;
  url: string;
};

const Detail = (props: DetailType) => {
  const { isDetail, setIsDetail, detail, url } = props;

  return (
    <div className="px-14 py-8 ">
      <button
        className="w-40 p-3 mx-4 bg-gray-200 rounded-xl hover:bg-gray-300 hover:shadow-lg duration-300"
        onClick={() => setIsDetail(!isDetail)}
      >
        戻る
      </button>
      <div className="flex text-xl my-10">
        <h2>記事URL: </h2>
        <Link href={url}>
          <h3 className="ml-3 text-blue-700 hover:text-violet-700">{url}</h3>
        </Link>
      </div>
      {parse(detail)}
    </div>
  );
};

export default Detail;
