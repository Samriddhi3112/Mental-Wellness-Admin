import React from 'react'
import activity1 from "../../assets/images/mindful-games.png"
import activity2 from "../../assets/images/your-secret-jounral.png"
import activity3 from "../../assets/images/movies.png"
import activity4 from "../../assets/images/calm-music.png"
import activity5 from "../../assets/images/wise-yogi.png"
import activity6 from "../../assets/images/health-is-wealth.png"
import { NavLink } from 'react-router-dom'

const ActivityListing = () => {
  return (
    <main className="main-content">
  <div className="container-fluid">
    <div className="text-center m-5">
      <h2 className="title">Choose Activity Type</h2>
      <p className="sub-title">
        Select the format of the activity you want to create for your users.
      </p>
    </div>
    <div className="row g-4 mb-4">
      <div className="col-md-4">
        <NavLink to="/activity-management/games" className="activity-card d-block">
          <div className="activity-icon">
            <img src={activity1} alt />
          </div>
          <h5>Mindful Games</h5>
          <p>Play. Relax. Focus.</p>
          <div className="d-flex justify-content-between">
            <span className="Interactive">Interactive</span>
            {/* <input type="radio" name="" id="" /> */}
          </div>
        </NavLink>
      </div>
      <div className="col-md-4">
        <NavLink to="/activity-management" className="activity-card d-block">
          <div className="activity-icon">
            <img src={activity2} alt />
          </div>
          <h5>Your Secret Journal</h5>
          <p>Write Without Judgment</p>
          <div className="d-flex justify-content-between">
            <span className="Text-based">Text-based</span>
            {/* <input type="radio" name="" id="" /> */}
          </div>
        </NavLink>
      </div>
      <div className="col-md-4">
        <NavLink to="/activity-management/movies" className="activity-card d-block">
          <div className="activity-icon">
            <img src={activity3} alt />
          </div>
          <h5>Movies</h5>
          <p>Watch and Unwind</p>
          <div className="d-flex justify-content-between">
            <span className="Video">Video</span>
            {/* <input type="radio" name="" id="" /> */}
          </div>
        </NavLink>
      </div>
      <div className="col-md-4">
        <NavLink to="/activity-management/calm-music" className="activity-card d-block">
          <div className="activity-icon">
            <img src={activity4} alt />
          </div>
          <h5>Calm Music</h5>
          <p>Relax Through Sound</p>
          <div className="d-flex justify-content-between">
            <span className="Audio">Audio</span>
            {/* <input type="radio" name="" id="" /> */}
          </div>
        </NavLink>
      </div>
      <div className="col-md-4">
        <NavLink to="/activity-management/wise-yogi" className="activity-card d-block">
          <div className="activity-icon">
            <img src={activity5} alt />
          </div>
          <h5>Wise Yogi</h5>
          <p>Balance Mind Body</p>
          <div className="d-flex justify-content-between">
            <span className="Yoga">Yoga</span>
            {/* <input type="radio" name="" id="" /> */}
          </div>
        </NavLink>
      </div>
      <div className="col-md-4">
        {/* <NavLink to="/activity-management/healthListing" className="activity-card d-block"> */}
        <NavLink to="/activity-management" className="activity-card d-block">
          <div className="activity-icon">
            <img src={activity6} alt />
          </div>
          <h5>Health is Wealth</h5>
          <p>Care For Health</p>
          <div className="d-flex justify-content-between">
            <span className="Program">Program</span>
            {/* <input type="radio" name="" id="" /> */}
          </div>
        </NavLink>
      </div>
    </div>
    {/* <div class="text-center">
    <button class="btn btn-outline-secondary me-2">Cancel</button>
    <a href="activity-management-screen-two.html"
      ><button class="btn btn-primary">Continue</button></a
    >
  </div> */}
  </div>
</main>

  )
}

export default ActivityListing