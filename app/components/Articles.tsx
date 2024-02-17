import React from 'react';
import QiitaApi from '../types/QiitaApi';
import Link from 'next/link';

type ArticlesType = {
  articles: QiitaApi[];
  handleDetail: (d: string) => void;
};

const Articles = (props: ArticlesType) => {
  const { articles, handleDetail } = props;

  return (
    <div className="my-5">
      <div className="w-screen text-center">
        {articles.map((article: QiitaApi) => (
          <div
            key={article.id}
            className="w-10/12 mx-auto my-3 py-8 px-4 bg-gray-50 rounded-xl shadow-xl"
          >
            <div className="flex justify-between">
              <div className="flex">
                <img
                  src={article.user.profile_image_url}
                  alt=""
                  className="w-10 h-10 rounded-3xl"
                />
                <h3 className="h-10 flex flex-col justify-center ml-3">{article.user.name}</h3>
              </div>
              <Link href="/">
                <button
                  onClick={() => {
                    handleDetail(article.id);
                  }}
                  className="h-12 w-32 text-white bg-lime-800 rounded-xl hover:bg-lime-950 hover:shadow-xl duration-300"
                >
                  詳細を見る
                </button>
              </Link>
            </div>
            <h2 className="text-xl font-bold mt-2 mb-5">{article.title}</h2>
            <div className="flex justify-between">
              <div className="flex md:flex-col mx-12">
                {article.tags.map((tag) => (
                  <h3 key={tag.name} className="p-3 bg-lime-300 mx-1 md:my-1 rounded-xl shadow">
                    {tag.name}
                  </h3>
                ))}
              </div>
              <h3 className="py-2 pr-6">{article.updated_at.substring(0, 10)}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
