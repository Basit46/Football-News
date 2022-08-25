import { useState, useEffect } from "react";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "027b4e223cmshf5ee3e05015b90fp1b780bjsn09ab8f5ed4c9",
    "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
  },
};

export default function useFetch(url) {
  const [value, setValue] = useState({});

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        setValue(data);
      })
      .catch((err) => console.error(err));
  }, [url]);

  return [value];
}
