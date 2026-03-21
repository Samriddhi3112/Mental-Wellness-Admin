import React from 'react'

const QuestionsListing = () => {
  return (
<main className="main-content">
  <div className="container-fluid">
    <div className="mycustom">
      <div className="question-card mb-4">
        <div className="question-left">
          <div className="question-drag-icon">⋮⋮</div>
          <div className="question-number-box">01</div>
          <div className="question-content">
            <div className="question-title-row">
              <h3 className="question-title">Low mood / sadness</h3>
              <span className="question-type-tag">Free Text / Voice</span>
            </div>
            <p className="question-description">
              How often have you felt down, depressed, or hopeless?
            </p>
          </div>
        </div>
        <div className="question-right">
          <a className="question-edit-btn" href="EditNewQuestion.html">Edit Logic
          </a>
          {/* <div class="question-menu">
          <a href="AddNewQuestion.html"
            ><i class="fa-solid fa-eye p-black f-18"></i
          ></a>
        </div> */}
          <div className="question-menu">
            <a href="#"><img src="./images/redbin.svg" alt /></a>
          </div>
        </div>
      </div>
      <div className="question-card mb-4">
        <div className="question-left">
          <div className="question-drag-icon">⋮⋮</div>
          <div className="question-number-box">02</div>
          <div className="question-content">
            <div className="question-title-row">
              <h3 className="question-title">Tell us more about that</h3>
              <span className="question-type-tag">Free Text / Voice</span>
            </div>
            <p className="question-description">
              How often have you felt down, depressed, or hopeless?
            </p>
          </div>
        </div>
        <div className="question-right">
          <button className="question-edit-btn">Edit Logic</button>
          <div className="question-menu">⋮</div>
        </div>
      </div>
      <div className="question-card mb-4">
        <div className="question-left">
          <div className="question-drag-icon">⋮⋮</div>
          <div className="question-number-box">03</div>
          <div className="question-content">
            <div className="question-title-row">
              <h3 className="question-title">Sleep patterns</h3>
              <span className="question-type-tag">Free Text / Voice</span>
            </div>
            <p className="question-description">
              Average hours of quality sleep per night?
            </p>
          </div>
        </div>
        <div className="question-right">
          <button className="question-edit-btn">Edit Logic</button>
          <div className="question-menu">⋮</div>
        </div>
      </div>
      <div className="question-card mb-4">
        <div className="question-left">
          <div className="question-drag-icon">⋮⋮</div>
          <div className="question-number-box">04</div>
          <div className="question-content">
            <div className="question-title-row">
              <h3 className="question-title">Physical activity level</h3>
              <span className="question-type-tag">Free Text / Voice</span>
            </div>
            <p className="question-description">
              How many times a week do you exercise?
            </p>
          </div>
        </div>
        <div className="question-right">
          <button className="question-edit-btn">Edit Logic</button>
          <div className="question-menu">⋮</div>
        </div>
      </div>
      <a href="AddNewQuestion.html" className="question-upload mb-5">
        <div className="question-upload-content">
          <div className="question-upload-icon">+</div>
          <p className="question-upload-text">Add New Question from Library</p>
        </div>
      </a>
    </div>
  </div>
</main>

  )
}

export default QuestionsListing