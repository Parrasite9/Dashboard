import { useState, useEffect } from "react";
import BarChart from "./components/BarChart";
import { ChartData } from "./Data";
import LineChart from "./components/LineChart";


import React from "react";
// import { Chart as ChartJS,
//         categoryScale, 
//         LinearScale, 
//         BarElement,
//         Title, 
//         Tooltip, 
//         Legend } from 'chart.js'

import { Bar, Line } from 'react-chartjs-2'

// ChartJS.register (
//     categoryScale, 
//     LinearScale, 
//     BarElement,
//     Title, 
//     Tooltip, 
//     Legend
// )


const App = () => {

  const [chartData, setChartData] = useState({
    // LABELS CAN BE CONSIDERED THE NAME ON THE X & Y AXIS 
    // IN THIS EXAMPLE, I HAVE YEARS AS DATA, 2016-2022, THIS WOULD BE LABEL 
    labels: [ChartData.map((data) => data.year)],
    datasets: [{
        label: "Users Gained",
        // type: Line,
        data: ChartData.map((data) => data.userGain),
        // backgroundColor: ["red"]
    }],
})

  return (
    <>
      <div class="container-fluid mt-5">
        <div class="row">

          {/* SIDEBAR*/}
          <div class="col-3 sidebar mt-5">
            <ul className="list-unstyled">
              <li><a href="#">DASHBOARD</a></li>
              <li><a href="#">WIDGET</a></li>
              <li><a href="#">REVIEWS</a></li>
              <li><a href="#">CUSTOMERS</a></li>
              <li><a href="#">ONLINE ANALYSIS</a></li>
              <li><a href="#">SETTINGS</a></li>
            </ul>
          </div>


          <div class="col-9">
            <div class="row mb-5">
              {/* REVIEWS */}
              <div class="col-4">
                <h5 className="fs-6">REVIEWS</h5>
                <h2 className="fs-1">1281</h2>
              </div>

              <div class="col-4 mb-5">
                {/* AVERAGE RATING */}
                <h1 className="fs-6">AV RATING</h1>
                <h2 className="fs-1">4.6</h2>
              </div>

              <div class="col-4 mb-5">
                {/* SENTIMENT ANALYSIS */}
                <h1 className="fs-6">SENTIMENT ANALYSIS</h1>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                {/* <!-- bottom grid item content here --> */}
                <h1 className="fs-6">WEBSITE VISITORS</h1>
                {/* <BarChart chartData={chartData} /> */}
                <LineChart chartData={chartData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App