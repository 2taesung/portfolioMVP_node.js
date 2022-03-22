import React from "react";
import CertificateEditForm from "./CertificateEditForm";
import { Card } from "react-bootstrap";
import { UserStateContext } from "../../App";

const CertificateCard = ({ user, certi }) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const userState = React.useContext(UserStateContext);
  const { id } = userState.user;
  if(id === user) {
      setIsEditing(true)
  } setIsEditing(false)
  
  return (
    <Card>
      {isEditing ? (
        <CertificateEditForm />
      ) : (
        <Card.Body>
          <Card.Subtitle>{certi.title}</Card.Subtitle>
          <Card.Text>{certi.description}</Card.Text>
          <Card.Text>{certi.startDate}</Card.Text>
        </Card.Body>
      )}
    </Card>
  );
};

export default CertificateCard;
