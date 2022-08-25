import React, { useEffect, useState } from "react";
import Fixture from "./Fixture";

const Fixtures = () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "027b4e223cmshf5ee3e05015b90fp1b780bjsn09ab8f5ed4c9",
      "X-RapidAPI-Host": "elenasport-io1.p.rapidapi.com",
    },
  };

  const [theFixtures, setTheFixtures] = useState([
    {
      id: 20,
      homeName: "hhhhhh",
      awayName: "jjjjjjjjjj",
      date: 123456789098765,
    },
  ]);
  useEffect(() => {
    fetch("https://elenasport-io1.p.rapidapi.com/v2/upcoming?page=1", options)
      .then((response) => response.json())
      .then((response) => {
        setTheFixtures(response.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {theFixtures.map((fixture) => (
        <Fixture key={fixture.id} fixture={fixture} />
      ))}
    </div>
  );
};

export default Fixtures;
