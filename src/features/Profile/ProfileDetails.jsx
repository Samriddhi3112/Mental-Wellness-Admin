import React from 'react'

const ProfileDetails = () => {
  return (
    <main className="main-content">
  <div className="container-fluid">
    <div className="mb-4 br-24 border b-shadow bg-white p-4">
      <div className="row">
        <div className="col-2">
          <div className="profile-upload">
            <div className="profile-image-wrapper">
              <img id="profilePreview" src="images/ProfilePicBig.png" alt="Profile" className="profile-image" />
              <label htmlFor="fileInput" className="profile-upload-btn">
                <img src="images/camera.svg" alt />
              </label>
              <input type="file" id="fileInput" accept="image/*" hidden />
            </div>
            <p className="profile-upload-text">Click to upload photo</p>
          </div>
        </div>
        <div className="col-10">
          <form action>
            <div className="form-group">
              <label htmlFor className="fw-600 f-14 p-grey"> Full Name</label>
              <input type="text" defaultValue="Alex Rivera" className="form-input" />
            </div>
            <div className="form-group">
              <label htmlFor className="fw-600 f-14 p-grey">
                Email Address</label>
              <input type="text" defaultValue="alex.rivera@mindfuladmin.com" className="form-input" />
            </div>
            <div className="form-group">
              <label htmlFor className="fw-600 f-14 p-grey"> Role</label>
              <p className="fw-700 f-14 d-inline-flex align-items-center gap-2 px-3 py-2 role-show br-16">
                <i className="fa-solid fa-crown" /> Super-admin
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div className="mb-4 br-24 border b-shadow bg-white p-4 mb-5">
      <div className="d-flex align-items-center justify-content-between mb-4">
        <div>
          <h6 className="fw-600 p-black f-16">Security Settings</h6>
          <p className="fw-400 p-grey f-12">
            Manage your password and authentication preferences
          </p>
        </div>
        <img src="images/shield.svg" alt />
      </div>
      <div className="mb-4 bg-grey br-16 p-3 d-flex align-items-center justify-content-between">
        <div>
          <h6 className="fw-700 p-black f-14 mb-1">Password</h6>
          <p className="fw-400 p-grey f-12 m-0">Last changed 45 days ago</p>
        </div>
        <a href="UpdateYourPassword.html" className="btn btn-orange text-white f-14 br-16">Change Password</a>
      </div>
    </div>
    <div className="d-flex align-items-center justify-content-end gap-5">
      <a href="#" className="fw-700 f-14 p-black">Cancel</a>
      <a href="#" className="btn btn-orange text-white f-14 br-16">Save Changes</a>
    </div>
  </div>
</main>

  )
}

export default ProfileDetails