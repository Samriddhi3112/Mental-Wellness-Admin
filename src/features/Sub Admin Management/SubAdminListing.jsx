import React from 'react'

const SubAdminListing = () => {
  return (
    <main className="main-content">
  <div className="container-fluid">
    <div className="d-flex align-items-center gap-4 mb-4">
      <div className="bg-white br-16 p-3 w-100">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <figure className="m-0">
            <img src="images/Users.svg" alt />
          </figure>
          <p className="m-0 bg-green green br-50 px-2 py-1 d-inline-block f-12 fw-700">
            +12%
          </p>
        </div>
        <div>
          <h6 className="fw-700 f-20 p-black mb-0">24</h6>
          <p className="fw-400 f-14 p-grey m-0">Total Admins</p>
        </div>
      </div>
      <div className="bg-white br-16 p-3 w-100">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <figure className="m-0">
            <img src="images/GreenTick.svg" alt />
          </figure>
          <p className="m-0 bg-green green br-50 px-2 py-1 d-inline-block f-12 fw-700">
            Active
          </p>
        </div>
        <div>
          <h6 className="fw-700 f-20 p-black mb-0">18</h6>
          <p className="fw-400 f-14 p-grey m-0">Active Now</p>
        </div>
      </div>
      <div className="bg-white br-16 p-3 w-100">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <figure className="m-0">
            <img src="images/shieldBox.svg" alt />
          </figure>
          <p className="m-0 bg-purple purple br-50 px-2 py-1 d-inline-block f-12 fw-700">
            Roles
          </p>
        </div>
        <div>
          <h6 className="fw-700 f-20 p-black mb-0">6</h6>
          <p className="fw-400 f-14 p-grey m-0">Permission Roles</p>
        </div>
      </div>
    </div>
    <div className="d-flex align-items-center justify-content-between mb-4">
      <div className="d-inline-flex align-items-center gap-2 bg-white p-2 border br-8 fw-500 f-12 p-grey">
        <i className="fa-solid fa-filter" />
        <p className="m-0">All Roles</p>
      </div>
      <div className="d-flex align-items-center gap-2">
        <div className="d-inline-flex align-items-center gap-2 bg-white p-2 border br-8">
          <p className="m-0 fw-500 f-12 p-grey">Sort by: Recently Added</p>
        </div>
        {/* <a href="sub-admin-permissions.html" className="text-white f-12 fw-400 btn btn-black">Add Sub-Admin</a> */}
      </div>
    </div>
    <div className="normal-table">
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Admin</th>
            <th>Permissions</th>
            <th>Status</th>
            <th>Last Active</th>
            <th>Added On</th>
            {/* <th>Actions</th> */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
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
            <td>
              <p className="fw-400 f-12 bg-grey p-1 p-grey m-0 text-center d-inline-block">
                All Access
              </p>
            </td>
            <td>
              <p className="m-0 d-flex align-items-center gap-2 fw-400 f-12 green">
                <i className="fa-solid fa-circle green f-6" />
                Online
              </p>
            </td>
            <td>
              <p className="fw-400 f-12 m-0 p-grey">2 mins ago</p>
            </td>
            <td>
              <p className="fw-400 f-12 m-0 p-grey">Jan 15, 2023</p>
            </td>
            {/* <td>
              <p className="p-grey fw-400 f-14 m-0 d-flex align-items-center gap-3">
                <a href="sub-admin-permissions.html"><i className="fa-solid fa-pen-to-square" /></a>
                <a href="Sub-Admin-management-details.html">
                  <i className="fa-solid fa-eye" /></a>
              </p>
            </td> */}
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
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
            <td>
              <p className="fw-400 f-12 bg-grey p-1 p-grey m-0 text-center d-inline-block">
                All Access
              </p>
            </td>
            <td>
              <p className="m-0 d-flex align-items-center gap-2 fw-400 f-12 green">
                <i className="fa-solid fa-circle green f-6" />
                Online
              </p>
            </td>
            <td>
              <p className="fw-400 f-12 m-0 p-grey">2 mins ago</p>
            </td>
            <td>
              <p className="fw-400 f-12 m-0 p-grey">Jan 15, 2023</p>
            </td>
            {/* <td>
              <p className="p-grey fw-400 f-14 m-0 d-flex align-items-center gap-3">
                <a href="sub-admin-permissions.html"><i className="fa-solid fa-pen-to-square" /></a>
                <a href="Sub-Admin-management-details.html">
                  <i className="fa-solid fa-eye" /></a>
              </p>
            </td> */}
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
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
            <td>
              <p className="fw-400 f-12 bg-grey p-1 p-grey m-0 text-center d-inline-block">
                All Access
              </p>
            </td>
            <td>
              <p className="m-0 d-flex align-items-center gap-2 fw-400 f-12 green">
                <i className="fa-solid fa-circle green f-6" />
                Online
              </p>
            </td>
            <td>
              <p className="fw-400 f-12 m-0 p-grey">2 mins ago</p>
            </td>
            <td>
              <p className="fw-400 f-12 m-0 p-grey">Jan 15, 2023</p>
            </td>
            {/* <td>
              <p className="p-grey fw-400 f-14 m-0 d-flex align-items-center gap-3">
                <a href="sub-admin-permissions.html"><i className="fa-solid fa-pen-to-square" /></a>
                <a href="Sub-Admin-management-details.html">
                  <i className="fa-solid fa-eye" /></a>
              </p>
            </td> */}
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
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
            <td>
              <p className="fw-400 f-12 bg-grey p-1 p-grey m-0 text-center d-inline-block">
                All Access
              </p>
            </td>
            <td>
              <p className="m-0 d-flex align-items-center gap-2 fw-400 f-12 green">
                <i className="fa-solid fa-circle green f-6" />
                Online
              </p>
            </td>
            <td>
              <p className="fw-400 f-12 m-0 p-grey">2 mins ago</p>
            </td>
            <td>
              <p className="fw-400 f-12 m-0 p-grey">Jan 15, 2023</p>
            </td>
            {/* <td>
              <p className="p-grey fw-400 f-14 m-0 d-flex align-items-center gap-3">
                <a href="sub-admin-permissions.html"><i className="fa-solid fa-pen-to-square" /></a>
                <a href="Sub-Admin-management-details.html">
                  <i className="fa-solid fa-eye" /></a>
              </p>
            </td> */}
          </tr>
        </tbody>
      </table>
      <div className="bg-grey p-3 d-flex align-items-center justify-content-between">
        <p className="m-0 fw-400 f-12 p-grey">Showing 1 to 5 of 24 admins</p>
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
  </div>
</main>

  )
}

export default SubAdminListing