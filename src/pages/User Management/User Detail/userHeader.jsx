import React from "react";
import { useSelector } from "react-redux";
import userImg from "../../../assets/images/alexbig.png";

const UserHeader = () => {
  const { userDetail } = useSelector((state) => state.users);
  console.log(userDetail);
  

  return (
    <div className="usermanagementcard mb-4">
      <div className="usermanagement-left">
        <img
          src={userDetail?.profile_pic || userImg}
          className="usermanagement-avatar"
          alt="User"
        />

        <div>
          <div className="usermanagement-name">
            {userDetail?.user.name || "N/A"}
          </div>

          <div className="usermanagement-tags">
            {userDetail?.user.mainFocus && (
              <div className="usertag usertag-sleep">
                <i className="fa-solid fa-moon" /> {userDetail.user.mainFocus}
              </div>
            )}

            {/* {userDetail?.user.riskLevel && (
              <div className="usertag usertag-anxiety">
                <i className="fa-solid fa-wind" /> {userDetail.user.riskLevel}
              </div>
            )} */}

            {/* <div className="usertag usertag-normal">
              {userDetail?.user.status || "N/A"}
            </div> */}
          </div>
        </div>
      </div>

      <div className="usermanagement-right">
        <div className="info-block">
          <div className="info-label">Last Active</div>
          <div className="info-value">
            {userDetail?.user.lastLogin
              ? new Date(userDetail.user.lastLogin).toLocaleString()
              : "-"}
          </div>
        </div>

        <div className="info-block">
          <div className="info-label">Total Sessions</div>
          <div className="info-value">
            {userDetail?.user.totalSessions || 0}
          </div>
        </div>

        <div className="info-block">
          <div className="info-label">Joined Date</div>
          <div className="info-value">
            {userDetail?.user.createdAt
              ? new Date(userDetail.user.createdAt).toLocaleDateString()
              : "-"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHeader;