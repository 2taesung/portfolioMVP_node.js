import React from "react"
import ProjectCard from "./ProjectCard"
import MyCard from "./MyCard"

const Project = ({ isEditable, projectList, setProjectList }) => {

  if(isEditable) {
    return <MyCard />
  }

  return (
    <>
      {projectList.map((prj) => {
        return (
          <ProjectCard
            isEditable={isEditable}
            user={`prj-${prj.user_id}`}
            key={`prj-${prj.id}`}
            projectList={projectList}
            prj={{
              id: prj.id,
              title: prj.title,
              description: prj.description,
              from_date: prj.from_date,
              to_date: prj.to_date,
            }}
            setProjectList={setProjectList}
          />
        )
      })}
    </>
  )
}

export default Project;
