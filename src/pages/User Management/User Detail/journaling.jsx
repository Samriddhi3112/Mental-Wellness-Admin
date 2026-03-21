import React from "react";
import graph from "../../../assets/images/yellowShield.svg"
import graph1 from "../../../assets/images/charthappy.png"
console.log(graph);


const Journaling = () => {
  return (
    <div>
      <div className="usermanagement-statscard mb-4">
        <div className="row text-center">
          <div className="col-md-3 stat-item">
            <div className="stat-icon text-danger">
              <i className="fa-solid fa-book p-orange" />
            </div>
            <div className="stat-value">42</div>
            <div className="stat-label">Total Journal Entries</div>
          </div>
          <div className="col-md-3 stat-item">
            <i className="fa-solid fa-calendar-week purple f-24" />
            <div className="stat-value">3.5</div>
            <div className="stat-label">Avg Entries Per Week</div>
          </div>
          <div className="col-md-3 stat-item">
            <div className="stat-icon">😊 😊 😐</div>
            <div className="stat-value" style={{ fontSize: 14 }}>
              Calm, Happy, Neutral
            </div>
            <div className="stat-label">Most Common Moods</div>
          </div>
          <div className="col-md-3 stat-item">
            <i className="fa-solid fa-clock blue" />
            <div className="stat-value">2 hrs ago</div>
            <div className="stat-label">Last Entry Date</div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          <div className="bg-white br-16 border p-4 mb-4">
            <div className="mb-3">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <h6 className="fw-400 f-14 p-black">Mood Over Time</h6>
                  <p className="fw-400 f-10 p-grey">
                    Track emotional patterns across journal entries
                  </p>
                </div>
                <div className="journal-category-tabs">
                  <ul className="nav tab-list" role="tablist">
                    <li className="nav-item">
                      <button
                        className="nav-link active"
                        data-bs-toggle="tab"
                        data-bs-target="#all"
                      >
                        All
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#work"
                      >
                        Work
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#sleep"
                      >
                        Sleep
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#relationships"
                      >
                        Relationships
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#health"
                      >
                        Health
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="tab-content mt-4">
              {/* ALL */}
              <div className="tab-pane fade show active" id="all">
                <figure className="charthappy">
                  <img src={graph1} alt />
                </figure>
              </div>
              {/* WORK */}
              <div className="tab-pane fade" id="work">
                <figure className="charthappy">
                  <img src={graph1} alt />
                </figure>
              </div>
              {/* SLEEP */}
              <div className="tab-pane fade" id="sleep">
                <figure className="charthappy">
                  <img src={graph1} alt />
                </figure>
              </div>
              {/* RELATIONSHIPS */}
              <div className="tab-pane fade" id="relationships">
                <figure className="charthappy">
                  <img src={graph1} alt />
                </figure>
              </div>
              {/* HEALTH */}
              <div className="tab-pane fade" id="health">
                <figure className="charthappy">
                  <img src={graph1} alt />
                </figure>
              </div>
            </div>
          </div>
          <div className="bg-white br-16 border p-4 mb-4">
            <div className="d-flex align-items-center gap-2">
              <figure className="m-0">
                <img src={graph} alt />
              </figure>
              <div>
                <h6 className="fw-400 f-14 p-black m-0">
                  Sensitive Data — Read‑Only Access
                </h6>
                <p className="fw-400 f-12 p-grey m-0">
                  Journal content cannot be edited. You can add private admin
                  notes only.
                </p>
              </div>
            </div>
            <div className="my-3">
              <button className="btn btn-grey-border me-2 p-grey fw-400 f-14">
                <i className="fa-solid fa-download me-2" />
                Download mood CSV
              </button>
              <button className="btn btn-orange text-white fw-400 f-14">
                <i className="fa-solid fa-user-doctor me-2" /> Export for
                clinician
              </button>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="usermanagement-journalcard">
            {/* Header */}
            <div className="journal-header">
              <h5>Journal Entries</h5>
              <div className="search-wrapper">
                <span>
                  <i className="fa-solid fa-magnifying-glass" />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search entries..."
                />
              </div>
            </div>
            {/* Entries */}
            <div className="journal-item">
              <div className="journal-title">
                😊 Feeling much better today...
              </div>
              <div className="journal-date">Jan 23, 2026 • 2:15 PM</div>
              <div className="journal-tags">
                <span className="tag-sleep">Sleep</span>
                <span className="tag-health">Health</span>
              </div>
            </div>
            <div className="journal-item">
              <div className="journal-title">
                😔 Work stress is overwhelming...
              </div>
              <div className="journal-date">Jan 22, 2026 • 9:45 PM</div>
              <div className="journal-tags">
                <span className="tag-work">Work</span>
              </div>
            </div>
            <div className="journal-item">
              <div className="journal-title">
                😊 Had a great conversation with...
              </div>
              <div className="journal-date">Jan 21, 2026 • 7:30 PM</div>
              <div className="journal-tags">
                <span className="tag-relationships">Relationships</span>
              </div>
            </div>
            <div className="journal-item">
              <div className="journal-title">😐 Another sleepless night...</div>
              <div className="journal-date">Jan 20, 2026 • 11:20 PM</div>
              <div className="journal-tags">
                <span className="tag-sleep">Sleep</span>
              </div>
            </div>
            <div className="journal-item">
              <div className="journal-title">
                😤 Frustrated with everything...
              </div>
              <div className="journal-date">Jan 19, 2026 • 4:15 PM</div>
              <div className="journal-tags">
                <span className="tag-work">Work</span>
                <span className="tag-relationships">Relationships</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journaling;
