import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchYogiVideos } from "../../../../features/Activity Management/Wise Yogi/yogiSlice";
import { NavLink } from "react-router-dom";

const YogiListing = () => {
  const dispatch = useDispatch();
  const {
    videos = [],
    loading = false,
    error = null,
  } = useSelector((state) => state.yogi || {});

  const [selectedCategory, setSelectedCategory] = useState(
    "All",
  );
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const categories = ["All", "Daily Routine Guide", "Hatha Yoga", "Meditation"];
  const languageOptions = [
    "English",
    "Hindi",
    "Spanish",
    "French",
    "German",
    "Chinese",
    "Japanese",
    "Korean",
    "Portuguese",
    "Russian",
    "Arabic",
    "Italian",
    "Dutch",
    "Turkish",
    "Polish",
    "Vietnamese",
    "Thai",
    "Indonesian",
    "Malay",
    "Tagalog",
  ];

  useEffect(() => {
    dispatch(
      fetchYogiVideos({
        category: selectedCategory === "All" ? "" : selectedCategory,
        language: selectedCategory === "All" ? "" : selectedLanguage,
        page: 1,
        limit: 10,
      }),
    );
  }, [dispatch, selectedCategory, selectedLanguage]);

  // useEffect(() => {
  //   dispatch(
  //     fetchYogiVideos({
  //       category: selectedCategory,
  //       language: selectedLanguage,
  //       page: 1,
  //       limit: 10,
  //     }),
  //   );
  // }, [dispatch, selectedCategory, selectedLanguage]);

  return (
    <main className="main-content">
      <div className="container-fluid">
        <div className="d-flex align-items-center justify-content-end mb-3">
          <NavLink
            to="/activity-management/wise-yogi/add-yogi"
            className="d-inline-flex align-items-center gap-2 btn btn-orange text-white f-14 br-16 px-4"
          >
            <i className="fa-solid fa-plus" /> Add New
          </NavLink>
        </div>

        <div className="d-flex align-items-center justify-content-between mb-4">
          <div>
            <h6 className="fw-700 p-black f-24">Wise Yogi</h6>
            <p className="fw-400 p-grey f-14">
              Manage yoga and mindfulness sessions.
            </p>
          </div>

          {/* Filters */}
          <div className="video-tabs-wrapper d-flex align-items-center justify-content-between mb-4">
            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: "4px 10px",
                    fontSize: "11.5px",
                    borderRadius: "16px",
                    border: "none",
                    outline: "none",
                    backgroundColor:
                      selectedCategory === cat ? "#1f2a44" : "#eef1f5",
                    color: selectedCategory === cat ? "#fff" : "#555",
                    fontWeight: "500",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* 🔹 Right side (language filter + button) */}
            <div className="d-flex gap-3">
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                style={{
                  padding: "4px 10px",
                  fontSize: "11.5px",
                  borderRadius: "16px",
                  border: "none",
                  outline: "none",
                  backgroundColor: "#eef1f5",
                  color: "#555",
                  fontWeight: "500",
                  cursor: "pointer",
                  height: "28px",
                }}
              >
                {languageOptions.map((lang) => (
                  <option key={lang} value={lang}>
                    {lang}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Listing */}
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-danger">{error}</p>
        ) : (
          // <div className="tab-content">
          //             <div className="tab-pane fade show active" id="all">
          //               <div className="row g-4">
          //                 {videos.length > 0 ? (
          //                   videos.map((video) => (
          //                     <div className="col-md-4" key={video._id}>
          //                       <div className="video-card simple-card">
          //                         {/* 🔹 Thumbnail */}
          //                         <div className="video-thumbnail">
          //                           <img
          //                             src={
          //                               video.thumbnail || "/images/activity-bg-one.png"
          //                             }
          //                             alt={video.activityName}
          //                           />
          //                         </div>

          //                         {/* 🔹 Content */}
          //                         <div className="p-3">
          //                           <h6 className="mb-1">
          //                             {video.activityName || "Ocean Sunset Meditation"}
          //                           </h6>

          //                           <p className="text-muted small mb-2">
          //                             {video.description ||
          //                               "Find peace watching the sunset over calm waters"}
          //                           </p>

          //                           {/* 🔹 Footer */}
          //                           <div className="d-flex justify-content-between align-items-center">
          //                             <span className="tag">
          //                               {video.category || "Meditation"}
          //                             </span>

          //                             <NavLink
          //                               to={`/activity-management/wise-yogi/edit-yogi/${video._id}`}
          //                               className="edit-btn"
          //                             >
          //                               <i className="fa-solid fa-pen" />
          //                             </NavLink>
          //                           </div>
          //                         </div>
          //                       </div>
          //                     </div>
          //                   ))
          //                 ) : (
          //                   <p className="text-center">No sessions found</p>
          //                 )}
          //               </div>
          //             </div>
          //           </div>

          <div className="tab-content">
            <div className="tab-pane fade show active" id="all">
              <div className="row" style={{ margin: "0 -8px" }}>
                {videos.length > 0 ? (
                  videos.map((video) => (
                    <div
                      className="col-md-4"
                      key={video._id}
                      style={{ padding: "8px" }}
                    >
                      <div
                        className="video-card simple-card"
                        style={{
                          borderRadius: "10px",
                          overflow: "hidden",
                          boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
                        }}
                      >
                        {/* 🔹 Thumbnail */}
                        <div className="video-thumbnail">
                          <img
                            src={
                              video.thumbnail || "/images/activity-bg-one.png"
                            }
                            alt={video.activityName}
                            style={{
                              height: "170px", // 🔥 reduced
                              width: "100%",
                              objectFit: "cover",
                            }}
                          />
                        </div>

                        {/* 🔹 Content */}
                        <div style={{ padding: "10px" }}>
                          <h6
                            style={{
                              fontSize: "13px",
                              marginBottom: "4px",
                              fontWeight: "600",
                            }}
                          >
                            {video.activityName || "Ocean Sunset Meditation"}
                          </h6>

                          <p
                            style={{
                              fontSize: "11px",
                              color: "#777",
                              marginBottom: "6px",
                            }}
                          >
                            {video.description ||
                              "Find peace watching the sunset over calm waters"}
                          </p>

                          {/* 🔹 Footer */}
                          <div className="d-flex justify-content-between align-items-center">
                            <span
                              className="tag"
                              style={{
                                fontSize: "10px",
                                padding: "3px 8px",
                                borderRadius: "12px",
                              }}
                            >
                              {video.category || "Meditation"}
                            </span>

                            <NavLink
                              to={`/activity-management/wise-yogi/edit-yogi/${video._id}`}
                              className="edit-btn"
                              style={{
                                fontSize: "12px",
                                padding: "4px",
                              }}
                            >
                              <i className="fa-solid fa-pen" />
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-center">No sessions found</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default YogiListing;
