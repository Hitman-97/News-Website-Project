import React, { useState } from 'react';
import { searchArticles } from '../services/newsService';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const data = await searchArticles(query);
    setResults(data);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for articles..."
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {results.map((article, index) => (
          <li key={index}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;


import 'bootstrap/dist/css/bootstrap.min.css';

