import React, {useState} from "react";
import CertificateEditForm from "./CertificateEditForm";
import { Card, Col, Button } from "react-bootstrap";


const CertificateCard = ({ isEditable, certi }) => {
  
  const [isEditing, setIsEditing] = useState(false)

  if (isEditable) {
    return (
      <>
      {isEditing ? (
        <CertificateEditForm
          setIsEditing={setIsEditing}
          certi={certi}
        />
      ) : (
      <Card>
        <Card.Body>
          <Card.Subtitle>{certi.title}</Card.Subtitle>
          <Card.Text>{certi.description}</Card.Text>
          <Card.Text>{certi.whenDate}</Card.Text>
        </Card.Body>
        <Col className="text-center" sm={{ span: 20 }}>
          <Button
            variant="primary"
            size="sm"
            onClick={() => setIsEditing(true)}
          >
            편집
          </Button>
          <Button
            variant="primary"
            size="sm"
            onClick={() => setIsEditing(true)}
          >
            삭제
          </Button>
        </Col>
      </Card>
    )}
    </>
    )
  }

  return (
    <Card>
        <Card.Body>
          <Card.Subtitle>{certi.title}</Card.Subtitle>
          <Card.Text>{certi.description}</Card.Text>
          <Card.Text>{certi.whenDate}</Card.Text>
        </Card.Body>
      </Card>
  )
};

export default CertificateCard;
