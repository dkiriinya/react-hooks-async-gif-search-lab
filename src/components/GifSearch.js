import React, { useState } from "react";

export default function GifSearch({ onSearchSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit(searchQuery);
  };

  return (
    <div>
      <h2>Gif Search</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
