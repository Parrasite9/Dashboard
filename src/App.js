import { useState, useEffect } from "react";
import BarChart from "./components/BarChart";
import { ChartData } from "./Data";
import LineChart from "./components/LineChart";
import DonutChart from "./components/Donut";

import React from "react";

import { Bar, Line } from 'react-chartjs-2'

// SIDEBAR BUTTONS 
import Button from '@mui/material/Button'

// RATING 
import Rating from '@mui/material/Rating'

const App = () => {

  // const [value, setValue] = useState(dayjs('2022-04-07'))

  const reviewPercent = Math.round((Math.random() * 50 + 10) * 10) / 10
  const positive = Math.floor((Math.random() * 499 + 500 ))
  const negative = Math.floor(Math.random() * 500)
  const totalReviews = positive + negative
  const rating = Math.round((Math.random() * 3.5 + 1.5) * 10) / 10

  const [chartData, setChartData] = useState({
    // LABELS CAN BE CONSIDERED THE NAME ON THE X & Y AXIS 
    // IN THIS EXAMPLE, I HAVE YEARS AS DATA, 2016-2022, THIS WOULD BE LABEL 
    // labels: [ChartData.map((data) => data.year)], //DYANAMIC NOT WORKING
    labels: [2016, 2017, 2018, 2019, 2020, 2021, 2022],
    datasets: [{
        label: "Users Gained",
        // type: Line,
        data: ChartData.map((data) => data.userGain),
        // data: ChartData.map((data) => data.userLost),
        // backgroundColor: ["red"]
    }],
})

const [checked, setChecked] = useState(true)

const handleChecked = (e) => {
  setChecked(e.target.checked)
}


  return (
    <>
      <div class="container-sm mt-5">
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
              {/* <li><Button variant="contained">DASHBOARD</Button></li>
              <li><Button variant="contained">WIDGET</Button></li>
              <li><Button variant="contained">REVIEWS</Button></li>
              <li><Button variant="contained">CUSTOMERS</Button></li>
              <li><Button variant="contained">ONLINE ANALYSIS</Button></li>
              <li><Button variant="contained">SETTINGS</Button></li> */}

            </ul>
          </div>


          <div class="col-9">
            <div class="row mb-5">
              {/* REVIEWS */}
              <div class="col-4">
                <h5 className="fs-6">REVIEWS</h5>
                <h2 className="fs-1">{totalReviews}</h2>
                <h5 className="fs-6">You have got <span className="text-success">{reviewPercent}%</span>more reviews than last week!</h5>
                
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <h5 className="fs-6">{positive}</h5>
                      <h5 className="fs-6 text-success">POSITIVE</h5>
                    </div>

                    <div className="col">
                      <h5 className="fs-6">{negative}</h5>
                      <h5 className="fs-6 text-danger">NEGATIVE</h5>
                    </div>
                  </div>
                </div>

              </div>

              <div class="col-4 mb-5">
                {/* AVERAGE RATING */}
                <h1 className="fs-6">AV RATING</h1>
                <h2 className="fs-1">{rating}</h2>
                <Rating name="half-rating" defaultValue={rating} precision={0.5}  />
                <br />
                <Button className="mt-5" variant="contained">Random Button</Button>

              </div>

              <div class="col-4 mb-5">
                {/* SENTIMENT ANALYSIS */}
                <h1 className="fs-6">SENTIMENT ANALYSIS</h1>
                <DonutChart chartData={chartData} />
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