import React from "react";
import ProjectEditForm from "./ProjectEditForm"
import { Card, Col, Row, Button, Container } from "react-bootstrap"
import moment from 'moment'

const ProjectCard = ({ isEditable, prj, projectList, setProjectList }) => {
  const [isEditing, setIsEditing] = React.useState(false)
  const startDate = moment(prj.from_date).format('YYYY-MM-DD')
  const endDate = moment(prj.to_date).format('YYYY-MM-DD')
    
  if (isEditable) {
    return (
      <>
        {isEditing ? (
          <ProjectEditForm
            setIsEditing={setIsEditing}
            prj={prj}
            projectList={projectList}
            setProjectList={setProjectList}
          />
        ) : (
          <Container className="mb-1 ms-1 mr-1">
            <Card.Body>
              <Row>
                <Col>
                  <Card.Text className="mb-1">{prj.title}</Card.Text>
                  <Card.Subtitle className="mb-1 text-muted">{prj.description}</Card.Subtitle>
                  <Card.Text className= "mb-1 text-muted">{startDate}~{endDate}</Card.Text>
                </Col>

                <Col className="mt-3 text-center text-info">
                  <Button
                    className="float-end "
                    variant="outline-info"
                    size="sm"
                    onClick={() => setIsEditing(true)}
                  >
                    편집
                  </Button>
                  <Button
                    className="float-end"
                    variant="outline-info"
                    size="sm"
                    onClick={() => setIsEditing(true)}
                  >
                    삭제
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Container>
        )}
      </>
    )
  }

  return (
    <Container>
      <Col>
        <Card.Text className="mb-1">{prj.title}</Card.Text>
        <Card.Subtitle className="mb-1 text-muted">{prj.description}</Card.Subtitle>
        <Card.Text className="mb-1 text-muted">{startDate}~{endDate}</Card.Text>
      </Col>
    </Container>
  )
}

export default ProjectCard
