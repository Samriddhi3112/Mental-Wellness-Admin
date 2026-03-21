import React from "react";
import { useSelector } from "react-redux";
import kia from "../../../assets/images/kai.svg"

const Overview = () => {
  const { userDetail } = useSelector((state) => state.users);

  const user = userDetail?.user || {};

  return (
    <div className="tab-pane fade show active">
      <div className="row">
        {/* LEFT */}
        <div className="col-6">
          <div className="bg-white border py-4 px-3 br-16 list-style-none">
            <div className="d-flex align-items-center gap-2 mb-3">
              <i className="fa-solid fa-user p-orange" />
              <p className="fw-400 f-16 p-black m-0">Profile & Demographics</p>
            </div>

            <ul>
              <li className="mb-3">
                <p className="fw-400 f-12 p-grey mb-1">Name/Nickname</p>
                <h6 className="fw-400 f-14 p-black">{user?.name || "-"}</h6>
              </li>

              <li className="mb-3">
                <p className="fw-400 f-12 p-grey mb-1">Age</p>
                <h6 className="fw-400 f-14 p-black">
                  {user?.age ? `${user.age} years` : "-"}
                </h6>
              </li>

              <li className="mb-3">
                <p className="fw-400 f-12 p-grey mb-1">Sex/Gender</p>
                <h6 className="fw-400 f-14 p-black">{user?.gender || "-"}</h6>
              </li>

              <li className="mb-3">
                <p className="fw-400 f-12 p-grey mb-1">Marital Status</p>
                <h6 className="fw-400 f-14 p-black">
                  {user?.maritalStatus || "-"}
                </h6>
              </li>

              <li className="mb-3">
                <p className="fw-400 f-12 p-grey mb-1">Education Level</p>
                <h6 className="fw-400 f-14 p-black">
                  {user?.educationLevel || "-"}
                </h6>
              </li>

              <li className="mb-3">
                <p className="fw-400 f-12 p-grey mb-1">
                  Occupation/Employment Status
                </p>
                <h6 className="fw-400 f-14 p-black">
                  {user?.occupation || "-"}
                </h6>
              </li>

              <li className="mb-3">
                <p className="fw-400 f-12 p-grey mb-1">Socio-economic Status</p>
                <h6 className="fw-400 f-14 p-black">
                  {user?.socioEconomicStatus || "-"}
                </h6>
              </li>

              <li className="mb-3">
                <p className="fw-400 f-12 p-grey mb-1">Place of Residence</p>
                <h6 className="fw-400 f-14 p-black">
                  {user?.placeOfResidence || "-"}
                </h6>
              </li>

              <li className="mb-3">
                <p className="fw-400 f-12 p-grey mb-1">Family Type</p>
                <h6 className="fw-400 f-14 p-black">
                  {user?.familyType || "-"}
                </h6>
              </li>

              <li className="mb-3">
                <p className="fw-400 f-12 p-grey mb-1">Body Weight</p>
                <h6 className="fw-400 f-14 p-black">
                  {user?.bodyWeight ? `${user.bodyWeight} kg` : "-"}
                </h6>
              </li>

              <li className="mb-3">
                <p className="fw-400 f-12 p-grey mb-1">Height</p>
                <h6 className="fw-400 f-14 p-black">
                  {user?.height ? `${user.height} cm` : "-"}
                </h6>
              </li>

              <li className="mb-3">
                <p className="fw-400 f-12 p-grey mb-1">Living Arrangement</p>
                <h6 className="fw-400 f-14 p-black">
                  {user?.livingArrangement || "-"}
                </h6>
              </li>

              <li className="mb-3">
                <p className="fw-400 f-12 p-grey mb-1">
                  Language / Mother Tongue
                </p>
                <h6 className="fw-400 f-14 p-black">
                  {user?.language || "-"} ({user?.motherTongue || "-"})
                </h6>
              </li>
            </ul>
          </div>
        </div>

        {/* RIGHT */}
        <div className="col-6">
          <div className="bg-white border py-4 px-3 br-16 mb-4">
            <div className="d-flex align-items-center gap-2 mb-3">
              <i className="fa-solid fa-bullseye p-orange" />
              <p className="fw-400 f-16 p-black m-0">Main Focus & Concerns</p>
            </div>

            <div className="usermanagement-tags ps-1 mb-3">
              {user?.mainFocus && (
                <div className="usertag usertag-sleep">
                  <i className="fa-solid fa-moon" /> {user.mainFocus}
                </div>
              )}

              <div className="usertag usertag-normal">
                {user?.isAccountBlocked ? "Blocked" : "Active"}
              </div>
            </div>

            <div className="bg-grey p-3 br-12">
              <p className="fw-400 f-12 p-grey m-0">
                No detailed concerns data available
              </p>
            </div>
          </div>

          <div className="bg-white border py-4 px-3 br-16 list-style-none">
            <div className="d-flex align-items-center gap-2 mb-3">
              <i className="fa-solid fa-robot p-orange" />
              <p className="fw-400 f-16 p-black m-0">Companion &amp; Access</p>
            </div>
            <div className="d-flex align-items-center gap-2 mb-3">
              <figure className="m-0">
                <img src={kia} alt />
              </figure>
              <div>
                <p className="fw-400 f-12 p-black mb-0">Kai</p>
                <p className="fw-400 f-12 p-grey mb-0">
                  Your wellness companion
                </p>
              </div>
            </div>
            <ul className="mb-3">
              <li>
                <p className="fw-400 f-12 p-grey mb-2 d-flex align-items-center justify-content-between">
                  Voice<span className="fw-400 f-12 p-black">Aura</span>
                </p>
              </li>
              <li>
                <p className="fw-400 f-12 p-grey mb-2 d-flex align-items-center justify-content-between">
                  Voice<span className="fw-400 f-12 p-black">English (US)</span>
                </p>
              </li>
              <li>
                <p className="fw-400 f-12 p-grey mb-2 d-flex align-items-center justify-content-between">
                  Background Music
                  <span className="fw-400 f-12 p-black">Calm music</span>
                </p>
              </li>
            </ul>
            <button className="btn btn-trans-orange fw-400 f-14 w-100">
              <i className="fa-solid fa-sliders" /> Open avatar settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
