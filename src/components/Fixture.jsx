import React from "react";

const Fixture = ({ fixture }) => {
  return (
    <div className="flex justify-between items-center mb-2 ">
      <p className="font-semibold text-lg flex-1">{fixture.homeName}</p>
      <div className="bg-white text-black p-1">{fixture.date}</div>
      <p className="font-semibold text-lg flex-1 text-right">
        {fixture.awayName}
      </p>
    </div>
  );
};

export default Fixture;
