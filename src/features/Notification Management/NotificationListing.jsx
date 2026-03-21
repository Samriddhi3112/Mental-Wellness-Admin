import React from 'react'

const NotificationListing = () => {
  return (
    <main className="main-content">
  <div className="container-fluid">
    <div className="d-flex align-items-center justify-content-between mb-5">
      <div className="d-flex align-items-center gap-2">
        <div className="br-12 border bg-white d-inline-block searchbar">
          <input type="text" placeholder="Search notifications..." className="w-100 searchinput" />
          <i className="fa-solid fa-magnifying-glass f-grey position-absolute magglass" />
        </div>
        <div className="d-inline-flex align-items-center gap-2 bg-white border-filter br-8 px-3 py-2">
          <i className="fa-solid fa-tag" />
          <p className="m-0 f-12 p-grey fw-500">Type</p>
        </div>
        <div className="d-inline-flex align-items-center gap-2 bg-white border-filter br-8 px-3 py-2">
          <i className="fa-solid fa-users" />
          <p className="m-0 f-12 p-grey fw-500">Audience</p>
        </div>
      </div>
      {/* <a href="notificcation-management-details.html" className="d-inline-flex align-items-center gap-2 btn btn-orange text-white f-14">
        <i className="fa-solid fa-plus" /> Create Notification
        </a> */}
    </div>
    <div className="customdatatable b-shadow">
      <div className="d-flex align-items-center justify-content-between bg-white p-3">
        <h6 className="fw-600 p-black f-16">Recent Notifications</h6>
        <p className="m-0 fw-400 f-14 p-grey">
          Sort by: <span className="fw-600 f-14 p-black">Date Created</span>
        </p>
      </div>
      <table className="border">
        <thead>
          <tr>
            {/* <th><input type="checkbox" /></th> */}
            <th>Title &amp; Message</th>
            <th>Type</th>
            <th>Audience</th>
            <th>Created</th>
            {/* <th>Actions</th> */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="d-flex align-items-start gap-2">
                <figure className="m-0">
                  <img src="images/heartBox.png" alt />
                </figure>
                <div>
                  <h6 className="fw-600 f-14 p-black mb-1">
                    Start your morning with gratitude
                  </h6>
                  <p className="m-0 fw-400 f-12 p-grey">
                    Taking a few moments each morning to reflect on what
                    you're grateful for can set a positive tone...
                  </p>
                </div>
              </div>
            </td>
            <td>
              <p className="fw-400 f-12 br-50 p-2 px-3 m-0 purple purple-bg d-inline-flex align-items-center gap-1">
                <i className="fa-solid fa-heart purple" /> Wellness
              </p>
            </td>
            <td>
              <div>
                <p className="m-0 p-black fw-600 f-14">Free Users</p>
                <p className="m-0 p-grey fw-400 f-12">12,847 recipients</p>
              </div>
            </td>
            <td>
              <div>
                <p className="m-0 p-grey fw-400 f-12">Today, 9:15 AM</p>
                <p className="m-0 p-grey fw-400 f-12">by Alex Rivera</p>
              </div>
            </td>
            {/* <td>
              <a href="notificcation-management-details.html" className="btn btn-orange-normal f-12 fw-400">View</a>
            </td> */}
          </tr>
          <tr>
            <td>
              <div className="d-flex align-items-start gap-2">
                <figure className="m-0">
                  <img src="images/reminder.png" alt />
                </figure>
                <div>
                  <h6 className="fw-600 f-14 p-black mb-1">
                    Don't forget your evening meditation
                  </h6>
                  <p className="m-0 fw-400 f-12 p-grey">
                    Your daily meditation streak is at 7 days! Take 5
                    minutes to continue your mindfulness journey.
                  </p>
                </div>
              </div>
            </td>
            <td>
              <p className="fw-400 f-12 br-50 p-2 px-3 m-0 purple purple-bg d-inline-flex align-items-center gap-1">
                <i className="fa-solid fa-heart purple" /> Wellness
              </p>
            </td>
            <td>
              <div>
                <p className="m-0 p-black fw-600 f-14">Free Users</p>
                <p className="m-0 p-grey fw-400 f-12">12,847 recipients</p>
              </div>
            </td>
            <td>
              <div>
                <p className="m-0 p-grey fw-400 f-12">Today, 9:15 AM</p>
                <p className="m-0 p-grey fw-400 f-12">by Alex Rivera</p>
              </div>
            </td>
            {/* <td>
              <a href="notificcation-management-details.html" className="btn btn-orange-normal f-12 fw-400">View</a>
            </td> */}
          </tr>
          <tr>
            <td>
              <div className="d-flex align-items-start gap-2">
                <figure className="m-0">
                  <img src="images/limited.png" alt />
                </figure>
                <div>
                  <h6 className="fw-600 f-14 p-black mb-1">
                    Limited offer: 50% off premium upgrade
                  </h6>
                  <p className="m-0 fw-400 f-12 p-grey">
                    Upgrade to premium today and unlock unlimited access to
                    our complete wellness library.
                  </p>
                </div>
              </div>
            </td>
            <td>
              <p className="fw-400 f-12 br-50 p-2 px-3 m-0 purple purple-bg d-inline-flex align-items-center gap-1">
                <i className="fa-solid fa-heart purple" /> Wellness
              </p>
            </td>
            <td>
              <div>
                <p className="m-0 p-black fw-600 f-14">Free Users</p>
                <p className="m-0 p-grey fw-400 f-12">12,847 recipients</p>
              </div>
            </td>
            <td>
              <div>
                <p className="m-0 p-grey fw-400 f-12">Today, 9:15 AM</p>
                <p className="m-0 p-grey fw-400 f-12">by Alex Rivera</p>
              </div>
            </td>
            {/* <td>
              <a href="notificcation-management-details.html" className="btn btn-orange-normal f-12 fw-400">View</a>
            </td> */}
          </tr>
          <tr>
            <td>
              <div className="d-flex align-items-start gap-2">
                <figure className="m-0">
                  <img src="images/exclusive.png" alt />
                </figure>
                <div>
                  <h6 className="fw-600 f-14 p-black mb-1">
                    Exclusive: New guided sleep stories
                  </h6>
                  <p className="m-0 fw-400 f-12 p-grey">
                    Premium members get early access to our latest
                    collection of sleep stories narrated by leading wellness
                    experts.
                  </p>
                </div>
              </div>
            </td>
            <td>
              <p className="fw-400 f-12 br-50 p-2 px-3 m-0 purple purple-bg d-inline-flex align-items-center gap-1">
                <i className="fa-solid fa-heart purple" /> Wellness
              </p>
            </td>
            <td>
              <div>
                <p className="m-0 p-black fw-600 f-14">Free Users</p>
                <p className="m-0 p-grey fw-400 f-12">12,847 recipients</p>
              </div>
            </td>
            <td>
              <div>
                <p className="m-0 p-grey fw-400 f-12">Today, 9:15 AM</p>
                <p className="m-0 p-grey fw-400 f-12">by Alex Rivera</p>
              </div>
            </td>
            {/* <td>
              <a href="notificcation-management-details.html" className="btn btn-orange-normal f-12 fw-400">View</a>
            </td> */}
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
  </div>
</main>

  )
}

export default NotificationListing