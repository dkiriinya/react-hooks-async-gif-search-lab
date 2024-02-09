import React, { useState, useEffect } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

export default function GifListContainer() {
  const [gifs, setGifs] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (query) {
      fetchGifs();
    }
  }, [query]);

  const fetchGifs = async () => {
    try {
      const apiKey = 'JvlMIEx9EvG7Pv62VZvADmc6eBGJvaBO';
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}`
      );
      const data = await response.json();

      // Assuming you want to store the first 3 gifs
      const firstThreeGifs = data.data.slice(0, 3);
      setGifs(firstThreeGifs);
    } catch (error) {
      console.error("Error fetching gifs:", error);
    }
  };

  const handleSearchSubmit = (searchQuery) => {
    setQuery(searchQuery);
  };

  return (
    <div>
      <GifSearch onSearchSubmit={handleSearchSubmit} />
      <GifList gifs={gifs} />
    </div>
  );
}
