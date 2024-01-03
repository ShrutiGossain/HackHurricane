import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faFire,
  faFireFlameCurved,
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
      name: "Repkit",
      issuesCreated: "24",
      issuesClosed: "12",
      PRmerged: "5",
      PRopened: "12",
      commits: "345",
    },
    {
      name: "Repkit",
      issuesCreated: "24",
      issuesClosed: "12",
      PRmerged: "5",
      PRopened: "12",
      commits: "1234",
    },
    {
      name: "Repkit",
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
          {/* <span className="col-span-12">Repos Contributed in Today!</span> */}
          <div className="col-span-12 justify-center items-center my-4 border-t-[1px] border-l-[1px] border-b-[1px] border-gray-200">
            <div className="grid grid-cols-12 col-span-12 justify-center items-center">
              {cols.map((element, index) => (
                <div className="p-4 border-r-[1px] border-b-[1px] border-gray-200">
                  {element}
                </div>
              ))}
            </div>
            {repos.map((element, index) => (
              <div className="grid grid-cols-12 col-span-12 justify-center items-center">
                <div className="px-4 border-r-[1px] border-gray-200">
                  {element.name}
                </div>
                <div className="px-4 border-r-[1px] border-gray-200">
                  {element.issuesCreated}
                </div>
                <div className="px-4 border-r-[1px] border-gray-200">
                  {element.issuesClosed}
                </div>
                <div className="px-4 border-r-[1px] border-gray-200">
                  {element.PRopened}
                </div>
                <div className="px-4 border-r-[1px] border-gray-200">
                  {element.PRmerged}
                </div>
                <div className="px-4 border-r-[1px] border-gray-200">
                  {element.commits}
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
