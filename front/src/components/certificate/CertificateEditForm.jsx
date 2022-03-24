import React, { useState } from "react";
import { Button, Form, Card, Col, Row } from "react-bootstrap";
import * as Api from "../../api";
import { UserStateContext } from "../../App";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CertificateEditForm = ({certi, setIsEditing, certificateList, setCertificateList}) => {
    const [title, setTitle] = useState(certi.title)
    const [description, setDescription] = useState(certi.description)
    const [whenDate, setWhenDate] = useState(new Date())
    const userState = React.useContext(UserStateContext)
    const {id} = userState.user
    

    const handleSubmit = async (e) => {
        e.stopPropagation()
        e.preventDefault()
        const res = await Api.put(`certificates/${certi.id}`, {
            user_id: id,
            id: certi.id,
            title,
            description,
            whenDate,
        });
        const updatedCertificate = res.data;
        const updatedList = certificateList.concat(updatedCertificate)
        setCertificateList(updatedList)
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

                    <Row>
                        <DatePicker
                            selected={whenDate}
                            onChange={(date) => setWhenDate(date)}
                        />
                    </Row>

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
