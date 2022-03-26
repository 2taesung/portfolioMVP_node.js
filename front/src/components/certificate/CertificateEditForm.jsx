import React, { useState } from "react"
import { Container, Button, Form, Card, Col, Row } from "react-bootstrap"
import * as Api from "../../api"
import { UserStateContext } from "../../App"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

const CertificateEditForm = ({ certi, setIsEditing, certificateList, setCertificateList }) => {
    const [title, setTitle] = useState(certi.title)
    const [description, setDescription] = useState(certi.description)
    const [when_date, setWhen_date] = useState(new Date())
    const userState = React.useContext(UserStateContext)
    const { id } = userState.user


    const handleSubmit = async (e) => {
        e.stopPropagation()
        e.preventDefault()
        const res = await Api.put(`certificates/${certi.id}`, {
            user_id: id,
            id: certi.id,
            title,
            description,
            when_date,
        });
        const updatedCertificate = res.data;
        const updatedList = certificateList.map((certi) => {
            if (certi.id === updatedCertificate.id) {
              return {
                ...updatedCertificate,
              };
            }
            return certi
          });
        setCertificateList(updatedList)
        setIsEditing(false)
    }

    return (
        <Container className="mb-2">
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

                    <Form.Group controlId="certificateEditDescription">
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

                    <Form.Group controlId="certificatedateDescription" className="mt-3">
                        <DatePicker
                            selected={when_date}
                            onChange={(date) => setWhen_date(date)}
                        />
                    </Form.Group>

                    <Form.Group as={Row} className="mt-3 text-center">
                        <Col sm={{ span: 20 }}>
                            <Button variant="primary" type="button" className="me-3" onClick={handleSubmit}>
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
    )
}

export default CertificateEditForm;
