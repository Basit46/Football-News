import React from "react";

const News = ({ thenews }) => {
  return (
    <div className="news">
      <img
        className="bg-red-700 w-full h h-4/6 object-cover"
        src={thenews.mainMedia.gallery.url}
        alt="news"
      />

      <p className="bg-white text-black p-1 w-fit font-semibold">
        {thenews.categoryLabel}
      </p>
      <p className="inline mr-2">{thenews.title}</p>
    </div>
  );
};

export default News;
