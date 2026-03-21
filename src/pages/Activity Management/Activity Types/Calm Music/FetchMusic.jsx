import React from "react";
import MusicListing from "./MusicListing";
import MusicUpload from "./MusicUpload";

const FetchMusic = () => {
  return (
    <main className="main-content">
      <div className="container-fluid activity-screen-seven">
        <div className="row g-4">
          <MusicListing />
          <MusicUpload />
        </div>
      </div>
    </main>
  );
};

export default FetchMusic;