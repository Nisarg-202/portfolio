import React from 'react';

function FolderComponent(props) {
  return (
    <div className="col-12 col-lg-4 folder-box mt-5">
      <a href={props.link} target="_blank" style={{textDecoration: "none"}}>
        <div className="card shadow">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              {/* <i class="far fa-folder fa-2x project-icons"></i> */}
              <i class="fas fa-desktop fa-2x project-icons"></i>
              <i class="fas fa-external-link-alt fa-2x project-icons"></i>
            </div>
            <div className="text-left ms-2">
              <p className="project-folder-title mt-3">{props.title}</p>
              <p className="project-folder-subtitle mt-2">{props.subtitle}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default FolderComponent;
