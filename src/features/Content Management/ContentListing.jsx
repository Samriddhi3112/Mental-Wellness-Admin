import React from 'react'

const ContentListing = () => {
  return (
    <main className="main-content">
  <div className="container-fluid">
    <div className="d-flex align-items-center justify-content-between mb-4">
      <div className="d-flex align-items-center gap-2">
        <div className="d-inline-flex align-items-center gap-2 bg-white p-2 border br-8">
          <p className="m-0 fw-500 f-12 p-grey">Publish Selected</p>
        </div>
        <div className="d-inline-flex align-items-center gap-2 bg-white p-2 border br-8">
          <p className="m-0 fw-500 f-12 p-grey">Archive Selected</p>
        </div>
        <div className="d-inline-flex align-items-center gap-2 bg-white p-2 border br-8 fw-500 f-12 p-grey">
          <i className="fa-solid fa-file-import" />
          <p className="m-0">Import DOCX</p>
        </div>
      </div>
      <div className="d-inline-flex align-items-center gap-2 bg-white p-2 border br-8">
        <p className="m-0 fw-500 f-12 p-grey">All Page Types</p>
      </div>
    </div>
    <div className="normal-table">
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Page Type</th>
            <th>Title / Name</th>
            <th>Status</th>
            <th>Last Updated</th>
            <th>Language</th>
            <th>Version</th>
            {/* <th>Actions</th> */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <p className="fw-500 f-14 m-0 p-black">About Us</p>
            </td>
            <td>
              <p className="fw-400 f-14 m-0 p-black">
                Welcome to Serene Wellness
              </p>
            </td>
            <td>
              <p className="px-3 py-1 br-50 bg-green green m-0 fw-600 f-12 d-inline-block">
                LIVE
              </p>
            </td>
            <td>
              <p className="fw-400 f-12 m-0 p-grey">2 mins ago</p>
            </td>
            <td>
              <p className="fw-400 f-12 m-0 p-grey">English (US)</p>
            </td>
            <td>
              <p className="fw-400 f-12 m-0 p-grey">v2.4.0</p>
            </td>
            {/* <td>
              <p className="p-grey fw-400 f-14 m-0 d-flex align-items-center gap-3">
                <a href="Content-Management-faq-edit.html"><i className="fa-solid fa-pen-to-square" /></a>
                <a href="content-management-faq.html"><i className="fa-solid fa-ellipsis-vertical" /></a>
              </p>
            </td> */}
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <p className="fw-500 f-14 m-0 p-black">FAQs</p>
            </td>
            <td>
              <p className="fw-400 f-14 m-0 p-black">
                Common Questions &amp; Support
              </p>
            </td>
            <td>
              <p className="px-3 py-1 br-50 bg-green green m-0 fw-600 f-12 d-inline-block">
                LIVE
              </p>
            </td>
            <td>
              <p className="fw-400 f-12 m-0 p-grey">2 mins ago</p>
            </td>
            <td>
              <p className="fw-400 f-12 m-0 p-grey">English (US)</p>
            </td>
            <td>
              <p className="fw-400 f-12 m-0 p-grey">v2.4.0</p>
            </td>
            {/* <td>
              <p className="p-grey fw-400 f-14 m-0 d-flex align-items-center gap-3">
                <a href="Content-Management-faq-edit.html"><i className="fa-solid fa-pen-to-square" /></a>
                <a href="content-management-faq.html"><i className="fa-solid fa-ellipsis-vertical" /></a>
              </p>
            </td> */}
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <p className="fw-500 f-14 m-0 p-black">Terms &amp; Conditions</p>
            </td>
            <td>
              <p className="fw-400 f-14 m-0 p-black">User Agreement 2024</p>
            </td>
            <td>
              <p className="px-3 py-1 br-50 bg-green green m-0 fw-600 f-12 d-inline-block">
                LIVE
              </p>
            </td>
            <td>
              <p className="fw-400 f-12 m-0 p-grey">2 mins ago</p>
            </td>
            <td>
              <p className="fw-400 f-12 m-0 p-grey">English (US)</p>
            </td>
            <td>
              <p className="fw-400 f-12 m-0 p-grey">v2.4.0</p>
            </td>
            {/* <td>
              <p className="p-grey fw-400 f-14 m-0 d-flex align-items-center gap-3">
                <a href="Content-Management-faq-edit.html"><i className="fa-solid fa-pen-to-square" /></a>
                <a href="content-management-faq.html"><i className="fa-solid fa-ellipsis-vertical" /></a>
              </p>
            </td> */}
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <p className="fw-500 f-14 m-0 p-black">Privacy Policy</p>
            </td>
            <td>
              <p className="fw-400 f-14 m-0 p-black">Data Protection &amp; GDPR</p>
            </td>
            <td>
              <p className="px-3 py-1 br-50 bg-green green m-0 fw-600 f-12 d-inline-block">
                LIVE
              </p>
            </td>
            <td>
              <p className="fw-400 f-12 m-0 p-grey">2 mins ago</p>
            </td>
            <td>
              <p className="fw-400 f-12 m-0 p-grey">English (US)</p>
            </td>
            <td>
              <p className="fw-400 f-12 m-0 p-grey">v2.4.0</p>
            </td>
            {/* <td>
              <p className="p-grey fw-400 f-14 m-0 d-flex align-items-center gap-3">
                <a href="Content-Management-faq-edit.html"><i className="fa-solid fa-pen-to-square" /></a>
                <a href="content-management-faq.html"><i className="fa-solid fa-ellipsis-vertical" /></a>
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

export default ContentListing