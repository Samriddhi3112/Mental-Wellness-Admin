import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  fetchSingleYogi,
  updateYogi,
  uploadFileToS3,
} from "../../../../features/Activity Management/Wise Yogi/yogiSlice";
import { toast } from "react-toastify";

const EditYogi = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { singleYogi, loading, error } = useSelector((state) => state.yogi);

  const [formData, setFormData] = useState({
    title: "",
    duration: "",
    category: "",
    description: "",
    requirements: "",
    thumbnail: "",
    fileUrl: "",
    focusPersonas: [],
    language: "",
    price: 0,
    pricingTier: "free",
    tags: [],
  });

  const [uploading, setUploading] = useState({
    thumbnail: false,
    fileUrl: false,
  });

  // Fetch Yogi data
  useEffect(() => {
    if (id) dispatch(fetchSingleYogi(id));
  }, [dispatch, id]);

  // Prefill form
  useEffect(() => {
    if (singleYogi) {
      setFormData({
        title: singleYogi.activityName || "",
        duration: singleYogi.duration || "",
        category: singleYogi.category || "",
        description: singleYogi.description || "",
        requirements: singleYogi.requirements || "",
        thumbnail: singleYogi.thumbnail || "",
        fileUrl: singleYogi.fileUrl || "",
        focusPersonas: singleYogi.focusPersonas || [],
        language: singleYogi.language || "",
        price: singleYogi.price || 0,
        pricingTier: singleYogi.pricingTier || "free",
        tags: singleYogi.tags || [],
      });
    }
  }, [singleYogi]);

  const handleChange = async (e) => {
    const { name, value, files } = e.target;

    if (files) {
      const file = files[0];
      if (!file) return;

      setUploading((prev) => ({ ...prev, [name]: true }));
      try {
        const fileUrl = await dispatch(uploadFileToS3(file)).unwrap();
        setFormData((prev) => ({ ...prev, [name]: fileUrl }));
        toast.success(`${name} uploaded successfully!`);
      } catch (err) {
        console.error(err);
        toast.error(`Failed to upload ${name}`);
      } finally {
        setUploading((prev) => ({ ...prev, [name]: false }));
      }
    } else if (name === "tags" || name === "focusPersonas") {
      // handle array inputs comma separated
      setFormData((prev) => ({
        ...prev,
        [name]: value.split(",").map((v) => v.trim()),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        activityName: formData.title,
        duration: formData.duration,
        category: formData.category,
        description: formData.description,
        requirements: formData.requirements,
        thumbnail: formData.thumbnail,
        fileUrl: formData.fileUrl,
        focusPersonas: formData.focusPersonas,
        language: formData.language,
        price: formData.price,
        pricingTier: formData.pricingTier,
        tags: formData.tags,
      };

      await dispatch(updateYogi({ id, payload })).unwrap();
      toast.success("Yogi video updated successfully!");
      navigate("/activity-management/wise-yogi");
    } catch (err) {
      console.error(err);
      toast.error("Failed to update Yogi video.");
    }
  };

  if (loading && !singleYogi) return <p>Loading...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <main className="main-content activity-mgmt-form">
      <div className="container-fluid">
        <div className="py-4">
          <form onSubmit={handleSubmit}>
            <div className="add-new-card">
              <h2 className="form-heading">Edit Wise Yogi</h2>

              {/* Basic Info */}
              <div className="form-group">
                <label>Activity Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Activity title"
                />
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Duration (minutes)</label>
                    <input
                      type="text"
                      name="duration"
                      value={formData.duration}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Category / Guide Type</label>
                    <select
                      name="category"
                      className="form-input"
                      value={formData.category}
                      onChange={handleChange}
                    >
                      <option>Daily Routine Guide</option>
                      <option>Hatha Yoga</option>
                      <option>Meditation</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label>Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                />
              </div>

              <div className="form-group">
                <label>Requirements</label>
                <input
                  type="text"
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                />
              </div>

              <div className="row">
                {/* Focus Personas */}
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Focus Personas</label>
                    <div className="input-icon">
                      <i className="fa-solid fa-user"></i>
                      <select
                        name="focusPersonas"
                        className="form-input"
                        value={formData.focusPersonas}
                        onChange={(e) => {
                          const selected = Array.from(
                            e.target.selectedOptions,
                            (option) => option.value,
                          );
                          setFormData({ ...formData, focusPersonas: selected });
                        }}
                      >
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Tags</label>
                    <div className="input-icon">
                      <i className="fa-solid fa-tag"></i>
                      <select
                        name="tags"
                        className="form-input"
                        value={formData.tags}
                        onChange={(e) => {
                          const selected = Array.from(
                            e.target.selectedOptions,
                            (option) => option.value,
                          );
                          setFormData({ ...formData, tags: selected });
                        }}
                      >
                        <option value="f">Select an option</option>
                        <option value="flexibility">Flexibility</option>
                        <option value="morning">Morning</option>
                        <option value="beginner">Beginner</option>
                        <option value="wellness">Wellness</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Language</label>
                    <input
                      type="text"
                      name="language"
                      value={formData.language}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label>Price</label>
                    <input
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      min={1}
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label>Pricing Tier</label>
                    <select
                      name="pricingTier"
                      className="form-input"
                      value={formData.pricingTier}
                      onChange={handleChange}
                    >
                      <option value="free">Free</option>
                      <option value="premium">Premium</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Media */}
              <div className="media-assets-module">
                <div className="media-card p-3 shadow-sm rounded">
                  {/* Heading */}
                  <h5 className="media-heading mb-4">Media Assets</h5>

                  {/* Hero Illustration / Thumbnail */}
                  <div className="mb-4">
                    <label className="media-label d-block mb-2">
                      Hero Illustration
                    </label>
                    <div className="upload-box text-center position-relative p-4 border rounded">
                      <input
                        type="file"
                        className="upload-img"
                        name="thumbnail"
                        onChange={handleChange}
                        disabled={uploading.thumbnail}
                        style={{
                          opacity: 0,
                          position: "absolute",
                          width: "100%",
                          height: "100%",
                          cursor: "pointer",
                        }}
                      />
                      <div className="upload-icon-first mb-2">
                        <i className="fa-regular fa-image fa-2x"></i>
                      </div>
                      <p className="upload-title mb-1">
                        Click to upload illustration
                      </p>
                      <p className="upload-subtitle mb-0">
                        SVG, PNG or JPG (Recommended: 800×600px)
                      </p>

                      {/* Preview */}
                      {formData.thumbnail && (
                        <img
                          src={formData.thumbnail}
                          alt="thumbnail"
                          className="mt-3 rounded"
                          style={{
                            width: "150px",
                            height: "auto",
                            border: "1px solid #ddd",
                            padding: "2px",
                          }}
                        />
                      )}

                      {/* Uploading status */}
                      {uploading.thumbnail && (
                        <p className="mt-2 text-info">Uploading...</p>
                      )}
                    </div>
                  </div>

                  {/* Main Content / Video or Audio */}
                  <div>
                    <label className="media-label d-block mb-2">
                      Main Content (Audio/Video)
                    </label>
                    <div className="upload-box d-flex align-items-center p-3 border rounded position-relative">
                      <input
                        type="file"
                        className="upload-img"
                        name="fileUrl"
                        onChange={handleChange}
                        disabled={uploading.fileUrl}
                        style={{
                          opacity: 0,
                          position: "absolute",
                          width: "100%",
                          height: "100%",
                          cursor: "pointer",
                        }}
                      />
                      <div className="upload-icon blue me-3">
                        <i className="fa-solid fa-upload fa-2x"></i>
                      </div>

                      <div>
                        <p className="upload-title mb-1">
                          Upload Audio or Video File
                        </p>
                        <p className="upload-subtitle mb-0">
                          MP3, MP4 up to 50MB
                        </p>

                        {/* Preview */}
                        {formData.fileUrl && (
                          <video
                            src={formData.fileUrl}
                            controls
                            className="mt-2 rounded"
                            style={{
                              width: "250px",
                              height: "auto",
                              border: "1px solid #ddd",
                            }}
                          />
                        )}

                        {/* Uploading status */}
                        {uploading.fileUrl && (
                          <p className="mt-2 text-info">Uploading...</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button type="submit" className="btn btn-orange mt-4">
                Update Video
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default EditYogi;
