import React from "react";
import icon1 from "../../../assets/images/kaiIcon.svg";
import icon2 from "../../../assets/images/purple-mic.svg";
import icon3 from "../../../assets/images/aura.svg";
import icon4 from "../../../assets/images/echo.svg";
import icon5 from "../../../assets/images/nova.svg"

const aiCompanion = () => {
  return (
    <div>
      <div className="usermanagement-kaicard d-flex justify-content-between align-items-center mb-4">
        {/* Left */}
        <div className="kai-left">
          <img src={icon1} className="kai-avatar" alt="Kai" />
          <div>
            <div className="kai-title">Meet Kai</div>
            <div className="kai-subtitle">Your personalized AI companion</div>
            <div className="kai-tags">
              <span>Sleep Helper</span>
              <span>Anxiety Support</span>
              <span>Overthinker</span>
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="kai-right">
          <div className="kai-label">Companion Since</div>
          <div className="kai-date">Jan 15, 2026</div>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-6">
          <div className="usermanagement-voicesettings b-shadow h-100">
            {/* Header */}
            <div className="d-flex align-items-start mb-4">
              <div className="me-2 fs-5">
                <img src={icon2} alt />
              </div>
              <div>
                <h5 className="text-black mb-0">Voice &amp; Audio</h5>
                <p className="text-grey mb-0">
                  Customize how Kai sounds and feels
                </p>
              </div>
            </div>
            {/* Voice Selection */}
            <h6 className="fw-400 f-12 p-black mb-3">Voice Selection</h6>
            <div className="d-flex align-items-center mb-4 w-100">
              {/* Aura */}
              <div className="voice-option me-2">
                <input type="radio" id="aura" name="voice" defaultChecked />
                <label className="voice-card" htmlFor="aura">
                  <img src={icon3} className="voice-avatar" />
                  <div className="text-black fw-500">Aura</div>
                  <div className="text-grey">Gentle &amp; Warm</div>
                </label>
              </div>
              {/* Echo */}
              <div className="voice-option me-2">
                <input type="radio" id="echo" name="voice" />
                <label className="voice-card" htmlFor="echo">
                  <img src={icon4} className="voice-avatar" />
                  <div className="text-black fw-500">Echo</div>
                  <div className="text-grey">Calm &amp; Balanced</div>
                </label>
              </div>
              {/* Nova */}
              <div className="voice-option me-2">
                <input type="radio" id="nova" name="voice" />
                <label className="voice-card" htmlFor="nova">
                  <img src={icon5} className="voice-avatar" />
                  <div className="text-black fw-500">Nova</div>
                  <div className="text-grey">Bright &amp; Uplifting</div>
                </label>
              </div>
            </div>
            {/* Language */}
            <h6 className="fw-400 f-12 p-black mb-2">Language</h6>
            <div className="language-select mb-4">
              <select className="form-input">
                <option>English (US)</option>
                <option>Spanish</option>
                <option>Hindi</option>
              </select>
            </div>
            {/* Toggle */}
            <div className="p-3 rounded-4" style={{ background: "#f9fafb" }}>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <div className="fw-400 f-12 p-black m-0">
                    Calm music during sessions
                  </div>
                  <div className="fw-400 f-12 p-grey small">
                    Soft background music while talking
                  </div>
                </div>
                <div className="form-check form-switch m-0">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultChecked
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="usermanagement-recommendationcard b-shadow h-100">
            {/* Header */}
            <div className="d-flex align-items-start mb-4">
              <div className="me-2 fs-5">
                <img src="images/greenBrain.svg" alt />
              </div>
              <div>
                <h5 className="fw-400 f-14 p-black mb-0">
                  Recommendations Profile
                </h5>
                <p className="fw-400 f-12 p-grey mb-0">
                  AI-driven personalization settings
                </p>
              </div>
            </div>
            {/* Main Focus */}
            <h6 className="fw-400 f-12 p-black mb-3">Main Focus Areas</h6>
            <div className="mb-4">
              <div className="d-flex align-items-center gap-3">
                <div className="usertag usertag-sleep fw-400 f-12">
                  <i className="fa-solid fa-moon" /> Sleep Issues
                </div>
                <div className="usertag usertag-anxiety fw-400 f-12">
                  <i className="fa-solid fa-wind" /> Anxiety Management
                </div>
                <div className="usertag usertag-purple fw-400 f-12">
                  <i className="fa-solid fa-brain" />
                  Overthinking
                </div>
              </div>
            </div>
            {/* Identified Concerns */}
            <h6 className="fw-400 f-14 p-black mb-3">Identified Concerns</h6>
            {/* Stress */}
            <div className="concern-box">
              <div className="d-flex justify-content-between mb-2">
                <span className="fw-400 p-black f-12">
                  Stress &amp; Overwhelm
                </span>
                <span className="status-high fw-400 f-12">High</span>
              </div>
              <div className="progress">
                <div className="progress-bar red" />
              </div>
            </div>
            {/* Anxiety */}
            <div className="concern-box">
              <div className="d-flex justify-content-between mb-2">
                <span className="fw-400 p-black f-12">Anxious Thoughts</span>
                <span className="status-medium fw-400 f-12">Medium</span>
              </div>
              <div className="progress">
                <div className="progress-bar orange" />
              </div>
            </div>
            {/* Sleep */}
            <div className="concern-box">
              <div className="d-flex justify-content-between mb-2">
                <span className="fw-400 p-black f-12">Difficulty Sleeping</span>
                <span className="status-low fw-400 f-12">Low</span>
              </div>
              <div className="progress">
                <div className="progress-bar green" />
              </div>
            </div>
            {/* Cohort */}
            <div className="cohort-box mt-4 p-3">
              <h6 className="fw-400 f-14 p-black mb-2">Cohort Assignment</h6>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="cohort"
                  defaultChecked
                />
                <label className="form-check-label fw-400 f-12">
                  High-touch cohort
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="cohort"
                />
                <label className="form-check-label text-black">
                  Low-touch cohort
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center gap-3">
          <button class="btn btn-orange text-white fw-400 f-14">
            <i class="fa-solid fa-floppy-disk me-2"></i> Save
            personalization changes
          </button>
          <button class="btn btn-grey-border me-2 p-grey fw-400 f-14">
            <i class="fa-solid fa-arrow-rotate-right me-2"></i> Reset to
            default
          </button>
        </div>
        <p class="m-0 fw-400 p-grey f-12">
          <i class="fa-solid fa-clock me-2"></i> Last updated: Jan 20,
          2026 at 3:42 PM
        </p>
      </div> */}
    </div>
  );
};

export default aiCompanion;
