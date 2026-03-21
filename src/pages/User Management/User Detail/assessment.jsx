import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { exportOnboardingReport } from "../../../features/User Management/userSlice";

const Assessment = () => {
  const dispatch = useDispatch();
  const { singleUser } = useSelector((state) => state.users);

  const onboarding = singleUser?.onboardingResponse;
  const responses = onboarding?.responses || [];

  const handleDownloadReport = async () => {
    try {
      const userId = singleUser?.user?._id;

      if (!userId) {
        console.warn("UserId not found");
        return;
      }

      const res = await dispatch(exportOnboardingReport(userId)).unwrap();

      const fileUrl = res?.data?.fileUrl;

      if (fileUrl) {
        // Direct download / open
        window.open(fileUrl, "_blank");
      } else {
        console.error("File URL not found");
      }
    } catch (err) {
      console.error("Download error:", err);
    }
  };

  return (
    <div>
      <div className="bg-white border py-4 px-4 br-16 list-style-none">
        {/* Heading */}
        <div className="d-flex align-items-center gap-2 mb-3">
          <i className="fa-solid fa-file-lines p-orange" />
          <p className="fw-400 f-16 p-black m-0">Assessment History</p>
        </div>

        {/* Header */}
        <div className="usermanagement-intakecard mb-4">
          <div className="intake-header">
            <div className="intake-title">
              A few questions – {responses.length}-step intake
            </div>

            <div className="intake-completed">
              {onboarding?.createdAt
                ? `Completed ${new Date(onboarding.createdAt).toLocaleString()}`
                : "Not completed"}
            </div>
          </div>

          {/* Progress */}
          <div className="progress-wrapper">
            <div className="progress">
              <div
                className="progress-bar"
                style={{
                  width: `${responses.length ? 100 : 0}%`,
                }}
              />
            </div>
            <div className="progress-text">
              {responses.length}/{responses.length} Complete
            </div>
          </div>
        </div>

        {/* Questions */}
        {responses.length > 0 ? (
          responses.map((item, index) => (
            <div className="border br-12 p-4 mb-4" key={index}>
              <div className="d-flex align-items-start gap-3">
                <div className="orange-circle">{index + 1}</div>

                <div>
                  <h6 className="p-black fw-400 f-14 mb-2">
                    {item.question?.questionText || "Question"}
                  </h6>

                  <p className="p-grey fw-400 f-14 mb-2">
                    {item.question?.description || ""}
                  </p>

                  <p className="green fw-400 f-14 mb-2">{item.answer}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center p-grey">No assessment data available</p>
        )}

        {/* Actions (static) */}
        <div className="mt-3 mb-5">
          <h6 className="mb-4 d-flex align-items-center gap-2 fw-400 f-16 p-black">
            <i className="fa-solid fa-bolt p-orange" /> Actions Taken
          </h6>

          <ul className="d-flex align-items-center gap-5">
            <li>
              <p className="d-flex align-items-center gap-2 fw-400 f-12 green">
                <i className="fa-solid fa-circle-check" /> Talk to Expert
                clicked
              </p>
            </li>

            <li>
              <p className="d-flex align-items-center gap-2 fw-400 f-12 p-grey">
                <i className="fa-solid fa-circle-xmark" /> Play Again not used
              </p>
            </li>

            <li>
              <p className="d-flex align-items-center gap-2 fw-400 f-12 p-grey">
                <i className="fa-solid fa-shield-halved" /> Emergency flow not
                triggered
              </p>
            </li>
          </ul>
        </div>

        {/* Button */}
        <div className="d-flex align-items-center justify-content-end">
          <button
            onClick={handleDownloadReport}
            className="btn btn-orange fw-400 f-12 text-white"
          >
            <i className="fa-solid fa-download me-2" /> Download report (PDF)
          </button>
        </div>
      </div>
    </div>
  );
};

export default Assessment;
