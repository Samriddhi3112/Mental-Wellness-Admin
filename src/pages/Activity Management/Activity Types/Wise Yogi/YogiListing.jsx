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

  const [selectedCategory, setSelectedCategory] = useState("Hatha Yoga");
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const categories = ["Daily Routine Guide", "Hatha Yoga", "Meditation"];
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
        category: selectedCategory,
        language: selectedLanguage,
        page: 1,
        limit: 10,
      }),
    );
  }, [dispatch, selectedCategory, selectedLanguage]);

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
            <ul className="nav nav-tabs mb-0">
              {categories.map((cat) => (
                <li className="nav-item" key={cat}>
                  <button
                    className={`nav-link ${
                      selectedCategory === cat ? "active" : ""
                    }`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>

            {/* 🔹 Right side (language filter + button) */}
            <div className="d-flex gap-3">
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="form-select"
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
          <div className="tab-content">
            <div className="tab-pane fade show active" id="all">
              <div className="row g-4">
                {videos.length > 0 ? (
                  videos.map((video) => (
                    <div className="col-md-4" key={video._id}>
                      <div className="video-card simple-card">
                        {/* 🔹 Thumbnail */}
                        <div className="video-thumbnail">
                          <img
                            src={
                              video.thumbnail || "/images/activity-bg-one.png"
                            }
                            alt={video.activityName}
                          />
                        </div>

                        {/* 🔹 Content */}
                        <div className="p-3">
                          <h6 className="mb-1">
                            {video.activityName || "Ocean Sunset Meditation"}
                          </h6>

                          <p className="text-muted small mb-2">
                            {video.description ||
                              "Find peace watching the sunset over calm waters"}
                          </p>

                          {/* 🔹 Footer */}
                          <div className="d-flex justify-content-between align-items-center">
                            <span className="tag">
                              {video.category || "Meditation"}
                            </span>

                            <NavLink
                              to={`/activity-management/wise-yogi/edit-yogi/${video._id}`}
                              className="edit-btn"
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
