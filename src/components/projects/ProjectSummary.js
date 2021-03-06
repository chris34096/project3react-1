import React from "react";

const ProjectSummary = () => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-header title is-centered">Co mentoring</span>
        <p className="grey-text">
          {new Date().getFullYear()}
          Duc Nguyen / Christofer Perez Bustamante
        </p>
      </div>
    </div>
  );
};

export default ProjectSummary;
