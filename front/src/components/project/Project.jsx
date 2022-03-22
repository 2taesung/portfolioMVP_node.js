import React, { useEffect, useState } from "react";
import * as Api from "../../api";
import ProjectCard from "./ProjectCard";
import { UserStateContext } from "../../App";

const Project = () => {
  const [projectList, setProjectList] = useState([]);
  const userState = React.useContext(UserStateContext);

  useEffect(() => {
    const { id } = userState.user;
    Api.get("projectlist", id).then((res) => setProjectList(res.data));
  }, [projectList, userState]);

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
