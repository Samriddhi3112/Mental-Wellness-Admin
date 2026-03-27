import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteMovie,
  fetchMovies,
} from "../../../../features/Activity Management/Movies/moviesSlice";
import img1 from "../../../../assets/images/activity-one.png";
import img2 from "../../../../assets/images/activity-two.png";
import img3 from "../../../../assets/images/activity-three.png";
import img4 from "../../../../assets/images/activity-four.png";
import { NavLink, useNavigate } from "react-router-dom";
import placeholder from "../../../../assets/images/alt Image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import DeleteModal from "../../../../components/DeleteModal";

const MoviesListing = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("all");
  const { movies = [] } = useSelector((state) => state.movies);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const handleDeleteClick = (id) => {
    setSelectedMovieId(id);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    dispatch(deleteMovie(selectedMovieId));
    setShowDeleteModal(false);
  };

  const getMoviesByCategory = (category) => {
    if (category === "all") return movies;
    return movies.filter(
      (item) =>
        item.category &&
        item.category.toLowerCase().trim() === category.toLowerCase().trim(),
    );
  };

  const tabs = ["all", "relaxation", "meditation", "sleep", "mindfulness"];

  return (
    <main className="main-content">
      <div className="container-fluid">
        <div className="p-3">
          <div className="row g-3 mb-3">
            {[
              {
                img: img1,
                value: movies.length,
                label: "Total Videos",
              },
              {
                img: img2,
                value: 0,
                label: "Published",
              },
              {
                img: img3,
                value: movies.filter((m) => m.pricingTier !== "free").length,
                label: "In Review",
              },
              {
                img: img4,
                value: movies.filter((m) => m.pricingTier !== "free").length,
                label: "Draft",
              },
            ].map((stat, i) => (
              <div className="col-md-3" key={i}>
                <div
                  className="shadow-sm"
                  style={{
                    padding: "14px",
                    borderRadius: "10px",
                    background: "#fff",
                  }}
                >
                  <img src={stat.img} alt="" style={{ width: 26 }} />
                  <div style={{ fontSize: "20px", fontWeight: "600" }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: "12px", color: "#777" }}>
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="d-flex justify-content-between align-items-center mb-3">
            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    padding: "5px 12px",
                    fontSize: "12px",
                    borderRadius: "20px",
                    border: "none",
                    backgroundColor: activeTab === tab ? "#1f2a44" : "#f3f4f6",
                    color: activeTab === tab ? "#fff" : "#444",
                    fontWeight: "500",
                    cursor: "pointer",
                  }}
                >
                  {tab === "all"
                    ? "All Videos"
                    : tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            <NavLink
              to="/activity-management/movies/upload"
              style={{
                backgroundColor: "#ff511a",
                color: "#fff",
                padding: "7px 14px",
                borderRadius: "6px",
                fontSize: "13px",
                fontWeight: "500",
                textDecoration: "none",
              }}
            >
              + Upload Video
            </NavLink>
          </div>

          <div className="row g-3">
            {getMoviesByCategory(activeTab).length > 0 ? (
              getMoviesByCategory(activeTab).map((item) => (
                <Card
                  key={item._id}
                  item={item}
                  onDelete={() => handleDeleteClick(item._id)}
                  onClick={() =>
                    navigate(
                      `/activity-management/movies/detail-movies/${item._id}`,
                    )
                  }
                />
              ))
            ) : (
              <div className="text-center py-5">
                <h6 style={{ color: "#888" }}>No data found</h6>
              </div>
            )}
          </div>
        </div>
      </div>

      <DeleteModal
        show={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        movieId={selectedMovieId}
        onConfirm={handleConfirmDelete}
      />
    </main>
  );
};

const Card = ({ item, onDelete, onClick }) => (
  <div className="col-md-4">
    <div
      onClick={onClick} // ✅ ADD THIS
      style={{
        borderRadius: "12px",
        overflow: "hidden",
        background: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        cursor: "pointer", // ✅ UX improve
      }}
    >
      <div style={{ position: "relative" }}>
        <img
          src={item.thumbnail || placeholder}
          alt=""
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
          }}
          onError={(e) => (e.currentTarget.src = placeholder)}
        />

        {/* badges */}
        <div
          style={{
            position: "absolute",
            top: 8,
            left: 8,
            display: "flex",
            gap: 6,
          }}
        >
          <span className="badge bg-success">Live</span>
          {item.pricingTier && (
            <span className="badge bg-light text-dark">{item.pricingTier}</span>
          )}
        </div>

        {/* delete */}
        <div
          onClick={(e) => {
            e.stopPropagation(); 
            onDelete();
          }}
          style={{
            position: "absolute",
            top: 8,
            right: 8,
            width: 28,
            height: 28,
            borderRadius: "50%",
            background: "#ff511a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <FontAwesomeIcon icon={faTrash} color="#fff" size="sm" />
        </div>

        {/* duration */}
        {item.duration && (
          <div
            style={{
              position: "absolute",
              bottom: 8,
              right: 8,
              background: "#000",
              color: "#fff",
              padding: "2px 6px",
              borderRadius: "4px",
              fontSize: "11px",
            }}
          >
            {item.duration}
          </div>
        )}
      </div>

      <div style={{ padding: "10px" }}>
        <h6 style={{ fontSize: "14px", marginBottom: "4px" }}>
          {item.activityName}
        </h6>
        <p style={{ fontSize: "12px", color: "#777", margin: 0 }}>
          {item.description}
        </p>
      </div>
    </div>
  </div>
);

export default MoviesListing;
