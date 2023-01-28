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

// ICONS FROM https://mui.com/material-ui/material-icons/?query=widget
import DashboardIcon from '@mui/icons-material/Dashboard'
import WidgetsIcon from '@mui/icons-material/Widgets'
import ReviewsIcon from '@mui/icons-material/Reviews'
import PersonSearchIcon from '@mui/icons-material/PersonSearch'
import InsightsIcon from '@mui/icons-material/Insights'
import SettingsIcon from '@mui/icons-material/Settings'

// AVATARS 
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import { deepOrange, deepPurple } from '@mui/material/colors'

const App = () => {

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

  return (
    <>
      <div class="dash-container" >
        <div class="row" >

          {/* SIDEBAR*/}
          <div class="col-3 sidebar pt-5 nav-cell">

            <h1 className="logo">LOGO</h1>

            <ul className="list-unstyled">
              <li><DashboardIcon fontSize="small"/><a href="#">DASHBOARD</a></li>
              <li><WidgetsIcon fontSize="small" /><a href="#">WIDGET</a></li>
              <li><ReviewsIcon fontSize="small" /><a href="#">REVIEWS</a></li>
              <li><PersonSearchIcon fontSize="small" /><a href="#">CUSTOMERS</a></li>
              <li><InsightsIcon fontSize="small" /><a href="#">ONLINE ANALYSIS</a></li>
              <li><SettingsIcon fontSize="small" /><a href="#">SETTINGS</a></li>
            </ul>

            <div class="avatars">
              <h5 className="fs-6 ">Currently Online</h5>
              <Stack direction="row" spacing={2}>
                <Avatar>H</Avatar>
                <Avatar sx={{bgcolor: deepOrange[500]}}>N</Avatar>
                <Avatar sx={{bgcolor: deepPurple[500]}}>OP</Avatar>
              </Stack>
          </div>
          </div>




          <div class="col-9">
            <div class="row">
              {/* REVIEWS */}
              <div class="col-4 cell border border-5 border-primary-subtle">
                <h5 className="fs-6 pt-2">REVIEWS</h5>
                <h2 className="fs-1">{totalReviews}</h2>
                <h5 className="fs-6">You have got <span className="text-success">{reviewPercent}%</span>more reviews than last week!</h5>
                
                <div className="container">
                  <div className="row mt-5">
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

              <div class="col-4 cell border border-5 border-primary-subtle">
                {/* AVERAGE RATING */}
                <h1 className="fs-6 pt-2">AV RATING</h1>
                <h2 className="fs-1">{rating}</h2>
                <Rating name="half-rating" defaultValue={rating} precision={0.5}  />
                <br />
                <Button className="mt-5" variant="contained">Random Button</Button>

              </div>

              <div class="col-4 cell border border-5 border-primary-subtle">
                {/* SENTIMENT ANALYSIS */}
                <h1 className="fs-6 pt-2">SENTIMENT ANALYSIS</h1>
                <DonutChart chartData={chartData} />
              </div>
            </div>
            <div class="row cell border border-5 border-primary-subtle">
              <div class="col-12 ">
                {/* <!-- bottom grid item content here --> */}
                <h1 className="fs-6 pt-2">WEBSITE VISITORS</h1>
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