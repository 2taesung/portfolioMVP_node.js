import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

function OthersEducationCards({ educations }) {
  return (
    <>
      {
        educations.map((item) => {
          return (
            <>
              <Container className="mb-1 ms-1 mr-1">
                <Card.Body>
                  <Row>
                    <Col>
                      <Card.Title>학력</Card.Title>
                      <Card.Text>{item.school}</Card.Text>
                      <Card.Text className="mb-2 text-muted">{`${item.major}(${item.position})`}</Card.Text>
                    </Col>
                  </Row>
                </Card.Body>
              </Container>
            </>
          );
        })
      }
    </>
  );
}

export default OthersEducationCards;
