import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAPP } from "../utils/context";
import s from "../style/newsDetails.module.css"

const NewsDetails = () => {
  const { get_data, globalState } = useAPP();
  const [detailsNews, setDetailsNews] = useState(null);

  const { title } = useParams();

  const updateNews = async (params) => {
    try {
      await get_data();
      const filteredNews = globalState.articles.filter(
        (item) => item.title === params
      );

      // Перевірка чи існує елемент в масиві перед встановленням його в стан
      if (filteredNews.length > 0) {
        setDetailsNews(filteredNews[0]);
      } else {
        console.error(`News with title "${params}" not found.`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    updateNews(title);
  }, [title]);

  // Перевірка чи існує detailsNews перед використанням його в рендері
  if (!detailsNews) {
    return <div>Loading...</div>;
  }

  return (
    <div className={s.card}>
      <img src={detailsNews.urlToImage} alt={detailsNews.title} />
      <div className={s.info}>  <h1>{detailsNews.title}</h1>
      <p>{detailsNews.content}</p></div>
    </div>
  );
};

export default NewsDetails;
