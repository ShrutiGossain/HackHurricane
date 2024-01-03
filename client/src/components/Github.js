import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faFire,
  faFireFlameCurved,
  faSlash,
} from "@fortawesome/free-solid-svg-icons";

const Github = () => {
  var greeting = "Good Morning";
  var username = "Vaishali";
  const date = "December 23 2023";
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
  const repos = [
    {
      name: "GameSphere",
      issuesCreated: "24",
      issuesClosed: "12",
      PRmerged: "5",
      PRopened: "12",
      commits: "345",
    },
    {
      name: "Heutiful",
      issuesCreated: "24",
      issuesClosed: "12",
      PRmerged: "5",
      PRopened: "12",
      commits: "1234",
    },
    {
      name: "Polar",
      issuesCreated: "24",
      issuesClosed: "12",
      PRmerged: "5",
      PRopened: "12",
      commits: "24",
    },
  ];
  const cols = [
    "Repository name",
    "Issues created",
    "Issues closed",
    "PR opened",
    "PR merged",
    "commits",
  ];
  return (
    <div>
      <div className="grid grid-cols-12 justify-center items-center col-span-12 p-8 m-8 bg-gradient-to-b from-[#f0f0f0] to-gray-100 shadow-xl rounded-md">


        <div className="grid grid-cols-12 col-span-12 justify-between items-center border-b-2 border-white pb-4">
          <span className="col-span-10 text-sm font-extralight my-2">
            {greeting} , {username}
          </span>
          <span className="col-span-2 text-sm font-medium">{date}</span>
        </div>

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

        <div className="grid grid-cols-12 col-span-12 m-8 p-8 bg-white rounded-xl justify-center items-center">
          <span className="col-span-12 text-center text-sm font-extralight capitalize">
            Repos Contributed in Today
          </span>
          
          <div className="col-span-12 justify-center items-center my-4 p-4 border-[1px] border-gray-200">
            {repos.map((element, index) => (
              <div className="grid grid-cols-12 col-span-12 justify-center items-center p-4">

                <div className="grid grid-rows col-span-3 px-4 font-bold uppercase">
                  {element.name}
                </div>

                <div className="grid grid-rows col-span-3 bg-gradient-to-tr p-4 m-4 from-white to-[#f0f0f0] w-32 h-32 rounded-full">
                  <span className="text-7xl font-bold text-center">
                    {element.issuesClosed}
                  </span>
                  <span className="text-[10px] font-extralight text-center">
                    closed
                  </span>
                  <span className="text-base font-semibold text-center">
                    {element.issuesCreated}
                  </span>
                  <span className="text-[10px] font-extralight text-center capitalize">
                    issues opened
                  </span>
                </div>


                <div className="grid grid-rows col-span-3 bg-gradient-to-tr p-4 m-4 from-white to-[#f0f0f0] w-32 h-32 rounded-full">
                  <span className="text-7xl font-bold  text-center">
                    {element.PRmerged}
                  </span>
                  <span className="text-[10px] font-extralight text-center">
                    merged
                  </span>
                  <span className="text-base font-semibold  text-center">
                    {element.PRopened}
                  </span>
                  <span className="text-[10px] font-extralight text-center">
                    PRs opened
                  </span>
                </div>


                <div className="px-4">
                  <span className="text-7xl font-bold text-center">
                    {element.commits}
                  </span>
                  <div className="text-[10px] font-extralight ml-8">
                    commits
                  </div>
                </div>


              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Github;
