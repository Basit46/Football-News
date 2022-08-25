import React, { useState } from "react";
import casemiro from "./images/casemiro.png";
import "./App.css";
import useFetch from "./useFetch";
import Featured from "./components/Featured";
import News from "./components/News";
import Fixtures from "./components/Fixtures";

function App() {
  //i used this for the date in the navbar
  const ourDate = new Date();

  //theFeatured and theNews state to handle the featured and news section respectively
  const [theFeatured, settheFeatured] = useState([]);
  const [theNews, setTheNews] = useState([
    {
      title: "lets goo",
      id: 2,
      categoryLabel: "football",
      mainMedia: { gallery: { url: "hooos" } },
    },
  ]);

  //I fetched data from my custom useFetch hook
  const [data] = useFetch("https://livescore6.p.rapidapi.com/news/v2/list");

  async function getFeatured() {
    const featuredResult = await data.homepageArticles[0].articles;
    settheFeatured([featuredResult[0], featuredResult[1]]);
  }
  getFeatured();

  async function getNews() {
    const newsResult = await data.topStories;
    const final = await newsResult.map((res) => res);
    setTheNews(final);
  }
  getNews();

  return (
    <div className="App overflow-x-hidden">
      <nav className="flex justify-between items-center bg-blue-800 text-white px-2 lg:px-10 py-2">
        <div className="text-4xl font-bold">Football News</div>
        <div className="text-xl font-semibold">
          {ourDate.getFullYear() +
            " : " +
            (ourDate.getMonth() + 1) +
            " : " +
            ourDate.getDate()}
        </div>
      </nav>
      <div className="headline relative overflow-hidden w-screen h-52 flex justify-between items-center px:2 lg:px-12 ">
        <div>
          <p className="text-4xl lg:text-7xl font-bold">Here we go!!!</p>
          <p className="text-xl font-semibold lg:ml-9 mt-2">
            ...Casemiro to Man Utd{" "}
          </p>
          <a
            href="https://www.skysports.com/football/news/11095/12676055/casemiro-manchester-united-sign-midfielder-from-real-madrid-in-70m-deal-before-liverpool-clash"
            className="text-blue-500 mt-9"
          >
            Read more
          </a>
        </div>
        <img
          className="w-96 h-full object-cover object-top"
          src={casemiro}
          alt="casemiro"
        />
      </div>

      <div className="lg:flex w-full bg-blue-400">
        <div className="bg-blue-900 text-white h-fit lg:w-4/6">
          <div>
            <h1 className="text-xl mt-1 bg-white text-blue-800 p-1 w-fit rounded-r-lg">
              Featured
            </h1>
            <div className="lg:flex justify-evenly mt-1">
              {theFeatured.map((feature) => (
                <Featured key={feature.id} feature={feature} />
              ))}
            </div>
          </div>

          <div>
            <h1 className="mt-6 text-xl bg-white text-blue-900 p-1 w-fit rounded-r-lg">
              News
            </h1>
            <div className="newsgrid grid justify-center p-2 gap-y-5 gap-x-5">
              {theNews.map((thenews) => (
                <News key={thenews.id} thenews={thenews} />
              ))}
            </div>
          </div>
        </div>

        <div className="bg-blue-400 h-full lg:w-2/6">
          <h1 className="text-3xl text-center font-bold mb-3">
            Fixtures Today
          </h1>
          <Fixtures />
        </div>
      </div>
    </div>
  );
}

export default App;
