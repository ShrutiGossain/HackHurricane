import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faFire,
  faFireFlameCurved,
  faSlash,
} from "@fortawesome/free-solid-svg-icons";

const Stat1 = () => {
  const gitHubStats = [
    {
      name: "Today's contributions",
      value: "12",
      icon: faBolt,
    },
    {
      name: "Current Streak",
      value: "12",
      icon: faFire,
    },
    {
      name: "Max Streak",
      value: "24",
      icon: faFireFlameCurved,
    },
  ];
  return (
    <div className="col-span-12 grid grid-cols-12 m-8 p-8 bg-gradient-to-tr from-blue-400 to-blue-900 shadow-lg rounded-lg cursor-pointer">
      {gitHubStats.map((element, index) => (
        <div
          className={
            element.name != "Max Streak"
              ? "grid grid-rows col-span-4 border-r-2 border-white"
              : "grid grid-rows col-span-4"
          }
        >
          <span className="flex justify-center items-center text-7xl font-bold text-white text-center">
            {element.value}
            <FontAwesomeIcon className="text-3xl" icon={element.icon} />
          </span>
          <span className="text-base font-semibold text-white text-center">
            {element.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Stat1;
