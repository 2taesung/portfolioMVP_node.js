import React, { useState, useEffect } from "react";
import ProjectAddForm from "./ProjectAddForm";
import Project from "./Project";
import { Card, Button, Col } from "react-bootstrap";
import { UserStateContext } from "../../App";
import * as Api from "../../api";

const Projects = ({ isEditable }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [projectList, setProjectList] = useState([]);
  const userState = React.useContext(UserStateContext);
  const { id } = userState.user;

  useEffect(() => {
    Api.get("projectlist", id).then((res) => setProjectList(res.data));
  }, [projectList, userState]);

  const newProjectHandler = (newProject) => {
    const newProjectList = [...projectList]
    newProjectList.push(newProject)
    setProjectList(newProjectList)
  }

  return (
    <Card className="mb-1 ms-1 mr-1">
      <Card.Body>
        <Col className="justify-content-md-center">
          <Card.Title>프로젝트</Card.Title>
        </Col>
        <Col>
          <Project isEditable={isEditable} projectList={projectList} />
        </Col>

        {isEditable && (
          <Col className="text-center" sm={{ span: 20 }}>
            <Button
              variant="primary"
              size="sm"
              onClick={() => setIsAdding(true)}
            >
              +
            </Button>
          </Col>
        )}
        {isAdding && 
          <ProjectAddForm 
            setIsAdding={setIsAdding} 
            addProjectList={newProjectHandler} 
          />}
      </Card.Body>
    </Card>
  );
};

export default Projects;
