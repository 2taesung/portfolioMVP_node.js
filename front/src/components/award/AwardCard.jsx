import React from "react";
import AwardEditForm from "./AwardEditForm";
import { Card } from "react-bootstrap";
import { UserStateContext } from "../../App";

const AwardCard = ({ user, award }) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const userState = React.useContext(UserStateContext);
  const { id } = userState.user;
  if({id} === user) {
      setIsEditing(true)
  } setIsEditing(false)

  return (
    <Card>
      {isEditing ? (
        <AwardEditForm />
      ) : (
        <Card.Body>
          <Card.Subtitle>{award.title}</Card.Subtitle>
          <Card.Text>{award.description}</Card.Text>
        </Card.Body>
      )}
    </Card>
  );
};

export default AwardCard;
