import React from "react";

import ProjectCard from "./ProjectCard";

const Project = ({ projectList }) => {

  return (
    <>
      {projectList.map((prj) => {
        return (
          <ProjectCard
            user={`prj-${prj.user_id}`}
            key={`prj-${prj.id}`}
            prj={{
              id: prj.id,
              title: prj.title,
              description: prj.description,
            }}
          />
        );
      })}
    </>
  );
};

export default Project;
