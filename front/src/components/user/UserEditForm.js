import React, { useState } from "react";
import { Button, Form, Card, Col, Row, ButtonGroup } from "react-bootstrap";
import * as Api from "../../api";

function UserEditForm({ user, setIsEditing, setUser }) {
  //useState로 name 상태를 생성함.
  const [name, setName] = useState(user.name);
  //useState로 email 상태를 생성함.
  const [email, setEmail] = useState(user.email);
  //useState로 description 상태를 생성함.
  const [description, setDescription] = useState(user.description);
  const [backgroundColor, setBackgroundColor] = useState(user.backgroundColor);
  const [editFormColor, setEditFormColor] = useState(backgroundColor);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // "users/유저id" 엔드포인트로 PUT 요청함.
    const res = await Api.put(`users/${user.id}`, {
      name,
      email,
      description,
      backgroundColor,
    });
    // 유저 정보는 response의 data임.
    const updatedUser = res.data;
    // 해당 유저 정보로 user을 세팅함.
    setUser(updatedUser);

    // isEditing을 false로 세팅함.
    setIsEditing(false);
  };

  return (
    <Card className="mb-2" style={{backgroundColor: editFormColor}}>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="useEditName" className="mb-3">
            <Form.Control
              type="text"
              placeholder="이름"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="userEditEmail" className="mb-3">
            <Form.Control
              type="email"
              placeholder="이메일"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="userEditDescription">
            <Form.Control
              type="text"
              placeholder="정보, 인사말"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <ButtonGroup>

            <Button
              variant="primary"
              class="btn text-dark"
              style={{ backgroundColor: "#ffb6c1" }}
              onClick={(e) => {
                setBackgroundColor("#ffb6c1")
                setEditFormColor("#ffb6c1")
              }}
            >
              pink
            </Button>
            <Button
              variant="primary"
              class="btn text-dark"
              style={{ backgroundColor: "#e6e6fa" }}
              onClick={(e) => {
                setBackgroundColor("#e6e6fa")
                setEditFormColor("#e6e6fa")
              }}
            >
              lavender
            </Button>
            <Button
              variant="primary"
              class="btn text-black"
              style={{ backgroundColor: "#663399" }}
              onClick={(e) => {
                setBackgroundColor("#663399")
                setEditFormColor("#663399")
              }}
            >
              violet
            </Button>
            <Button
              variant="primary"
              class="btn text-white"
              style={{ backgroundColor: "#2e8b57" }}
              onClick={(e) => {
                setBackgroundColor("#2e8b57")
                setEditFormColor("#2e8b57")
              }}
            >
              green
            </Button>
            <Button
              variant="primary"
              class="btn text-dark"
              style={{ backgroundColor: "#FFFACD" }}
              onClick={(e) => {
                setBackgroundColor("#FFFACD")
                setEditFormColor("#FFFACD")
              }}
            >
              lemon
            </Button>

          </ButtonGroup>

          <ButtonGroup>

            <Button
              variant="primary"
              class="btn text-dark"
              style={{ backgroundColor: "#ADD8E6" }}
              onClick={(e) => {
                setBackgroundColor("#ADD8E6")
                setEditFormColor("#ADD8E6")
              }}
            >
              lightblue
            </Button>
            <Button
              variant="primary"
              class="btn text-black"
              style={{ backgroundColor: "#FF4500" }}
              onClick={(e) => {
                setBackgroundColor("#FF4500")
                setEditFormColor("#FF4500")
              }}
            >
              orange red
            </Button>
            <Button
              variant="primary"
              class="btn text-dark"
              style={{ backgroundColor: "#00FF00" }}
              onClick={(e) => {
                setBackgroundColor("#00FF00")
                setEditFormColor("#00FF00")
              }}
            >
              lime
            </Button>
            <Button
              variant="primary"
              class="btn text-black"
              style={{ backgroundColor: "#7B68EE" }}
              onClick={(e) => {
                setBackgroundColor("#7B68EE")
                setEditFormColor("#7B68EE")
              }}
            >
              slateblue
            </Button>

          </ButtonGroup>


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
    </Card>
  );
}

export default UserEditForm;
