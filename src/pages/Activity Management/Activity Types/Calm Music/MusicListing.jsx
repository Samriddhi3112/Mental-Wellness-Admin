import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMusic,
  deleteMusic,
} from "../../../../features/Activity Management/Calm Music/musicSlice";
import DeleteModal from "../../../../components/DeleteModal";
import { toast } from "react-toastify";
import { FaTrash } from "react-icons/fa";

const MusicListing = () => {
  const dispatch = useDispatch();
  const { tracks, loading, error } = useSelector((state) => state.music);

  const [selectedMood, setSelectedMood] = useState("calm");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [trackToDelete, setTrackToDelete] = useState(null);

  // Fetch tracks whenever selectedMood changes
  useEffect(() => {
    dispatch(
      fetchMusic({ mood: selectedMood, status: "live", page: 1, limit: 10 }),
    );
  }, [dispatch, selectedMood]);

  // Open delete modal
  const handleDeleteClick = (trackId) => {
    setTrackToDelete(trackId);
    setShowDeleteModal(true);
  };

  // Confirm delete
  const handleConfirmDelete = async (trackId) => {
    try {
      await dispatch(deleteMusic(trackId)).unwrap();
      toast.success("Track deleted successfully!");
      setShowDeleteModal(false);
      setTrackToDelete(null);
      dispatch(
        fetchMusic({ mood: selectedMood, status: "live", page: 1, limit: 10 }),
      );
    } catch (err) {
      console.error("Delete failed:", err);
      toast.error("Delete failed. Check console for details.");
    }
  };

  return (
    <div className="col-lg-12">
      {/* Mood Filter Dropdown */}
      <div className="mb-4">
        <label className="form-label me-2">Filter by Mood:</label>
        <select
          className="form-select w-auto d-inline-block"
          value={selectedMood}
          onChange={(e) => setSelectedMood(e.target.value)}
        >
          <option value="calm">Calm</option>
          <option value="relaxing">Relaxing</option>
          <option value="soothing">Soothing</option>
        </select>
      </div>

      <div className="card">
        <div className="card-body">
          <div className="table-responsive">
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p className="text-danger">{error}</p>
            ) : (
              <table className="table content-table">
                <thead>
                  <tr>
                    <th>Track name</th>
                    <th>Length</th>
                    <th>Mood</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(tracks) && tracks.length > 0 ? (
                    tracks.map((track) => (
                      <tr key={track._id}>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="table-title m-0">
                              {track.trackName || "-"}
                              <span className="table-sub-title">
                                {track.description}
                              </span>
                            </span>
                          </div>
                        </td>
                        <td>{track.length || "-"}</td>
                        <td>
                          <span
                            className={`badge-${track.moodColor || "blue"}`}
                          >
                            {track.mood || "-"}
                          </span>
                        </td>
                        <td>
                          <span
                            className={`badge-light-${track.statusColor || "green"}`}
                          >
                            {track.status || "-"}
                          </span>
                        </td>
                        <td>
                          <FaTrash
                            style={{ cursor: "pointer", color: "red" }}
                            size={18}
                            onClick={() => handleDeleteClick(track._id)}
                            title="Delete track"
                          />
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="text-center">
                        No tracks found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>

      {/* Delete Modal */}
      <DeleteModal
        show={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        movieId={trackToDelete}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export default MusicListing;
