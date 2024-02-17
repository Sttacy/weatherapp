import React, { useEffect, useState } from "react";
import s from "../style/news.module.css";
import { Link } from "react-router-dom";
import { useAPP } from "../utils/context";

const News = () => {
  const {globalState , get_data} = useAPP();
  const [newsData, setNewsData] = useState(globalState);
  const [inputValue, setInputValue] = useState("");

  const fetchData = async () => {
    try {
      const result = await get_data(inputValue);
      setNewsData(result);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  // Зміна стану input
  function handleInputChange(e) {
    setInputValue(e.target.value);
  }
  // функція підписки на форму
  function onFormSubmit(e) {
    e.preventDefault();
    fetchData();
  }

  return (
    <div>
      <h1>Top news for you</h1>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          className={s.searchInput}
          placeholder="What you want?"
          value={inputValue}
          onChange={handleInputChange}
        />
        <>Знайти</>
      </form>
      <div className={s.articlesContainer}>
        {newsData.articles ? (
          newsData.articles?.map((newsItem) => {
            return (
              <Link
                className={s.article}
                style={{
                  backgroundImage: `url(${newsItem.urlToImage})`,
                  textDecoration: "none",
                }}
                to={`/news/${newsItem.title}`}
                key={newsItem.title}
              >
                <div className={s.atc_text}>
                  <h1>{newsItem.title}</h1>
                  <p>{newsItem.description}</p>
                </div>
              </Link>
            );
          })
        ) : (
          <h1>Такої новини немає!!!</h1>
        )}
      </div>
    </div>
  );
};

export default News;
