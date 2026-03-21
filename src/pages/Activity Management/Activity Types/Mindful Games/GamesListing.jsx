import React from 'react'
import game1 from "../../../../assets/images/2048-classic-pizzle.png";
import game2 from "../../../../assets/images/activity-user-icon.png";
import game3 from "../../../../assets/images/memory-match.png";
import game4 from "../../../../assets/images/breathing-circle.png";
import game5 from "../../../../assets/images/activity-user-icon.png";
import game6 from "../../../../assets/images/activity-user-icon.png"

const GamesListing = () => {
  return (
    <main className="main-content">
  <div className="container-fluid">
    <div className="mb-4">
      <h4 className="title">Your well-being games collection</h4>
      <p className="sub-title">
        Engaging activities designed to promote mindfulness and relaxation
      </p>
    </div>
    <div className="row g-4">
      <div className="col-md-4">
        <div className="game-card">
          <div className="p-4">
            <div className="game-number">
              <img src={game1} alt />
            </div>
            <h6>2048 Classic Puzzle</h6>
            <p>
              Combine numbers to reach 2048. A perfect blend of strategy and
              mindfulness.
            </p>
            <div className="d-flex gap-1 flex-wrap mb-2">
              <span className="badge-Blue">Logic</span>
              <span className="badge-Green">Focus</span>
              <span className="badge-Purple">15-30 min</span>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <p className="m-0">
                <img src={game2} alt /> &nbsp;
                1,247 plays
              </p>
              {/* <div>
              <a href="#" class="btn btn-sm btn-link"
                ><img src="images/activity-edit-icon.png" alt=""
              /></a>
              <a href="#" class="btn btn-sm btn-link"
                ><img src="images/activity-three-dot-icon.png" alt=""
              /></a>
            </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="game-card">
          <div className="p-4">
            <div className="game-number">
              <img src={game3} alt />
            </div>
            <h6>Memory Match</h6>
            <p>
              Train your memory while staying present and focused on the
              moment.
            </p>
            <div className="d-flex gap-1 flex-wrap mb-2">
              <span className="badge-Pink">Memory</span>
              <span className="badge-Green">Attention</span>
              <span className="badge-Purple">5-15 min</span>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <p className="m-0">
                <img src="images/activity-user-icon.png" alt /> &nbsp;
                1,247 plays
              </p>
              {/* <div>
              <a href="#" class="btn btn-sm btn-link"
                ><img src="images/activity-edit-icon.png" alt=""
              /></a>
              <a href="#" class="btn btn-sm btn-link"
                ><img src="images/activity-three-dot-icon.png" alt=""
              /></a>
            </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="game-card">
          <div className="p-4">
            <div className="game-number">
              <img src={game4} alt />
            </div>
            <h6>Breathing Circle</h6>
            <p>
              Guided breathing exercises to center yourself and find inner
              calm.
            </p>
            <div className="d-flex gap-1 flex-wrap mb-2">
              <span className="badge-Blue">Breathing</span>
              <span className="badge-Green">Relaxation</span>
              <span className="badge-Purple">5-15 min</span>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <p className="m-0">
                <img src={game5} alt /> &nbsp;
                1,247 plays
              </p>
              {/* <div>
              <a href="#" class="btn btn-sm btn-link"
                ><img src="images/activity-edit-icon.png" alt=""
              /></a>
              <a href="#" class="btn btn-sm btn-link"
                ><img src="images/activity-three-dot-icon.png" alt=""
              /></a>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

  )
}

export default GamesListing