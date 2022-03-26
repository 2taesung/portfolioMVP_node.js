import React, { useState, useEffect } from "react"
import ProjectAddForm from "./ProjectAddForm"
import Project from "./Project"
import { Card, Button, Col } from "react-bootstrap"
import { UserStateContext } from "../../App"
import * as Api from "../../api"

const Projects = ({ isEditable }) => {
  const [isAdding, setIsAdding] = useState(false)
  const [projectList, setProjectList] = useState([])
  const userState = React.useContext(UserStateContext)
  const { id } = userState.user

  const newProjectHandler = React.useCallback(
    (newProject) => {
      const newList = projectList.concat(newProject)
      setProjectList(newList)
    },
    [projectList]
  )  

  useEffect(() => {
    Api.get("projectlist", id).then((res) => setProjectList(res.data))
  }, [])

  return (
    <Card>
      <Card.Body>
        <Col>
          <Card.Title>프로젝트</Card.Title>
        </Col>
        <Col>
          <Project 
            isEditable={isEditable} 
            projectList={projectList}
            setProjectList={setProjectList}
          />
        </Col>

        {isEditable && (
          <Col className="text-center" sm={{ span: 20 }}>
            <Button
              variant="primary"
              size="md"
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
  )
}

export default Projects
