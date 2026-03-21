import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import {
  fetchMusic,
  uploadFileToS3,
} from "../../../../features/Activity Management/Calm Music/musicSlice";
import { credAndUrl } from "../../../../utils/config";
import { toast } from "react-toastify";

const MusicUpload = () => {
  const dispatch = useDispatch();
  const [audioFile, setAudioFile] = useState(null);
  const [trackName, setTrackName] = useState("");
  const [description, setDescription] = useState("");
  const [mood, setMood] = useState("relaxing");
  const [duration, setDuration] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAudioUpload = (file) => {
    setAudioFile(file);
  };

  const handleSubmit = async () => {
    if (!audioFile || !trackName || !duration) {
      toast.error("Please fill all required fields and upload a file.");
      return;
    }

    setLoading(true);
    try {
      // STEP 1: Upload file to S3
      const fileUrl = await dispatch(uploadFileToS3(audioFile)).unwrap();
      console.log("File uploaded to:", fileUrl);

      // STEP 2: Save music metadata
      const token = localStorage.getItem("token");
      const body = {
        trackName,
        length: duration,
        mood,
        status: "live",
        fileUrl,
        thumbnail: "music/thumbnail.jpg",
        description,
      };

      const res = await axios.post(`${credAndUrl.BASE_URL}/admin/music`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      console.log("Music saved:", res.data);
      toast.success("Music uploaded successfully!");
      // reset form
      setAudioFile(null);
      setTrackName("");
      setDescription("");
      setMood("Relaxing");
      setDuration("");
      const moods = ["calm", "relaxing", "soothing"];
      moods.forEach((m) => {
        dispatch(fetchMusic({ mood: m, status: "live", page: 1, limit: 10 }));
      });
    } catch (err) {
      console.error("Error saving music:", err);
      toast.error("Upload failed. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="col-lg-12">
      <div className="card-custom">
        <h6>Upload New Track</h6>
        <p>Add high-quality audio to the library</p>

        <label>Audio File</label>
        <div
          className="upload-box mb-3"
          onClick={() => document.getElementById("audioInput").click()}
        >
          <h5>{audioFile ? audioFile.name : "Drop audio file here"} </h5>
          <br />
          <small>WAV, MP3 (Max 50MB)</small>
        </div>
        <input
          type="file"
          id="audioInput"
          style={{ display: "none" }}
          onChange={(e) => handleAudioUpload(e.target.files[0])}
        />

        <div>
          <img
            className="audio"
            src="images/activity-screen-seven-audio-image.png"
            alt=""
          />
        </div>

        <div>
          <label>Track Name</label>
          <input
            className="form-control mb-3"
            placeholder="Calm Music – Relax Through Sound"
            value={trackName}
            onChange={(e) => setTrackName(e.target.value)}
          />
        </div>

        <div>
          <label>Description</label>
          <textarea
            className="form-control mb-3"
            rows={3}
            placeholder="Relax Through Sound"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="row">
          <div className="col">
            <label>Mood Tag</label>
            <select
              className="form-select"
              value={mood}
              onChange={(e) => setMood(e.target.value)}
            >
              <option value="relaxing">Relaxing</option>
              <option value="calm">Calm</option>
              <option value="soothing">Soothing</option>
            </select>
          </div>
          <div className="col">
            <label>Duration</label>
            <input
              className="form-control"
              placeholder="MM:SS"
              value={duration}
              onChange={(e) => {
                let value = e.target.value;

                // Allow only numbers and colon
                if (!/^[0-9:]*$/.test(value)) return;

                // Auto add colon after 2 digits
                if (value.length === 2 && !value.includes(":")) {
                  value = value + ":";
                }

                // Restrict length to 5 (MM:SS)
                if (value.length > 5) return;

                setDuration(value);
              }}
              onBlur={() => {
                // Final validation on blur
                const isValid = /^([0-5]?[0-9]):([0-5][0-9])$/.test(duration);

                if (!isValid) {
                  toast.error(
                    "Please enter valid duration in MM:SS format (e.g. 05:30)",
                  );
                  setDuration("");
                }
              }}
            />
          </div>
        </div>

        <button
          className="btn btn-orange w-100 mt-3"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Uploading..." : "Upload Track"}
        </button>
      </div>
    </div>
  );
};

export default MusicUpload;
