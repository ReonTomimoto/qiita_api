'use client';

import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import QiitaApi from './types/QiitaApi';
import Header from './components/Header';
import SearchInput from './components/SearchInput';
import Pagenation from './components/Pagenation';
import Articles from './components/Articles';
import Detail from './components/Detail';
import Failed from './components/Failed';
import NoKeywords from './components/NoKeywords';

export default function Home() {
  const [articles, setArticles] = useState<QiitaApi[]>([]);
  const [detail, setDetail] = useState('');
  const [isDetail, setIsDetail] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [titleKey, setTitleKey] = useState('');
  const [tagKey, setTagKey] = useState('');
  const [bodyKey, setBodyKey] = useState('');
  const [url, setUrl] = useState('');
  const [page, setPage] = useState(1);
  const [isFailed, setIsFailed] = useState(false);

  const handleDetail = (d: string) => {
    if (apiKey !== '') {
      axios
        .get<QiitaApi>(`https://qiita.com/api/v2/items/${d}`, {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        })
        .then((res: AxiosResponse<QiitaApi>) => {
          const { data } = res;

          if (isFailed) {
            setIsFailed(false);
          }

          setUrl(data.url);
          setDetail(data.rendered_body);
        })
        .catch(() => {
          setIsFailed(true);
        });
    } else {
      axios
        .get<QiitaApi>(`https://qiita.com/api/v2/items/${d}`)
        .then((res: AxiosResponse<QiitaApi>) => {
          const { data } = res;

          if (isFailed) {
            setIsFailed(false);
          }

          setUrl(data.url);
          setDetail(data.rendered_body);
        })
        .catch(() => {
          setIsFailed(true);
        });
    }
    setIsDetail(true);
  };

  useEffect(() => {
    if (titleKey !== '' || tagKey !== '' || bodyKey !== '') {
      if (apiKey !== '') {
        axios
          .get<QiitaApi[]>(
            `https://qiita.com/api/v2/items?page=${page}&per_page=20&query=title:${titleKey}+body:${bodyKey}+tag:${tagKey}`,
            {
              headers: {
                Authorization: `Bearer ${apiKey}`,
              },
            },
          )
          .then((res: AxiosResponse<QiitaApi[]>) => {
            const { data } = res;

            if (isFailed) {
              setIsFailed(false);
            }

            setArticles(data);
          })
          .catch(() => {
            setIsFailed(true);
          });
      } else {
        axios
          .get<QiitaApi[]>(
            `https://qiita.com/api/v2/items?page=${page}&per_page=20&query=title:${titleKey}+body:${bodyKey}+tag:${tagKey}`,
          )
          .then((res: AxiosResponse<QiitaApi[]>) => {
            const { data } = res;

            if (isFailed) {
              setIsFailed(false);
            }
            setArticles(data);
          })
          .catch(() => {
            setIsFailed(true);
          });
      }
    }
  }, [titleKey, tagKey, bodyKey, page]);

  return (
    <div className="mb-12">
      <Header />
      <SearchInput
        setTitleKey={setTitleKey}
        setTagKey={setTagKey}
        setBodyKey={setBodyKey}
        setApiKey={setApiKey}
      />
      {isFailed ? <Failed /> : <></>}
      {isDetail ? (
        <Detail isDetail={isDetail} setIsDetail={setIsDetail} detail={detail} url={url} />
      ) : (
        <>
          {titleKey === '' && tagKey === '' && bodyKey === '' ? (
            <NoKeywords />
          ) : (
            <>
              <Articles articles={articles} handleDetail={handleDetail} />
              <Pagenation setPage={setPage} page={page} articles={articles} />
            </>
          )}
        </>
      )}
    </div>
  );
}
