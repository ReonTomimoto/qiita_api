import React from 'react';
import PagenationButton from './PagenationButton';
import QiitaApi from '../types/QiitaApi';

type PagenationType = {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  articles: QiitaApi[];
};

const Pagenation = (props: PagenationType) => {
  const { setPage, page, articles } = props;

  return (
    <div className="flex justify-center">
      {page === 1 ? (
        <PagenationButton
          button={{ isDisabled: true, text: '前のページ' }}
          func={setPage}
          arg={page - 1}
        />
      ) : (
        <a href="#">
          <PagenationButton
            button={{ isDisabled: false, text: '前のページ' }}
            func={setPage}
            arg={page - 1}
          />
        </a>
      )}
      {articles.length !== 20 ? (
        <PagenationButton
          button={{ isDisabled: true, text: '次のページ' }}
          func={setPage}
          arg={page + 1}
        />
      ) : (
        <a href="#">
          <PagenationButton
            button={{ isDisabled: false, text: '次のページ' }}
            func={setPage}
            arg={page + 1}
          />
        </a>
      )}
    </div>
  );
};

export default Pagenation;
