import React, { useState } from "react";
import { Button, Form, Card, Col, Row } from "react-bootstrap";
import * as Api from "../../api";

const CertificateEditForm = ({certi, setIsEditing, setCertificateList}) => {
    const [title, setTitle] = useState(certi.title)
    const [description, setDescription] = useState(certi.description)
    

    const handleSubmit = async (e) => {
        e.preventDefault();    
        const res = await Api.put(`certificates/${certi.id}`, {
          title,
          description,
        });
        const updatedCertificateList = res.data;
        setCertificateList(updatedCertificateList);
        setIsEditing(false);
      };

    return (
        <Card className="mb-2">
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="certificateEditTitle" className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="자격증 제목"
                            value={title}
                            onChange={(e) => {
                                e.preventDefault();
                                setTitle(e.target.value)
                            }}
                        />
                    </Form.Group>
                    
                    <Form.Group controlId="prjectEditDescription">
                        <Form.Control
                            type="text"
                            placeholder="상세내역"
                            value={description}
                            onChange={(e) => {
                                e.preventDefault();
                                setDescription(e.target.value)
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
        </Card>
    )
}

export default CertificateEditForm;
