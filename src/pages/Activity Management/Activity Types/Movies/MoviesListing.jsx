import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMovie, fetchMovies } from "../../../../features/Activity Management/Movies/moviesSlice";
import img1 from "../../../../assets/images/activity-one.png";
import img2 from "../../../../assets/images/activity-two.png";
import img3 from "../../../../assets/images/activity-three.png";
import img4 from "../../../../assets/images/activity-four.png";
import { NavLink } from "react-router-dom";
import placeholder from "../../../../assets/images/alt Image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import DeleteModal from "../../../../components/DeleteModal";

const MoviesListing = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("all");
  const { movies } = useSelector((state) => state.movies);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  // Fetch movies on mount
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  // Delete handler
  const handleDeleteClick = (id) => {
    setSelectedMovieId(id);
    setShowDeleteModal(true);
  };

  // Filter movies by category
  const getMoviesByCategory = (category) => {
    if (!movies || movies.length === 0) return [];
    if (category === "all") return movies;
    return movies.filter(
      (item) =>
        item.category &&
        item.category.toLowerCase().trim() === category.toLowerCase().trim(),
    );
  };

  const tabs = ["all", "relaxation", "meditation", "sleep", "mindfulness"];

  const handleConfirmDelete = () => {
    console.log("Delete ID:", selectedMovieId);

    dispatch(deleteMovie(selectedMovieId))

    setShowDeleteModal(false);
  };

  return (
    <main className="main-content">
      <div className="container-fluid">
        <div className="p-4">
          {/* Stats */}
          <div className="row g-4 mb-4">
            <div className="col-md-3">
              <div className="stats shadow-sm">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <img src={img1} alt="" />
                </div>
                <div className="display-6 fw-bold">{movies.length}</div>
                <div className="sub-title">Total Videos</div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="stats shadow-sm">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <img src={img2} alt="" />
                </div>
                <div className="display-6 fw-bold">0</div>
                <div className="sub-title">Published</div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="stats shadow-sm">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <img src={img3} alt="" />
                </div>
                <div className="display-6 fw-bold">
                  {movies.filter((m) => m.pricingTier !== "free").length}
                </div>
                <div className="sub-title">In Review</div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="stats shadow-sm">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <img src={img4} alt="" />
                </div>
                <div className="display-6 fw-bold">
                  {movies.filter((m) => m.pricingTier !== "free").length}
                </div>
                <div className="sub-title">Draft</div>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="video-tabs-wrapper d-flex align-items-center justify-content-between mb-4">
            <ul className="nav nav-tabs mb-4" id="videoTab" role="tablist">
              {tabs.map((tab) => (
                <li className="nav-item" key={tab}>
                  <button
                    className={`nav-link ${activeTab === tab ? "active" : ""}`}
                    onClick={() => setActiveTab(tab)}
                    role="tab"
                    aria-selected={activeTab === tab}
                  >
                    {tab === "all"
                      ? "All Videos"
                      : tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                </li>
              ))}
            </ul>

            <div className="d-flex gap-2">
              {/* <select
                className="form-select form-select-sm"
                style={{ width: 150 }}
              >
                <option>All Status</option>
              </select> */}

              <NavLink
                to="/activity-management/movies/upload"
                className="btn btn-primary btn-sm d-bl"
                style={{
                  width: 150,
                  borderColor: "var(--primary-color)",
                  borderRadius: "8px",
                  fontWeight: "600",
                  padding: "10px 20px",
                  transition: " var(--transition)",
                  fontSize: "14px",
                }}
              >
                + Upload Video
              </NavLink>
            </div>
          </div>

          {/* Tab Content */}
          <div className="tab-content">
            {tabs.map((tab) => {
              const data = getMoviesByCategory(tab);
              return (
                <div
                  key={tab}
                  className={`tab-pane fade ${
                    activeTab === tab ? "show active" : ""
                  }`}
                >
                  <div className="row g-4">
                    {data.length > 0 ? (
                      data.map((item) => (
                        <Card
                          item={item}
                          key={item._id}
                          onDelete={() => handleDeleteClick(item._id)}
                        />
                      ))
                    ) : (
                      <div className="col-12 text-center py-5">
                        <h6 className="text-muted">No data found</h6>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Delete Modal */}
      <DeleteModal
        show={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        movieId={selectedMovieId}
        onConfirm={handleConfirmDelete}
      />
    </main>
  );
};

// Reusable Card
const Card = ({ item, onDelete }) => (
  <div className="col-md-4">
    <div className="video-card position-relative overflow-hidden">
      <div className="video-thumbnail position-relative">
        <img
          style={{ height: "247px" }}
          src={item.thumbnail || placeholder}
          alt={item.activityName || "Movie Thumbnail"}
          className="w-100"
          onError={(e) => (e.currentTarget.src = placeholder)}
        />

        {/* Top-left badges */}
        <div className="position-absolute top-0 start-0 p-2 d-flex gap-2">
          <span className="badge bg-success">Live</span>
          {item.pricingTier && (
            <span className="badge bg-light text-dark text-capitalize">
              {item.pricingTier}
            </span>
          )}
        </div>

        <div
          onClick={onDelete}
          title="Delete"
          style={{
            cursor: "pointer",
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            backgroundColor: "#ff511a",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: "8px",
            right: "8px",
          }}
        >
          <FontAwesomeIcon icon={faTrash} color="white" size="sm" />
        </div>

        {/* Duration */}
        {item.duration && (
          <div className="position-absolute bottom-0 end-0 m-2 px-2 py-1 bg-dark text-white rounded">
            {item.duration}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-3">
        <h6 className="mb-1">{item.activityName}</h6>
        <p className="mb-0 text-muted">{item.description}</p>
      </div>
    </div>
  </div>
);

export default MoviesListing;
