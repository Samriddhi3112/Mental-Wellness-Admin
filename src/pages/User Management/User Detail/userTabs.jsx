import React, { useState } from "react";
import { useSelector } from "react-redux";

import OverviewTab from "./overview";
import AssessmentTab from "./assessment";
import JournalingTab from "./journaling";
import QuotaTab from "./sessionQuota";
import AiTab from "./aiCompanion";
import RiskTab from "./riskSafety";

const UserTabs = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const { userDetail } = useSelector((state) => state.users);

  return (
    <>
      {/* Tabs */}
      <ul className="nav nav-tabs usermanagementtabs">
        {[
          { key: "overview", label: "Overview" },
          { key: "assessment", label: "Assessment & Responses" },
          { key: "journaling", label: "Journaling & Mood" },
          { key: "quota", label: "Session Quota" },
          { key: "ai", label: "AI Companion" },
          { key: "risk", label: "Risk & Safety" },
        ].map((tab) => (
          <li className="nav-item" key={tab.key}>
            <button
              className={`nav-link ${
                activeTab === tab.key ? "active" : ""
              }`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Tab Content */}
      <div className="mt-4">
        {activeTab === "overview" && <OverviewTab user={userDetail} />}
        {activeTab === "assessment" && <AssessmentTab user={userDetail} />}
        {activeTab === "journaling" && <JournalingTab user={userDetail} />}
        {activeTab === "quota" && <QuotaTab user={userDetail} />}
        {activeTab === "ai" && <AiTab user={userDetail} />}
        {activeTab === "risk" && <RiskTab user={userDetail} />}
      </div>
    </>
  );
};

export default UserTabs;