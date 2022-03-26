import React, { useState } from "react"
import { UserStateContext } from "../../App"
import { Button, Form, Col, Row, Container } from "react-bootstrap"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import * as Api from "../../api"

const CertificateAddForm = ({ addCertificateList, setIsAdding }) => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [when_date, setWhen_date] = useState(new Date())
  const userState = React.useContext(UserStateContext)
  const { id } = userState.user

  const handleAddClick = async (event) => {
    event.stopPropagation()
    const res = await Api.post("certificate/create", {
      user_id: id,
      title,
      description,
      when_date,
    })
    const newCertificate = res.data
    addCertificateList(newCertificate)
    setIsAdding(false)
  }

  
  return (
    <Container>
      <Form>
        <Form.Group controlId="certificateEditTitle" className="mb-3">
          <Form.Control
            type="text"
            placeholder="자격증 제목"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="certificateEditDescription" className="mb-3">
          <Form.Control
            type="text"
            placeholder="상세내역"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </Form.Group>

        <Row>
          <DatePicker
            selected={when_date}
            onChange={(date) => setWhen_date(date)}
          />
        </Row>

        <Form.Group as={Row} className="mt-3 text-center">
          <Col sm={{ span: 20 }}>
            <Button
              variant="primary"
              type="button"
              className="me-3"
              onClick={handleAddClick}
            >
              확인
            </Button>
            <Button variant="secondary" onClick={() => setIsAdding(false)}>
              취소
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </Container>
  )
}

export default CertificateAddForm;
