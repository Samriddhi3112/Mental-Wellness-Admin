import React from 'react'
import activeUsersImg from "../../assets/images/active-users-today.png";
import sessionsImg from "../../assets/images/sessions-in-progress.png";
import reviewImg from "../../assets/images/awaiting-review.png";
import quotaImg from "../../assets/images/near-free-quota.png";
import graphImg from "../../assets/images/graph.png";

const dashboard = () => {
  return (
    <main className="main-content">
  <div className="container-fluid">
    {/* Dashboard Stats */}
    <div className="row mb-4">
      <div className="col-xl-3 col-md-6 mb-4">
        <div className="stats-card">
          <div className="stats-icon">
            <img src={activeUsersImg} alt />
          </div>
          <div className="stats-content">
            <p className="stats-label">Active Users Today</p>
            <h3 className="stats-number">12,842</h3>
            <span className="stats-badge badge-success">
              <i className="fas fa-arrow-up" /> 8.4%
            </span>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-md-6 mb-4">
        <div className="stats-card">
          <div className="stats-icon">
            <img src={sessionsImg} alt />
          </div>
          <div className="stats-content">
            <p className="stats-label">Sessions in Progress</p>
            <h3 className="stats-number">1,402</h3>
            <span className="stats-sublabel">Live healing sessions</span>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-md-6 mb-4">
        <div className="stats-card">
          <div className="stats-icon">
            <img src={reviewImg} alt />
          </div>
          <div className="stats-content">
            <p className="stats-label">Awaiting Review</p>
            <h3 className="stats-number">48</h3>
            <span className="stats-sublabel text-danger">High priority items</span>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-md-6 mb-4">
        <div className="stats-card">
          <div className="stats-icon">
            <img src={quotaImg} alt />
          </div>
          <div className="stats-content">
            <p className="stats-label">Near Free Quota</p>
            <h3 className="stats-number">314</h3>
            <span className="stats-sublabel text-danger">Conversion ready</span>
          </div>
        </div>
      </div>
    </div>
    {/* Usage Chart & Safety Alerts */}
    <div className="row mb-4">
      <div className="col-lg-8 mb-4">
        <div className="card chart-card">
          <div className="card-header">
            <div>
              <h5 className="card-title">Usage over time</h5>
              <p className="card-subtitle">Platform engagement trends</p>
            </div>
            <div className="chart-filters">
              <select className="form-select form-select-sm">
                <option>All Personas</option>
                <option>Sleep</option>
                <option>Anxiety</option>
              </select>
              <select className="form-select form-select-sm">
                <option>English</option>
                <option>Spanish</option>
              </select>
            </div>
          </div>
          <div className="card-body">
            <img className="graph-image" src={graphImg} alt />
          </div>
        </div>
      </div>
      <div className="col-lg-4 mb-4">
        <div className="card safety-alerts-card">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h5 className="card-title mb-0">Safety Alerts</h5>
            <a href="#" className="btn-link">View all</a>
          </div>
          <div className="card-body">
            <div className="alert-item alert-critical">
              <div className="alert-badge">Critical Risk</div>
              <div className="alert-time">22:45</div>
              <h6>User #8972 Flagged</h6>
              <p>Keywords detected: suicidal intent entry.</p>
              <a href="#" className="alert-link">View details »</a>
            </div>
            <div className="alert-item alert-moderate">
              <div className="alert-badge">Moderate</div>
              <div className="alert-time">18:22</div>
              <h6>Repeated Login Failure</h6>
              <p>Account security check needed for IP 12...</p>
              <a href="#" className="alert-link">Review IP »</a>
            </div>
            <div className="alert-item alert-info">
              <div className="alert-badge">Info</div>
              <div className="alert-time">12:09</div>
              <h6>New Therapist Signup</h6>
              <p>Dr. Sarah Jenkins submitted credentials.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Top Performing Content */}
    <div className="row mb-4">
      <div className="col-lg-8 mb-4">
        <div className="card">
          <div className="card-header d-flex justify-content-between align-items-center">
            <div>
              <h5 className="card-title mb-0">Top Performing Content</h5>
            </div>
            <button className="btn btn-primary btn-sm">
              <i className="fas fa-plus me-2" /> Manage Content
            </button>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table content-table">
                <thead>
                  <tr>
                    <th>Content</th>
                    <th>Type</th>
                    <th>Views</th>
                    <th>Completion</th>
                    <th>Likes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <img src="https://via.placeholder.com/50x50/FFB74D/ffffff?text=MZ" className="content-thumb me-3" alt />
                        <span>Morning Zen Flow</span>
                      </div>
                    </td>
                    <td>
                      <span className="badge bg-info">Video Meditation</span>
                    </td>
                    <td>4.2k</td>
                    <td>
                      <div className="progress" style={{height: 6}}>
                        <div className="progress-bar bg-success" style={{width: '88%'}} />
                      </div>
                      <small>88%</small>
                    </td>
                    <td><span className="text-danger">1.2k</span></td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <img src="https://via.placeholder.com/50x50/66BB6A/ffffff?text=DS" className="content-thumb me-3" alt />
                        <span>Deep Sleep Waves</span>
                      </div>
                    </td>
                    <td>
                      <span className="badge bg-warning">Audio Soundscape</span>
                    </td>
                    <td>3.8k</td>
                    <td>
                      <div className="progress" style={{height: 6}}>
                        <div className="progress-bar bg-success" style={{width: '92%'}} />
                      </div>
                      <small>92%</small>
                    </td>
                    <td><span className="text-danger">942</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* Admin Activity */}
      <div className="col-lg-4 mb-4">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title mb-0">Admin Activity</h5>
          </div>
          <div className="card-body">
            <div className="activity-item">
              <img src="https://ui-avatars.com/api/?name=Sarah+L&background=4CAF50&color=fff" className="activity-avatar" alt />
              <div className="activity-content">
                <p className="mb-1">
                  <strong>Sarah L.</strong> approved "Anxiety Relief 101"
                </p>
                <small className="text-muted">Today at 10:45 AM</small>
              </div>
            </div>
            <div className="activity-item">
              <img src="https://ui-avatars.com/api/?name=James+K&background=2196F3&color=fff" className="activity-avatar" alt />
              <div className="activity-content">
                <p className="mb-1">
                  <strong>James K.</strong> increased quota for 12 users
                </p>
                <small className="text-muted">Today at 09:12 AM</small>
              </div>
            </div>
            <div className="activity-item">
              <img src="https://ui-avatars.com/api/?name=Emma+W&background=9C27B0&color=fff" className="activity-avatar" alt />
              <div className="activity-content">
                <p className="mb-1">
                  <strong>Emma W.</strong> updated persona mapping
                </p>
                <small className="text-muted">Yesterday at 04:30 PM</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

  )
}

export default dashboard