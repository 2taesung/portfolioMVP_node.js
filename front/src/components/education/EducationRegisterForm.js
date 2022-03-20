import React, { useState } from "react";
import * as Api from "../../api";
import { Button, Form, Card, Col, Row } from "react-bootstrap";
import RadioButtonOnRegister from "./RadioButtonOnRegister";

function EducationRegisterForm({
  portfolioOwnerId,
  setOnRegister,
  onNewEducation,
}) {
  console.log(portfolioOwnerId);
  const [school, setSchool] = useState("");
  const [major, setMajor] = useState("");
  const [position, setPosition] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await Api.post("education/create", {
      user_id: portfolioOwnerId,
      school,
      major,
      position,
    });

    const newEducation = res.data;
    onNewEducation(newEducation);

    // try catch 사용 ---> 왜해야해?
    // let newEducation =''
    // try {
    //     const  res = await Api.post("education/create", {
    //         "user_id": portfolioOwnerId,
    //         school,
    //         major,
    //         position
    //     })
    //     newEducation = res.data
    //     console.log('done requesting education creation')
    // } catch (err) {
    //     console.log("Education 생성에 실패하였습니다.")
    // }
    // onNewEducation(newEducation)

    setOnRegister(false);
  };

  return (
    <Card>
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
              <Button variant="secondary" onClick={() => setOnRegister(false)}>
                취소
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default EducationRegisterForm;
