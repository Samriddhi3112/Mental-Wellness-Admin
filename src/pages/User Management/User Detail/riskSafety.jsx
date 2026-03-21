import React from 'react'

const riskSafety = () => {
  return (
    <div>
  <div className="usermanagement-alertcard d-flex mb-4">
    {/* Icon */}
    <div className="me-3 mt-1">
      <i className="fa-solid fa-triangle-exclamation yellowbrown" />
    </div>
    {/* Content */}
    <div>
      <div className="alert-title">
        Your well-being is important screen shown
      </div>
      <div className="alert-subtext">
        Last triggered on January 23, 2026 at 3:24 PM
      </div>
      <div>
        <a href="#">View helpline actions</a>
        <a href="#">View consultation actions</a>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-8">
      <div className="bg-white border py-4 px-3 br-16 list-style-none">
        <div className="d-flex align-items-center gap-2 mb-3">
          <i className="fa-solid fa-shield-halved p-orange" />
          <p className="fw-400 f-16 p-black m-0">Emergency Prompts Log</p>
        </div>
        <div className="normal-table mb-4">
          <table>
            <thead>
              <tr>
                <th>Date/Time</th>
                <th>Trigger</th>
                <th>User Action</th>
                <th>Admin Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p className="m-0 fw-400 f-13 p-black">
                    Jan 23, 3:24 PM
                  </p>
                </td>
                <td>
                  <p className="m-0 fw-400 f-12 text-red">
                    Sleep pattern concern
                  </p>
                </td>
                <td>
                  <p className="m-0 d-flex align-items-center gap-2 fw-400 f-12 green">
                    Continued with AI
                  </p>
                </td>
                <td>
                  <p className="fw-400 f-12 p-grey m-0">
                    User declined immediate help
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="m-0 fw-400 f-13 p-black">
                    Jan 23, 3:24 PM
                  </p>
                </td>
                <td>
                  <p className="m-0 fw-400 f-12 text-red">
                    Anxiety keywords
                  </p>
                </td>
                <td>
                  <p className="m-0 d-flex align-items-center gap-2 fw-400 f-12 green">
                    Online
                  </p>
                </td>
                <td>
                  <p className="fw-400 f-12 p-grey m-0">
                    User declined immediate help
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="m-0 fw-400 f-13 p-black">
                    Jan 23, 3:24 PM
                  </p>
                </td>
                <td>
                  <p className="m-0 fw-400 f-12 text-red">
                    Sleep pattern concern
                  </p>
                </td>
                <td>
                  <p className="m-0 d-flex align-items-center gap-2 fw-400 f-12 green">
                    Online
                  </p>
                </td>
                <td>
                  <p className="fw-400 f-12 p-grey m-0">
                    User declined immediate help
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="bg-grey p-3 d-flex align-items-center justify-content-between">
            <p className="m-0 fw-400 f-12 p-grey">
              Showing 1 to 5 of 24 admins
            </p>
            <div className="d-flex align-items-center gap-1">
              <div className="pagination">
                <a href="#" className="d-inline-block px-3 py-2 br-8 border fw-400 f-12 bg-white">Previous</a>
                <a href="#" className="px-3 py-2 br-8 border fw-400 f-12 bg-white">1</a>
                <a href="#" className="px-3 py-2 br-8 border fw-400 f-12 bg-white">2</a>
                <a href="#" className="px-3 py-2 br-8 border fw-400 f-12 bg-white">3</a>
                <a href="#" className="px-3 py-2 br-8 border fw-400 f-12 bg-white">Next</a>
              </div>
            </div>
          </div>
        </div>
        <h6 className="fw-400 p-black f-16 mb-4">Safety Status</h6>
        <div className="row">
          <div className="col-6">
            <label htmlFor className="fw-400 f-12 p-grey mb-2">Current risk level</label>
            <select name id className="form-input">
              <option value>Low</option>
              <option value>Medium</option>
              <option value>High</option>
            </select>
          </div>
          <div className="col-6">
            <div>
              <h6 className="fw-400 f-14 p-grey mb-2 mt-3">
                Status tags
              </h6>
              <div className="d-flex align-items-center justify-content-between">
                <p className="fw-400 f-12 text-red m-0">
                  Consultation booked
                </p>
                <p className="fw-400 f-12 p-grey m-0">
                  Urgent follow‑up needed
                </p>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="my-3">
              <label htmlFor className="fw-400 f-12 p-grey mb-2">Clinical reviewer comments</label>
              <textarea name id rows={4} className="custom-textarea" defaultValue={"User shows moderate anxiety symptoms with sleep disturbances. Consultation scheduled for Jan 24. Monitor closely for escalation patterns.\n\n"} />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-4">
      <div className="bg-white border py-4 px-3 br-16 list-style-none mb-4">
        <div className="d-flex align-items-center gap-2 mb-3">
          <img src="images/handle.svg" alt />
          <p className="fw-400 f-16 p-black m-0">
            Immediate Support Shown
          </p>
        </div>
        <div className="bg-aqua py-3 px-2 br-12 mb-3 d-flex align-items-center justify-content-between">
          <div>
            <h6 className="fw-400 blue f-12">Emergency Help</h6>
            <p className="fw-400 blue f-10 m-0">
              Crisis support resources displayed
            </p>
          </div>
          <p className="fw-400 blue f-12 m-0">3 times</p>
        </div>
        <div className="bg-green py-3 px-2 br-12 mb-3 d-flex align-items-center justify-content-between">
          <div>
            <h6 className="fw-400 green f-12">Talk to Expert</h6>
            <p className="fw-400 green f-10 m-0">
              Professional consultation offered
            </p>
          </div>
          <p className="fw-400 green f-12 m-0">7 times</p>
        </div>
        <div className="bg-purple py-3 px-2 br-12 mb-3 d-flex align-items-center justify-content-between">
          <div>
            <h6 className="fw-400 usertag-purple f-12">
              Helpline Numbers
            </h6>
            <p className="fw-400 usertag-purple f-10 m-0">
              Crisis hotlines provided
            </p>
          </div>
          <p className="fw-400 usertag-purple f-12 m-0">2 times</p>
        </div>
        <div>
          <h6 className="fw-400 f-14 p-grey mb-3 mt-4">
            Last intervention
          </h6>
          <div>
            <p className="fw-400 f-12 p-grey m-0 mb-1">
              January 23, 3:24 PM
            </p>
            <p className="fw-400 f-10 p-grey m-0">
              Well‑being screen triggered by sleep assessment
              responses
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default riskSafety