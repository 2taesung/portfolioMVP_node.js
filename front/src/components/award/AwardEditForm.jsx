import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Form, Card, Col, Row } from "react-bootstrap";
import * as Api from "../../api";

const AwardEditForm = ({award, setIsEditing, setAwardList}) => {
    const [title, setTitle] = useState(award.title)
    const [description, setDescription] = useState(award.description)
    const params = useParams()
    const userId = params.id

    const handleSubmit = async (e) => {
        e.preventDefault();    
        const res = await Api.put(`awards/${userId}`, {
          title,
          description,
        });
        const updatedAwardList = res.data;
        setAwardList(updatedAwardList);
        setIsEditing(false);
      };

    return (
        <Card className="mb-2">
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="awardEditTitle" className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="수상내역"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </Form.Group>
                    
                    <Form.Group controlId="awardEditDescription">
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

export default AwardEditForm;
