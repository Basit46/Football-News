import React from "react";

const Featured = ({ feature }) => {
  return (
    <div className="featured pb-1 mb-2 lg:w-5/12 ">
      <img
        className="bg-red-700 w-full h-3/4 object-cover object-top"
        src={feature.mainMedia.gallery.url}
        alt="featured"
      />
      <p className="bg-white text-black p-1 w-fit font-semibold">
        {feature.categoryLabel}
      </p>
      <p className="inline mr-2 text-lg">{feature.title}</p>
      <p className="text-blue-300 inline border-white border-l pl-2">
        {feature.updatedAt.time} {feature.updatedAt.time > 1 ? "hours" : "hour"}{" "}
        ago
      </p>
    </div>
  );
};

export default Featured;
