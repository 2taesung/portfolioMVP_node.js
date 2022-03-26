import React, { useState } from "react";
import * as Api from "../../api";
import { Container, Button, Form, Card, Col, Row } from "react-bootstrap";
import RadioButtonOnRegister from "./RadioButtonOnRegister";

function EducationRegisterForm({
  portfolioOwnerId,
  onRegister,
  onNewEducation,
}) {
  const [school, setSchool] = useState("");
  const [major, setMajor] = useState("");
  const [position, setPosition] = useState("");

  const handleSubmit = React.useCallback(
    async (e) => {
      e.preventDefault();
      const res = await Api.post("education/create", {
        user_id: portfolioOwnerId,
        school,
        major,
        position,
      });

      const newEducation = res.data;
      onNewEducation(newEducation);
      onRegister(false);
    },
    [portfolioOwnerId, school, major, position]
  );

  return (
    <Container>
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
              placeholder="학교이름"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              value={major}
              onChange={(e) => {
                setMajor(e.target.value);
              }}
              type="text"
              placeholder="전공"
            />
          </Form.Group>
          <RadioButtonOnRegister
            position={position}
            setPosition={setPosition}
          ></RadioButtonOnRegister>
          <Form.Group as={Row} className="mt-3 text-center">
            <Col sm={{ span: 20 }}>
              <Button variant="primary" type="submit" className="me-3">
                확인
              </Button>
              <Button variant="secondary" onClick={() => onRegister(false)}>
                취소
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </Card.Body>
    </Container>
  );
}

export default EducationRegisterForm;
