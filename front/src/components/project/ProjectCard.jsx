import React from "react";
import ProjectEditForm from "./ProjectEditForm";
import { Card } from "react-bootstrap";
import { UserStateContext } from "../../App";

const ProjectCard = ({ user, prj }) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const userState = React.useContext(UserStateContext);
  const { id } = userState.user;
  if({id} === user) {
      setIsEditing(true)
  } setIsEditing(false)
  
  return (
    <Card>
      {isEditing ? (
        <ProjectEditForm />
      ) : (
        <Card.Body>
          <Card.Subtitle>{prj.title}</Card.Subtitle>
          <Card.Text>{prj.description}</Card.Text>
        </Card.Body>
      )}
    </Card>
  );
};

export default ProjectCard;
