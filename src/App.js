import { useState, useEffect } from "react";

const App = () => {
  return (
    <>
      <div className="grid-container">

        {/* SIDEBAR  */}
        <div className="grid-sidebar">
          <ul>
            <li href="#"><a>Dashboard</a></li>
            <li href="#"><a>Reviews</a></li>
            <li href="#"><a>Average Rating</a></li>
            <li href="#"><a>Sentiment Analysis</a></li>
            <li href="#"><a>Website Vistors</a></li>
          </ul>
        </div>

        {/* REVIEWS  */}
        <div className="reviews" >
          <h3>Reviews</h3>
          <h2>1,281</h2>
        </div>

        {/* AVERAGE RATING  */}
        <div className="average-rating">
          <h3>Average Rating</h3>
          <h2>4.6</h2>
        </div>

        {/* SENTIMENT ANALYSIS  */}
        <div className="analysis">
          <h3>Sentiment Analysis</h3>
          <ul>
            <li>960</li>
            <li>122</li>
            <li>321</li>
          </ul>
        </div>

        {/* WEBSITE VISITORS  */}
        <div className="web-visitors">
          <h3>Website Visitors</h3>
          <h2>821</h2>
        </div>

      </div>
    </>
  )
}

export default App