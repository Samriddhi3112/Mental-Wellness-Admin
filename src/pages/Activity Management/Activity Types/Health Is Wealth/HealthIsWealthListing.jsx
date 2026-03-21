import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchYogiVideos } from "../../../../features/Activity Management/Wise Yogi/yogiSlice";
import { NavLink } from "react-router-dom";

const HealthIsWealthListing = () => {
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

  // Fetch videos when category or language changes
  useEffect(() => {
    dispatch(
      fetchYogiVideos({
        category: selectedCategory,
        language: selectedLanguage,
        page: 1,
        limit: 10,
      })
    );
  }, [dispatch, selectedCategory, selectedLanguage]);

  return (
    <main className="main-content">
      <div className="container-fluid">
        <div className="d-flex align-items-center justify-content-end mb-3">
          <NavLink
            to="/activity-management/healthListing/add-health"
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
          <div className="d-flex gap-3">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="form-select"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

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

        {/* Listing */}
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-danger">{error}</p>
        ) : (
          <div className="tab-content">
            <div className="tab-pane fade show active" id="all">
              <div className="row">
                {videos.length > 0 ? (
                  videos.map((video) => (
                    <div className="col-md-4 mb-4" key={video._id}>
                      <div className="mindful-card">
                        <div className="card-img-wrapper">
                          <img
                            src={video.thumbnail || "./images/MindfulBreathing.png"}
                            alt={video.activityName}
                          />
                          <span className="badge-live">Live</span>
                        </div>
                        <div className="card-body-custom">
                          <h5 className="title">{video.category}</h5>
                          <div className="time">
                            <i className="fa-regular fa-clock" />
                            <span>{video.duration || "10 min"}</span>
                          </div>
                          <hr className="wise-yogi" />
                          <div className="card-footer-custom d-flex justify-content-between align-items-center">
                            <span className="tag">{video.category}</span>
                            <NavLink
                              to={`/activity-management/healthListing/edit-health/${video._id}`}
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

export default HealthIsWealthListing;