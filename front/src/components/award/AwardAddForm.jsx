import React, { useState } from "react"
import { UserStateContext } from "../../App"
import { Button, Form, Container, Col, Row } from "react-bootstrap"
import * as Api from "../../api"

const AwardAddForm = ({ addAwardList, setIsAdding }) => {    
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const userState = React.useContext(UserStateContext)
    const { id } = userState.user
    
    const handleAddClick = async (event) => {
        event.stopPropagation()
        event.preventdefault()
        const res = await Api.post("award/create", {
            user_id: id,
            title,
            description,
        })
        const newAward = res.data
        addAwardList(newAward)
        setIsAdding(false)
    }    

    return (
        <Container>
      <Form>
        <Form.Group controlId="certificateEditTitle" className="mb-3">
          <Form.Control
            type="text"
            placeholder="수상내역"
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

export default AwardAddForm;
