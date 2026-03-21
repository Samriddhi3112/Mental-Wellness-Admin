import React, { useState } from "react";
import img1 from "../../../../assets/images/activity-basic-details.png";
import img2 from "../../../../assets/images/activity-target-icon.png";
import img3 from "../../../../assets/images/activity-video-icon.png";
import { useDispatch } from "react-redux";
import {
  uploadFileToS3,
  createMovie,
  fetchMovies,
} from "../../../../features/Activity Management/Movies/moviesSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const UploadMovie = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [videoUploading, setVideoUploading] = useState(false);

  const [form, setForm] = useState({
    activityName: "",
    description: "",
    category: "Meditation",
    duration: "",
    language: "English",
    pricingTier: "free",
    tags: [],
    focusPersonas: [],
  });

  const [videoUrl, setVideoUrl] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [tagInput, setTagInput] = useState("");

  // handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // tags add
  const handleAddTag = () => {
    if (!tagInput) return;
    setForm({ ...form, tags: [...form.tags, tagInput] });
    setTagInput("");
  };

  // upload thumbnail
  const handleThumbnailUpload = async (file) => {
    const res = await dispatch(uploadFileToS3(file));
    if (res.meta.requestStatus === "fulfilled") {
      setThumbnailUrl(res.payload);
    }
  };

  // upload video
  const handleVideoUpload = async (file) => {
    setVideoUploading(true);

    const res = await dispatch(uploadFileToS3(file));

    if (res.meta.requestStatus === "fulfilled") {
      setVideoUrl(res.payload);
      toast.success("Video uploaded successfully");
    } else {
      toast.error("Video upload failed");
    }

    setVideoUploading(false);
  };

  const validateForm = () => {
  if (!form.activityName.trim()) {
    toast.error("Activity Name is required");
    return false;
  }

  if (!form.description.trim()) {
    toast.error("Description is required");
    return false;
  }

  if (!form.duration.trim()) {
    toast.error("Duration is required");
    return false;
  }

  if (!form.category) {
    toast.error("Category is required");
    return false;
  }

  if (!form.language) {
    toast.error("Language is required");
    return false;
  }

  if (!form.pricingTier) {
    toast.error("Pricing type is required");
    return false;
  }

  // if (form.tags.length === 0) {
  //   toast.error("At least one tag is required");
  //   return false;
  // }

  if (!videoUrl) {
    toast.error("Please upload video");
    return false;
  }

  if (!thumbnailUrl) {
    toast.error("Please upload thumbnail");
    return false;
  }

  return true;
};

  // submit
  const handleSubmit = async () => {
    if (!validateForm()) return
    // if (!videoUrl || !thumbnailUrl) {
    //   alert("Upload video & thumbnail first");
    //   return;
    // }

    const payload = {
      ...form,
      fileUrl: videoUrl,
      thumbnail: thumbnailUrl,
    };

    const res = await dispatch(createMovie(payload));

    if (res.meta.requestStatus === "fulfilled") {
      toast.success("Movie Created successfully");
      dispatch(fetchMovies({ page: 1, limit: 10 }));

      navigate("/activity-management/movies");
    } else {
      toast.error("Error ");
    }
  };

  console.log("Video URL:", videoUrl);
  console.log("Thumbnail URL:", thumbnailUrl);

  return (
    <main className="main-content">
      <div className="container-fluid activity-management-screen-six">
        <div className="row g-4">
          {/* LEFT */}
          <div className="col-lg-5">
            <div className="custom-card">
              <div className="section-title">
                <img src={img1} alt="" /> Basic Info
              </div>

              <input
                name="activityName"
                className="form-control mb-3"
                placeholder="Activity Name"
                onChange={handleChange}
              />

              <input
                name="description"
                className="form-control mb-3"
                placeholder="Description"
                onChange={handleChange}
              />

              <div className="row">
                <div className="col-6 mb-3">
                  <div className="position-relative">
                    <select
                      name="category"
                      className="form-select"
                      onChange={handleChange}
                      style={{
                        appearance: "none",
                        WebkitAppearance: "none",
                        MozAppearance: "none",
                        paddingRight: "2rem",
                      }}
                    >
                      <option value="Meditation">Meditation</option>
                      <option value="Relaxation">Relaxation</option>
                      <option value="Sleep">Sleep</option>
                      <option value="Mindfulness">Mindfulness</option>
                    </select>

                    <span
                      style={{
                        position: "absolute",
                        top: "50%",
                        right: "10px",
                        pointerEvents: "none",
                        transform: "translateY(-50%)",
                        fontSize: "0.8rem",
                        color: "#555",
                      }}
                    >
                      ▼
                    </span>
                  </div>
                </div>

                <div className="col-6 mb-3">
                  <input
                    name="duration"
                    className="form-control"
                    placeholder="e.g. 05:30"
                    value={form.duration}
                    onChange={(e) => {
                      const value = e.target.value;

                      if (/^\d{0,2}(:\d{0,2})?$/.test(value)) {
                        setForm({ ...form, duration: value });
                      }
                    }}
                  />
                </div>
              </div>

              {/* TAGS */}
              <div>
                <input
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  className="form-control mb-2"
                  placeholder="Add tag"
                />
                <button
                  style={{ border: "none" }}
                  className="tag-box"
                  onClick={handleAddTag}
                >
                  + Add Tag
                </button>

                <div className="mt-2">
                  {form.tags.map((tag, i) => (
                    <span key={i} className="badge bg-secondary me-2">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* TARGET */}
            <div className="custom-card">
              <div className="section-title">
                <img src={img2} alt="" /> Targeting
              </div>

              <select
                name="language"
                className="form-select mb-3"
                onChange={handleChange}
              >
                <option value="English">English</option>
              </select>

              {/* PRICING */}
              <div className="d-flex gap-2">
                <button
                  type="button"
                  style={{ border: "none", color: "black" }}
                  className={`btn ${
                    form.pricingTier === "free"
                      ? "btn-primary"
                      : "btn-outline-primary"
                  }`}
                  onClick={() => setForm({ ...form, pricingTier: "free" })}
                >
                  Free Users
                </button>

                <button
                  type="button"
                  style={{ border: "none", color: "black" }}
                  className={`btn ${
                    form.pricingTier === "premium"
                      ? "btn-primary"
                      : "btn-outline-primary"
                  }`}
                  onClick={() => setForm({ ...form, pricingTier: "premium" })}
                >
                  Premium Users
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-lg-7">
            <div className="custom-card">
              <div className="section-title">
                <img src={img3} alt="" /> Video Content
              </div>

              <div className="row g-3">
                {/* Video Upload */}
                {/* Video Upload */}
                <div className="col-md-8">
                  <div className="upload-box position-relative">
                    {" "}
                    {/* make parent relative */}
                    <div className="upload-icon">⬆</div>
                    <div>Drop video here or browse</div>
                    <small>MP4, MOV up to 500MB (16:9 recommended)</small>
                    {/* Input overlay limited to parent */}
                    <input
                      type="file"
                      accept="video/*"
                      onChange={(e) => handleVideoUpload(e.target.files[0])}
                      style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        top: 0,
                        left: 0,
                        opacity: 0,
                        cursor: "pointer",
                      }}
                    />
                  </div>
                  {videoUploading && (
                    <p className="text-warning mt-2">Uploading video... ⏳</p>
                  )}

                  {!videoUploading && videoUrl && (
                    <p className="text-success mt-2">
                      Video uploaded successfully ✅
                    </p>
                  )}
                </div>

                {/* Thumbnail Upload */}
                <div className="col-md-4">
                  <div className="thumbnail-box position-relative">
                    {thumbnailUrl ? (
                      <img
                        src={thumbnailUrl}
                        alt="Thumbnail"
                        style={{ width: "100%", borderRadius: 4 }}
                      />
                    ) : (
                      "Thumbnail"
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleThumbnailUpload(e.target.files[0])}
                      style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        top: 0,
                        left: 0,
                        opacity: 0,
                        cursor: "pointer",
                      }}
                    />
                  </div>
                </div>

                {/* Thumbnail Upload */}
                {/* <div className="col-md-4">
                  <div className="thumbnail-box position-relative">
                    {thumbnailUrl ? (
                      <img
                        src={thumbnailUrl}
                        alt="Thumbnail"
                        style={{ width: "100%", borderRadius: 4 }}
                      />
                    ) : (
                      "Thumbnail"
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleThumbnailUpload(e.target.files[0])}
                      style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        opacity: 0,
                        top: 0,
                        left: 0,
                        cursor: "pointer",
                      }}
                    />
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          {/* SUBMIT */}
          <div className="text-end mt-3">
            <button className="btn btn-primary" onClick={handleSubmit} disabled={videoUploading}>
              Submit for Review
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UploadMovie;
