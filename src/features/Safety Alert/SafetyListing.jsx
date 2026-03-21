import React from 'react'

const SafetyListing = () => {
  return (
   <main className="main-content">
  <div className="container-fluid">
    <div className="mb-4 d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center gap-4">
        <div className="bg-white br-12 px-3 py-1 d-inline-flex align-items-center gap-4">
          <p className="m-0 fw-400 f-12">Risk Level:</p>
          <select name id className="none-para p-grey fw-400 f-12">
            <option value>All Level</option>
            <option value>All Level</option>
          </select>
        </div>
        {/* <div
        class="bg-white br-12 px-3 py-1 d-inline-flex align-items-center gap-4"
      >
        <p class="p-grey fw-400 f-12 m-0">Status:</p>
        <p class="p-grey fw-400 f-12 m-0">New</p>
        <p class="p-grey fw-400 f-12 m-0">In Progress</p>
        <p class="p-grey fw-400 f-12 m-0">Resolved</p>
      </div> */}
        <div className="status-tabs d-inline-block">
          <div className="bg-white br-12 px-3 py-1 d-inline-flex align-items-center gap-3">
            <span className="p-grey fw-400 f-12">Status:</span>
            <ul className="nav status-tab-list" role="tablist">
              <li className="nav-item">
                <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#new">
                  New
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link" data-bs-toggle="tab" data-bs-target="#inprogress">
                  In Progress
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link" data-bs-toggle="tab" data-bs-target="#resolved">
                  Resolved
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-white br-12 px-3 py-1 d-inline-flex align-items-center gap-4">
          <p className="m-0 fw-400 f-12">Risk Level:</p>
          <select name id className="none-para p-grey fw-400 f-12">
            <option value>English</option>
            <option value>Hindi</option>
          </select>
        </div>
      </div>
      <button className="btn btn-black text-white fw-400 f-14 py-2 br-12">
        <i className="fa-solid fa-download me-2" />
        Export Report
      </button>
    </div>
    <div className="tab-content mt-3">
      <div className="tab-pane fade show active" id="new">
        <div className="normal-table">
          <table>
            <thead>
              <tr>
                <th>User</th>
                <th>Risk Level</th>
                <th>Trigger Summary</th>
                <th>Last Interaction</th>
                <th>Reviewer</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <figure className="m-0">
                      <img src="images/SarahJenkins.svg" alt />
                    </figure>
                    <div>
                      <h6 className="fw-400 f-14 p-black m-0">Sarah Jenkins</h6>
                      <p className="fw-400 f-10 p-grey m-0">ID: #W-8829</p>
                    </div>
                  </div>
                </td>
                <td><p className="fw-400 f-14 text-red m-0">Critical</p></td>
                <td>
                  <p className="m-0 d-flex align-items-center gap-2 fw-400 f-14 p-black">
                    <i className="fa-solid fa-triangle-exclamation text-warning" />
                    Self-harm mention
                  </p>
                </td>
                <td>
                  <p className="fw-400 f-14 m-0 p-grey">2 mins ago</p>
                </td>
                <td>
                  <p className="fw-400 f-14 m-0 p-grey">Unassigned</p>
                </td>
                <td><p className="p-orange fw-400 f-14 m-0">New</p></td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <figure className="m-0">
                      <img src="images/SarahJenkins.svg" alt />
                    </figure>
                    <div>
                      <h6 className="fw-400 f-14 p-black m-0">Sarah Jenkins</h6>
                      <p className="fw-400 f-10 p-grey m-0">ID: #W-8829</p>
                    </div>
                  </div>
                </td>
                <td><p className="fw-400 f-14 text-red m-0">Critical</p></td>
                <td>
                  <p className="m-0 d-flex align-items-center gap-2 fw-400 f-14 p-black">
                    <i className="fa-solid fa-triangle-exclamation text-warning" />
                    Self-harm mention
                  </p>
                </td>
                <td>
                  <p className="fw-400 f-14 m-0 p-grey">2 mins ago</p>
                </td>
                <td>
                  <p className="fw-400 f-14 m-0 p-grey">Unassigned</p>
                </td>
                <td><p className="p-orange fw-400 f-14 m-0">New</p></td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <figure className="m-0">
                      <img src="images/SarahJenkins.svg" alt />
                    </figure>
                    <div>
                      <h6 className="fw-400 f-14 p-black m-0">Sarah Jenkins</h6>
                      <p className="fw-400 f-10 p-grey m-0">ID: #W-8829</p>
                    </div>
                  </div>
                </td>
                <td><p className="fw-400 f-14 text-red m-0">Critical</p></td>
                <td>
                  <p className="m-0 d-flex align-items-center gap-2 fw-400 f-14 p-black">
                    <i className="fa-solid fa-triangle-exclamation text-warning" />
                    Self-harm mention
                  </p>
                </td>
                <td>
                  <p className="fw-400 f-14 m-0 p-grey">2 mins ago</p>
                </td>
                <td>
                  <p className="fw-400 f-14 m-0 p-grey">Unassigned</p>
                </td>
                <td><p className="p-orange fw-400 f-14 m-0">New</p></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="tab-pane fade" id="inprogress">
        <div className="tab-pane fade show active" id="new">
          <div className="normal-table">
            <table>
              <thead>
                <tr>
                  <th>User</th>
                  <th>Risk Level</th>
                  <th>Trigger Summary</th>
                  <th>Last Interaction</th>
                  <th>Reviewer</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <figure className="m-0">
                        <img src="images/SarahJenkins.svg" alt />
                      </figure>
                      <div>
                        <h6 className="fw-400 f-14 p-black m-0">
                          Sarah Jenkins
                        </h6>
                        <p className="fw-400 f-10 p-grey m-0">ID: #W-8829</p>
                      </div>
                    </div>
                  </td>
                  <td><p className="fw-400 f-14 text-red m-0">Critical</p></td>
                  <td>
                    <p className="m-0 d-flex align-items-center gap-2 fw-400 f-14 p-black">
                      <i className="fa-solid fa-triangle-exclamation text-warning" />
                      Self-harm mention
                    </p>
                  </td>
                  <td>
                    <p className="fw-400 f-14 m-0 p-grey">2 mins ago</p>
                  </td>
                  <td>
                    <p className="fw-400 f-14 m-0 p-grey">Unassigned</p>
                  </td>
                  <td><p className="p-orange fw-400 f-14 m-0">New</p></td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <figure className="m-0">
                        <img src="images/SarahJenkins.svg" alt />
                      </figure>
                      <div>
                        <h6 className="fw-400 f-14 p-black m-0">
                          Sarah Jenkins
                        </h6>
                        <p className="fw-400 f-10 p-grey m-0">ID: #W-8829</p>
                      </div>
                    </div>
                  </td>
                  <td><p className="fw-400 f-14 text-red m-0">Critical</p></td>
                  <td>
                    <p className="m-0 d-flex align-items-center gap-2 fw-400 f-14 p-black">
                      <i className="fa-solid fa-triangle-exclamation text-warning" />
                      Self-harm mention
                    </p>
                  </td>
                  <td>
                    <p className="fw-400 f-14 m-0 p-grey">2 mins ago</p>
                  </td>
                  <td>
                    <p className="fw-400 f-14 m-0 p-grey">Unassigned</p>
                  </td>
                  <td><p className="p-orange fw-400 f-14 m-0">New</p></td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <figure className="m-0">
                        <img src="images/SarahJenkins.svg" alt />
                      </figure>
                      <div>
                        <h6 className="fw-400 f-14 p-black m-0">
                          Sarah Jenkins
                        </h6>
                        <p className="fw-400 f-10 p-grey m-0">ID: #W-8829</p>
                      </div>
                    </div>
                  </td>
                  <td><p className="fw-400 f-14 text-red m-0">Critical</p></td>
                  <td>
                    <p className="m-0 d-flex align-items-center gap-2 fw-400 f-14 p-black">
                      <i className="fa-solid fa-triangle-exclamation text-warning" />
                      Self-harm mention
                    </p>
                  </td>
                  <td>
                    <p className="fw-400 f-14 m-0 p-grey">2 mins ago</p>
                  </td>
                  <td>
                    <p className="fw-400 f-14 m-0 p-grey">Unassigned</p>
                  </td>
                  <td><p className="p-orange fw-400 f-14 m-0">New</p></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="tab-pane fade" id="resolved">
        <div className="tab-pane fade show active" id="new">
          <div className="normal-table">
            <table>
              <thead>
                <tr>
                  <th>User</th>
                  <th>Risk Level</th>
                  <th>Trigger Summary</th>
                  <th>Last Interaction</th>
                  <th>Reviewer</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <figure className="m-0">
                        <img src="images/SarahJenkins.svg" alt />
                      </figure>
                      <div>
                        <h6 className="fw-400 f-14 p-black m-0">
                          Sarah Jenkins
                        </h6>
                        <p className="fw-400 f-10 p-grey m-0">ID: #W-8829</p>
                      </div>
                    </div>
                  </td>
                  <td><p className="fw-400 f-14 text-red m-0">Critical</p></td>
                  <td>
                    <p className="m-0 d-flex align-items-center gap-2 fw-400 f-14 p-black">
                      <i className="fa-solid fa-triangle-exclamation text-warning" />
                      Self-harm mention
                    </p>
                  </td>
                  <td>
                    <p className="fw-400 f-14 m-0 p-grey">2 mins ago</p>
                  </td>
                  <td>
                    <p className="fw-400 f-14 m-0 p-grey">Unassigned</p>
                  </td>
                  <td><p className="p-orange fw-400 f-14 m-0">New</p></td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <figure className="m-0">
                        <img src="images/SarahJenkins.svg" alt />
                      </figure>
                      <div>
                        <h6 className="fw-400 f-14 p-black m-0">
                          Sarah Jenkins
                        </h6>
                        <p className="fw-400 f-10 p-grey m-0">ID: #W-8829</p>
                      </div>
                    </div>
                  </td>
                  <td><p className="fw-400 f-14 text-red m-0">Critical</p></td>
                  <td>
                    <p className="m-0 d-flex align-items-center gap-2 fw-400 f-14 p-black">
                      <i className="fa-solid fa-triangle-exclamation text-warning" />
                      Self-harm mention
                    </p>
                  </td>
                  <td>
                    <p className="fw-400 f-14 m-0 p-grey">2 mins ago</p>
                  </td>
                  <td>
                    <p className="fw-400 f-14 m-0 p-grey">Unassigned</p>
                  </td>
                  <td><p className="p-orange fw-400 f-14 m-0">New</p></td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <figure className="m-0">
                        <img src="images/SarahJenkins.svg" alt />
                      </figure>
                      <div>
                        <h6 className="fw-400 f-14 p-black m-0">
                          Sarah Jenkins
                        </h6>
                        <p className="fw-400 f-10 p-grey m-0">ID: #W-8829</p>
                      </div>
                    </div>
                  </td>
                  <td><p className="fw-400 f-14 text-red m-0">Critical</p></td>
                  <td>
                    <p className="m-0 d-flex align-items-center gap-2 fw-400 f-14 p-black">
                      <i className="fa-solid fa-triangle-exclamation text-warning" />
                      Self-harm mention
                    </p>
                  </td>
                  <td>
                    <p className="fw-400 f-14 m-0 p-grey">2 mins ago</p>
                  </td>
                  <td>
                    <p className="fw-400 f-14 m-0 p-grey">Unassigned</p>
                  </td>
                  <td><p className="p-orange fw-400 f-14 m-0">New</p></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

  )
}

export default SafetyListing