import React, { useState } from "react";
import EducationCardEdit from "./EducationCardEdit";
import { Container, Card, Row, Button, Col } from "react-bootstrap";

function MyEducationCard({ school, major, position, id, onEditEducation }) {
  // 편집 모드 스위처 생성 - 사용자가 처음 페이지 접근할 시 default 로 false
  const [isEditing, setIsEditing] = useState(false);

  const cardInfo = {
    school,
    major,
    position,
    id,
  };

  return (
    <>
      {isEditing ? (
        <EducationCardEdit
          setIsEditing={setIsEditing}
          cardInfo={cardInfo}
          onEditEducation={onEditEducation}
        ></EducationCardEdit>
      ) : (
        <Container className="mb-1 ms-1 mr-1">
          <Card.Body>
            <Row>
              <Col>
                <Card.Text>{school}</Card.Text>
                <Card.Text className="mb-2 text-muted">{`${major}(${position})`}</Card.Text>
              </Col>
              <Col className="mt-3 text-center text-info">
                <Button
                  className="float-end"
                  variant="outline-info"
                  size="sm"
                  onClick={() => setIsEditing(true)}
                >
                  {" "}
                  편집
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Container>
      )}
    </>
  );
}

export default MyEducationCard;
