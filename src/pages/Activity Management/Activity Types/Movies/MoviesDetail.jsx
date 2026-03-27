import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovieById } from "../../../../features/Activity Management/Movies/moviesSlice";

const MoviesDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { movieDetail, loading } = useSelector((state) => state.movies);
  console.log(movieDetail, "MD");

  useEffect(() => {
    if (id) {
      dispatch(getMovieById(id));
    }
  }, [dispatch, id]);

  if (loading) {
    return <div className="text-center py-5">Loading...</div>;
  }

  return (
    <main className="main-content">
      <div className="container-fluid activity-screen-five">
        <div className="row g-4">
          {/* LEFT */}
          <div className="col-lg-8">
            <div className="video-box mb-4">
              <video
                className="img-fluid w-100"
                controls
                poster={movieDetail?.thumbnail}
                style={{
                  maxHeight: "400px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              >
                <source src={movieDetail?.fileUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="card-custom">
              <div className="d-flex gap-2 mb-3">
                <span className="badge-soft bg-warning text-dark">
                  {movieDetail?.status?.isBlocked ? "Blocked" : "Active"}
                </span>

                <span
                  className="badge-soft text-white"
                  style={{
                    background: "#e6d5ff",
                    color: "#6f42c1",
                  }}
                >
                  {movieDetail?.type || "Premium"}
                </span>
              </div>

              <h4>{movieDetail?.title}</h4>

              <p className="text-muted">{movieDetail?.description}</p>

              <div className="row mt-4">
                <div className="col-md-6">
                  <p>
                    <strong>Duration</strong>
                    <br />
                    {movieDetail?.duration || "N/A"}
                  </p>

                  <p>
                    <strong>Language</strong>
                    <br />
                    {movieDetail?.language || "N/A"}
                  </p>
                </div>

                <div className="col-md-6">
                  <p>
                    <strong>Category</strong>
                    <br />
                    {movieDetail?.category || "N/A"}
                  </p>

                  <p>
                    <strong>Uploaded by</strong>
                    <br />
                    {movieDetail?.uploadedBy || "N/A"}
                  </p>
                </div>
              </div>

              <hr />

              <h6>Tags &amp; Focus Areas</h6>

              <div className="d-flex gap-2 flex-wrap">
                {movieDetail?.tags?.length > 0 ? (
                  movieDetail.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="tag bg-primary-subtle text-primary"
                    >
                      {tag}
                    </span>
                  ))
                ) : (
                  <span className="text-muted">No tags</span>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-lg-4">
            <div className="card-custom mt-4">
              <h6 className="mb-3">Review Notes</h6>

              <textarea
                className="form-control mb-3"
                rows={4}
                placeholder="Add your review comments here..."
              />

              <button className="btn btn-orange w-100 mb-2">
                Approve &amp; Publish
              </button>

              <button className="btn dan w-100">Reject</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MoviesDetail;
