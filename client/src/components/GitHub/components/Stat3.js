import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

const Stat3 = () => {
  return (
    <div className="col-span-12 grid grid-cols-12 m-8 p-8 bg-gradient-to-tr from-blue-400 to-blue-900 shadow-lg rounded-lg cursor-pointer">
      <div className="text-white ">
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: 10, label: "series A" },
                { id: 1, value: 15, label: "series B" },
                { id: 2, value: 20, label: "series C" },
              ],
            },
          ]}
          width={400}
          height={200}
        />
      </div>
    </div>
  );
};

export default Stat3;
