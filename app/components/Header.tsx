import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <>
      <div className="bg-lime-400 w-screen fixed">
        <Link href="#" className="w-1/2">
          <h2 className="text-white font-bold text-3xl px-6 py-5">Qiita API v2</h2>
        </Link>
      </div>
      <div className="h-16"></div>
    </>
  );
};

export default Header;
