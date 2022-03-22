import React, { useState } from "react";
import { Button, Form, Card, Col, Row } from "react-bootstrap";
import * as Api from "../../api";

const ProjectEditForm = ({prj, setIsEditing, setProjectList}) => {
    const [title, setTitle] = useState(prj.title)
    const [description, setDescription] = useState(prj.description)
    

    const handleSubmit = async (e) => {
        e.preventDefault();    
        const res = await Api.put(`projects/${prj.id}`, {
          title,
          description,
        });
        const updatedProjectList = res.data;
        setProjectList(updatedProjectList);
        setIsEditing(false);
      };

    return (
        <Card className="mb-2">
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="projcetEditTitle" className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="수상내역"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </Form.Group>
                    
                    <Form.Group controlId="prjectEditDescription">
                        <Form.Control
                            type="text"
                            placeholder="상세내역"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
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
        </Card>
    )
}

export default ProjectEditForm;
