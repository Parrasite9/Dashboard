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
        <h3>Reviews</h3>
        <h2>1,281</h2>

        {/* AVERAGE RATING  */}
        <h3>Average Rating</h3>
        <h2>4.6</h2>

        {/* SENTIMENT ANALYSIS  */}
        <h3>Sentiment Analysis</h3>
        <ul>
          <l1>960</l1>
          <l1>122</l1>
          <l1>321</l1>
        </ul>

        {/* WEBSITE VISITORS  */}
        <h3>Website Visitors</h3>
        <h2>821</h2>

      </div>
    </>
  )
}

export default App