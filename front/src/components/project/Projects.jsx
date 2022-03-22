import React, { useState } from "react";
import ProjectAddForm from "./ProjectAddForm";
import Project from "./Project";
import { Card, Button, Col } from "react-bootstrap";

const Projects = ({ isEditable }) => {
  const [isAdding, setIsAdding] = useState(false);

  return (
    <Card className="mb-2 ms-3 mr-5" style={{ width: "60rem" }}>
      <Card.Body>
        <Col className="justify-content-md-center">
          <Card.Title>프로젝트</Card.Title>
        </Col>
        <Col>
          <Project isEditable={isEditable} />
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
        {isAdding && <ProjectAddForm setIsAdding={setIsAdding} />}
      </Card.Body>
    </Card>
  );
};

export default Projects;
