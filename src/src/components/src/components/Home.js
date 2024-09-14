import React, { useEffect, useState } from 'react';
import { fetchTopHeadlines } from '../services/newsService';

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const data = await fetchTopHeadlines();
      setArticles(data);
    };
    getArticles();
  }, []);

  return (
    <div>
      <h1>Top Headlines</h1>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
