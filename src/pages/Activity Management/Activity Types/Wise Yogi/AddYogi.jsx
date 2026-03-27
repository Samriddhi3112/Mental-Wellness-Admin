import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  createYogi,
  uploadFileToS3,
} from "../../../../features/Activity Management/Wise Yogi/yogiSlice";
import { toast } from "react-toastify";

const AddYogi = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});
  // const { singleYogi, loading, error } = useSelector((state) => state.yogi);

  const [formData, setFormData] = useState({
    title: "",
    duration: "",
    category: "Daily Routine Guide",
    description: "",
    requirements: "",
    thumbnail: "",
    fileUrl: "",
    focusPersonas: [],
    language: "",
    price: "",
    pricingTier: "free",
    tags: [],
  });

  const [uploading, setUploading] = useState({
    thumbnail: false,
    fileUrl: false,
  });

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

  const focusPersonaOptions = [
    { value: "beginner", label: "Beginner" },
    { value: "intermediate", label: "Intermediate" },
  ];

  const tagOptions = [
    { value: "flexibility", label: "Flexibility" },
    { value: "morning", label: "Morning" },
    { value: "beginner", label: "Beginner" },
  ];

  // Handle changes
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
      setFormData((prev) => ({
        ...prev,
        [name]: value.split(",").map((v) => v.trim()),
      }));
    } else if (name === "price") {
      setFormData((prev) => ({ ...prev, [name]: Number(value) }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        activityName: formData.title,
        duration: formData.duration,
        category: formData.category,
        description: formData.description,
        requirements: formData.requirements,
        thumbnail: formData.thumbnail, // string URL
        fileUrl: formData.fileUrl, // string URL
        focusPersonas: formData.focusPersonas, // array of strings
        language: formData.language, // must match dropdown
        price: Number(formData.price), // ensure number
        pricingTier: formData.pricingTier, // "free" or "premium"
        tags: formData.tags, // array of strings
      };

      await dispatch(createYogi(payload)).unwrap();
      toast.success("Yogi video updated successfully!");
      navigate("/activity-management/wise-yogi");
    } catch (err) {
      console.error(err);
      toast.error("Failed to update Yogi video.");
    }
  };

  return (
    <main className="main-content activity-mgmt-form">
      <div className="container-fluid">
        <div className="py-4">
          <form onSubmit={handleSubmit}>
            <div className="add-new-card">
              <h2 className="form-heading">Add New</h2>

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
                      onChange={(e) => {
                        const value = e.target.value;

                        // Allow only numbers and optional colon for mm:ss format
                        if (/^\d{0,2}(:\d{0,2})?$/.test(value)) {
                          setFormData({ ...formData, duration: value });
                        }
                      }}
                      placeholder="e.g., 20 or 20:30"
                    />
                    {formErrors.duration && (
                      <p className="text-danger f-12 mt-1">
                        {formErrors.duration}
                      </p>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Category / Guide Type</label>
                    <div className="input-icon">
                      <select
                        className="form-input"
                        name="category"
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
              </div>

              <div className="form-group">
                <label>About this activity (Description)</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Describe the activity..."
                />
              </div>

              <div className="form-group">
                <label>What you'll need</label>
                <input
                  type="text"
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  placeholder="Requirements for the activity"
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
                    <select
                      name="language"
                      value={formData.language}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="">Select Language</option>
                      {languageOptions.map((lang) => (
                        <option key={lang} value={lang}>
                          {lang}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label>Price</label>
                    <input
                      type="number"
                      name="price"
                      value={formData.price} // can be "" initially
                      onChange={(e) => {
                        const val = e.target.value;
                        setFormData((prev) => ({
                          ...prev,
                          price: val === "" ? "" : Number(val),
                        }));
                      }}
                      min={1} // user cannot scroll below 1
                      placeholder="Enter price"
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label>Pricing Tier</label>
                    <select
                      className="form-input"
                      name="pricingTier"
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
                <div className="media-card">
                  {/* Heading */}
                  <h5 className="media-heading">Media Assets</h5>

                  {/* Hero Illustration */}
                  <div className="mb-4">
                    <label className="media-label">Hero Illustration</label>

                    <div className="upload-box text-center position-relative">
                      <input
                        type="file"
                        name="thumbnail"
                        className="upload-img"
                        onChange={handleChange}
                        disabled={uploading.thumbnail}
                      />
                      <div className="upload-icon-first">
                        <i className="fa-regular fa-image" />
                      </div>
                      <p className="upload-title mb-0">
                        Click to upload illustration
                      </p>
                      <p className="upload-subtitle">
                        SVG, PNG or JPG (Recommended: 800×600px)
                      </p>

                      {/* Preview */}
                      {formData.thumbnail && (
                        <img
                          src={formData.thumbnail}
                          alt="thumbnail"
                          style={{
                            width: "150px",
                            marginTop: "10px",
                            borderRadius: "8px",
                          }}
                        />
                      )}

                      {/* Uploading status */}
                      {uploading.thumbnail && <p>Uploading...</p>}
                    </div>
                  </div>

                  {/* Main Content */}
                  <div>
                    <label className="media-label">
                      Main Content (Audio/Video)
                    </label>

                    <div className="upload-box d-flex align-items-center justify-content-start position-relative">
                      <input
                        type="file"
                        name="fileUrl"
                        className="upload-img"
                        onChange={handleChange}
                        disabled={uploading.fileUrl}
                      />
                      <div className="upload-icon blue me-3">
                        <i className="fa-solid fa-upload" />
                      </div>

                      <div>
                        <p className="upload-title mb-0">
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
                            width="250"
                            style={{ marginTop: "10px", borderRadius: "8px" }}
                          />
                        )}

                        {/* Uploading status */}
                        {uploading.fileUrl && <p>Uploading...</p>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button type="submit" className="btn btn-orange mt-4">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default AddYogi;