import React from 'react'

const RiskRules = () => {
  return (
  <main className="main-content">
  <div className="container-fluid">
    <div className="bg-white br-24 p-4 border b-shadow mb-4">
      <div className="d-flex align-items-center gap-2 mb-4">
        <figure className="m-0">
          <img src="images/plusconfigure.svg" alt />
        </figure>
        <h6 className="m-0 fw-400 f-16 p-black">Configure New Risk Trigger</h6>
      </div>
      <div className="d-flex align-items-center gap-2">
        <form action className="d-flex align-items-center gap-3">
          <div>
            <label htmlFor className="f-grey f-14 fw-400 mb-1">Select Question</label>
            <select name id className="form-input">
              <option value>1. Low mood / Sadness</option>
              <option value>2. Low mood / Sadness</option>
              <option value>3. Low mood / Sadness</option>
            </select>
          </div>
          <div>
            <label htmlFor className="f-grey f-12 fw-400 mb-1">Trigger Condition</label>
            <select name id className="form-input">
              <option value>Answer = 'Nearly every day'</option>
              <option value>Answer = 'Nearly every day'</option>
              <option value>Answer = 'Nearly every day'</option>
            </select>
          </div>
          <div>
            <label htmlFor className="f-grey f-12 fw-400 mb-1">Mapped Issue</label>
            <select name id className="form-input">
              <option value>High Risk</option>
              <option value>High Risk</option>
              <option value>High Risk</option>
            </select>
          </div>
          <div>
            <label htmlFor className="f-grey f-10 fw-400 mb-1">Severity</label>
            <select name id className="form-input">
              <option value className="text-red">High</option>
              <option value className="text-red">High</option>
            </select>
          </div>
        </form>
        <div>
          <button className="btn btn-black text-white f-12 px-4 d-inline-flex">
            Save Rule
          </button>
        </div>
      </div>
    </div>
    <div className="normal-table mb-4">
      <table>
        <thead>
          <tr>
            <th>Question #</th>
            <th>Trigger Type</th>
            <th>Mental Issue</th>
            <th>Severity</th>
            <th>Action Required</th>
            <th>Manage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p className="fw-400 f-12 m-0 p-black">04 Low mood / Sadness</p>
            </td>
            <td>
              <div>
                <h6 className="purple fw-400 f-12">Answer choice</h6>
                <p className="p-grey fw-400 f-12 m-0">"Nearly every day"</p>
              </div>
            </td>
            <td>
              <p className="fw-400 f-12 m-0 p-grey">High Risk</p>
            </td>
            <td>
              <p className="m-0 d-flex align-items-center gap-2 fw-400 f-12 text-red">
                <i className="fa-solid fa-circle text-red f-6" />
                High
              </p>
            </td>
            <td>
              <p className="fw-400 f-12 m-0 p-grey">
                <i className="fa-solid fa-comment-medical text-red" /> Show
                helpline modal
              </p>
            </td>
            <td>
              <p className="p-grey fw-400 f-14 m-0 d-flex align-items-center gap-3">
                <i className="fa-solid fa-ellipsis-vertical" />
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="bg-grey p-3 d-flex align-items-center justify-content-between">
        <p className="m-0 fw-400 f-12 p-grey">Showing 1 to 5 of 24 admins</p>
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
    <div className="d-flex align-items-center gap-3">
      <div className="b-shadow bg-white br-24 border p-4 d-flex align-items-center gap-3 w-100">
        <figure className="m-0">
          <img src="images/HighRiskRulesIcon.svg" alt />
        </figure>
        <div>
          <h6 className="m-0 fw-400 f-12 f-grey">High Risk Rules</h6>
          <p className="m-0 fw-400 f-18 p-black">12 Active</p>
        </div>
      </div>
      <div className="b-shadow bg-white br-24 border p-4 d-flex align-items-center gap-3 w-100">
        <figure className="m-0">
          <img src="images/totaltriggersicon.svg" alt />
        </figure>
        <div>
          <h6 className="m-0 fw-400 f-12 f-grey">Total Triggers</h6>
          <p className="m-0 fw-400 f-18 p-black">48 Active</p>
        </div>
      </div>
      <div className="b-shadow bg-white br-24 border p-4 d-flex align-items-center gap-3 w-100">
        <figure className="m-0">
          <img src="images/IssuesMappedicon.svg" alt />
        </figure>
        <div>
          <h6 className="m-0 fw-400 f-12 f-grey">Issues Mapped</h6>
          <p className="m-0 fw-400 f-18 p-black">06 Domains</p>
        </div>
      </div>
      <div className="b-shadow bg-white br-24 border p-4 d-flex align-items-center gap-3 w-100">
        <figure className="m-0">
          <img src="images/TriggerRateIocn.svg" alt />
        </figure>
        <div>
          <h6 className="m-0 fw-400 f-12 f-grey">Trigger Rate</h6>
          <p className="m-0 fw-400 f-18 p-black">8.2% avg.</p>
        </div>
      </div>
    </div>
  </div>
</main>

  )
}

export default RiskRules