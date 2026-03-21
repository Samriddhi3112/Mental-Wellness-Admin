import React from 'react'
import icon from "../../../assets/images/aibotIcon.svg"

const sessionQuota = () => {
  return (
    <div>
  <div className="usermanagement-aisummary mb-4">
    {/* Header */}
    <div className="ai-header">
      <div><img src={icon} alt /></div>
      <div>
        <div className="ai-title">AI Sessions with Kai</div>
        <div className="ai-subtitle">
          Track conversation usage and quota limits
        </div>
      </div>
    </div>
    {/* Stats Row */}
    <div className="row">
      <div className="col-md-3 ai-stat-item">
        <div className="ai-stat-value">47</div>
        <div className="ai-stat-label">Total Sessions</div>
      </div>
      <div className="col-md-3 ai-stat-item">
        <div className="ai-stat-value">142.5</div>
        <div className="ai-stat-label">Total Minutes</div>
      </div>
      <div className="col-md-3 ai-stat-item">
        <div className="ai-stat-value">3.2</div>
        <div className="ai-stat-label">Avg Duration (mins)</div>
      </div>
      <div className="col-md-3 ai-stat-item">
        <div className="ai-stat-value">87%</div>
        <div className="ai-stat-label">Free vs Paid Usage</div>
      </div>
    </div>
  </div>
  <div className="row mb-4">
    <div className="col-12">
      <div className="customdatatable b-shadow">
        <div className="d-flex align-items-center justify-content-between bg-white p-3">
          <h6 className="fw-600 p-black f-16">Recent AI Sessions</h6>
          <div className="action-buttons">
            {/* Filter Button */}
            {/* <button className="btn-filter-two">
              <i className="fa-solid fa-filter" />
              <span>Filter</span>
            </button> */}
            {/* Export Button */}
            {/* <button className="btn-export">
              <i className="fa-solid fa-download" />
              <span>Export</span>
            </button> */}
          </div>
          {/* <p class="m-0 fw-400 f-14 p-grey">
                Sort by:
                <span class="fw-600 f-14 p-black">Date Created</span>
              </p> */}
        </div>
        <table className="border">
          <thead>
            <tr>
              <th>Date &amp; Time</th>
              <th>Channel</th>
              <th>Duration</th>
              <th>Quota Usage</th>
              <th>Outcome</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div>
                  <p className="fw-400 f-14 p-black mb-1">Jan 23, 2026</p>
                  <p className="m-0 fw-400 f-12 f-grey">2:15 PM</p>
                </div>
              </td>
              <td>
                <p className="d-flex align-items-center gap-2">
                  <i className="fa-solid fa-microphone" />Voice
                </p>
              </td>
              <td>
                <p className>4:32</p>
              </td>
              <td>
                <div>
                  <p className="m-0 p-grey fw-400 f-10 d-flex align-items-center justify-content-between mb-2">
                    272s / 180s
                    <span className="fw-400 f-10 p-orange"> 151% </span>
                  </p>
                  <div className="usermanagement-progressbar">
                    <div className="progress">
                      <div className="progress-bar red" role="progressbar" />
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div>
                  <p className="m-0 green fw-400 f-12">Upgraded</p>
                </div>
              </td>
              <td>
                <a href="#" className="btn btn-orange-normal f-12 fw-400">View Transcript</a>
              </td>
            </tr>
            <tr>
              <td>
                <div>
                  <p className="fw-400 f-14 p-black mb-1">Jan 23, 2026</p>
                  <p className="m-0 fw-400 f-12 f-grey">2:15 PM</p>
                </div>
              </td>
              <td>
                <p className="d-flex align-items-center gap-2">
                  <i className="fa-solid fa-microphone" />Voice
                </p>
              </td>
              <td>
                <p className>4:32</p>
              </td>
              <td>
                <div>
                  <p className="m-0 p-grey fw-400 f-10 d-flex align-items-center justify-content-between mb-2">
                    272s / 180s
                    <span className="fw-400 f-10 p-orange"> 151% </span>
                  </p>
                  <div className="usermanagement-progressbar">
                    <div className="progress">
                      <div className="progress-bar green" role="progressbar" />
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div>
                  <p className="m-0 blue fw-400 f-12">Ended</p>
                </div>
              </td>
              <td>
                <a href="#" className="btn btn-orange-normal f-12 fw-400">View Transcript</a>
              </td>
            </tr>
            <tr>
              <td>
                <div>
                  <p className="fw-400 f-14 p-black mb-1">Jan 23, 2026</p>
                  <p className="m-0 fw-400 f-12 f-grey">2:15 PM</p>
                </div>
              </td>
              <td>
                <p className="d-flex align-items-center gap-2">
                  <i className="fa-solid fa-microphone" />Voice
                </p>
              </td>
              <td>
                <p className>4:32</p>
              </td>
              <td>
                <div>
                  <p className="m-0 p-grey fw-400 f-10 d-flex align-items-center justify-content-between mb-2">
                    272s / 180s
                    <span className="fw-400 f-10 p-orange"> 151% </span>
                  </p>
                  <div className="usermanagement-progressbar">
                    <div className="progress">
                      <div className="progress-bar red" role="progressbar" />
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div>
                  <p className="m-0 green fw-400 f-12">Upgraded</p>
                </div>
              </td>
              <td>
                <a href="#" className="btn btn-orange-normal f-12 fw-400">View Transcript</a>
              </td>
            </tr>
            <tr>
              <td>
                <div>
                  <p className="fw-400 f-14 p-black mb-1">Jan 23, 2026</p>
                  <p className="m-0 fw-400 f-12 f-grey">2:15 PM</p>
                </div>
              </td>
              <td>
                <p className="d-flex align-items-center gap-2">
                  <i className="fa-solid fa-microphone" />Voice
                </p>
              </td>
              <td>
                <p className>4:32</p>
              </td>
              <td>
                <div>
                  <p className="m-0 p-grey fw-400 f-10 d-flex align-items-center justify-content-between mb-2">
                    272s / 180s
                    <span className="fw-400 f-10 p-orange"> 151% </span>
                  </p>
                  <div className="usermanagement-progressbar">
                    <div className="progress">
                      <div className="progress-bar green" role="progressbar" />
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div>
                  <p className="m-0 blue fw-400 f-12">Ended</p>
                </div>
              </td>
              <td>
                <a href="#" className="btn btn-orange-normal f-12 fw-400">View Transcript</a>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="bg-grey p-3 d-flex align-items-center justify-content-between">
          <p className="m-0 fw-400 f-12 p-grey">
            Showing 1 to 5 of 24 admins
          </p>
          <div className="d-flex align-items-center gap-2">
            <div className="pagination d-flex align-items-center gap-2">
              <a href="#" className="d-inline-block px-3 py-2 br-8 border fw-400 f-12 bg-white">Previous</a>
              <a href="#" className="px-3 py-2 br-8 border fw-400 f-12 bg-white">1</a>
              <a href="#" className="px-3 py-2 br-8 border fw-400 f-12 bg-white">2</a>
              <a href="#" className="px-3 py-2 br-8 border fw-400 f-12 bg-white">3</a>
              <a href="#" className="px-3 py-2 br-8 border fw-400 f-12 bg-white">Next</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <div class="col-4">
          <div class="h-100">
            <div class="border bg-white br-16 p-4 mb-2">
              <h6 class="fw-400 f-14 p-black mb-2">Weekly Quota Usage</h6>
              <p class="fw-400 f-12 p-grey mb-2">
                Free vs paid minutes by week
              </p>

              <div class="mb-5"></div>
            </div>
            <div class="border bg-white br-16 px-3 py-3 mb-2">
              <div class="d-flex align-items-center gap-3 mb-3">
                <i class="fa-solid fa-chart-bar p-orange"></i>
                <div>
                  <h6 class="fw-400 f-12 p-black mb-0">
                    Upsell Opportunities
                  </h6>
                  <p class="fw-400 f-10 p-grey mb-2">
                    Paywall and upgrade prompts shown
                  </p>
                </div>
              </div>

              <div
                class="bg-grey mb-2 p-3 br-12 d-flex align-items-center justify-content-between"
              >
                <p class="m-0 fw-400 f-12 p-black">Paywall Shown</p>
                <p class="m-0 fw-400 f-12 p-orange">8 times</p>
              </div>
              <div
                class="bg-grey mb-2 p-3 br-12 d-flex align-items-center justify-content-between"
              >
                <p class="m-0 fw-400 f-12 p-black">Paywall Shown</p>
                <p class="m-0 fw-400 f-12 p-orange">8 times</p>
              </div>
              <div
                class="bg-grey mb-2 p-3 br-12 d-flex align-items-center justify-content-between"
              >
                <p class="m-0 fw-400 f-12 p-black">Paywall Shown</p>
                <p class="m-0 fw-400 f-12 p-orange">8 times</p>
              </div>
            </div>
          </div>
        </div> */}
  </div>
</div>

  )
}

export default sessionQuota