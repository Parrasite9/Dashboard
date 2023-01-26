import { useState, useEffect } from "react";

const App = () => {
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
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App