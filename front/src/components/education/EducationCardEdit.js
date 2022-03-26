import React, { useState } from "react";
import * as Api from "../../api";
import { Button, Form, Card, Col, Row, Container } from "react-bootstrap";

function EducationCardEdit({ setIsEditing, cardInfo, onEditEducation }) {
  const [school, setSchool] = useState(cardInfo.school);
  const [major, setMajor] = useState(cardInfo.major);
  const [position, setPosition] = useState(cardInfo.position);
  const card_id = cardInfo.id;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Api.put("educations/" + card_id, {
        id: card_id,
        school,
        major,
        position,
      });
    } catch (err) {
      console.log("Education edit에 실패하였습니다.");
    }
    onEditEducation(card_id, school, major, position);
    setIsEditing(false);
  };

  return (
    <>
      <Container className="mb-2">
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="school" className="mb-3">
              <Form.Control
                value={school}
                onChange={(e) => {
                  e.preventDefault();
                  setSchool(e.target.value);
                }}
                type="text"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                value={major}
                onChange={(e) => {
                  setMajor(e.target.value);
                }}
                type="text"
              />
            </Form.Group>

            <Form.Group className="mb-3 mt-3">
              <Form.Check
                inline
                label="재학중"
                name="position"
                type="radio"
                id="inline-radio-1"
                value="재학중"
                defaultChecked={position === "재학중"}
                onChange={(e) => {
                  setPosition(e.target.value);
                }}
              />
              <Form.Check
                inline
                label="학사졸업"
                name="position"
                type="radio"
                id="inline-radio-2"
                value="학사졸업"
                defaultChecked={position === "학사졸업"}
                onChange={(e) => {
                  setPosition(e.target.value);
                }}
              />
              <Form.Check
                inline
                label="석사졸업"
                name="position"
                type="radio"
                id="inline-radio-3"
                value="석사졸업"
                defaultChecked={position === "석사졸업"}
                onChange={(e) => {
                  setPosition(e.target.value);
                }}
              />
              <Form.Check
                inline
                label="박사졸업"
                name="position"
                type="radio"
                id="inline-radio-4"
                value="박사졸업"
                defaultChecked={position === "박사졸업"}
                onChange={(e) => {
                  setPosition(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group as={Row} className="mt-3 text-center">
              <Col sm={{ span: 20 }}>
                <Button variant="primary" type="submit" className="me-3">
                  확인
                </Button>
                <Button variant="secondary" onClick={() => setIsEditing(false)}>
                  취소
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </Card.Body>
      </Container>
    </>
  );
}

export default EducationCardEdit;
