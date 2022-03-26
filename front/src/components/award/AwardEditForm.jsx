import React, { useState } from "react"
import { Container, Button, Form, Card, Col, Row } from "react-bootstrap"
import * as Api from "../../api"
import { UserStateContext } from "../../App"

const AwardEditForm = ({awd, setIsEditing, awardList, setAwardList}) => {
    const [title, setTitle] = useState(awd.title)
    const [description, setDescription] = useState(awd.description)
    const userState = React.useContext(UserStateContext)
    const { id } = userState.user
    

    const handleSubmit = async (e) => {
        e.stopPropagation()
        e.preventDefault();    
        const res = await Api.put(`awards/${awd.id}`, {
            user_id: id,
            id: awd.id,
            title,
            description,
        });
        const updatedAward = res.data
        const updatedList = awardList.map((awd) => {
            if(awd.id === updatedAward.id) {
                return {
                    ...updatedAward,
                }
            }
            return awd
        })
        setAwardList(updatedList)
        setIsEditing(false)
      }

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

export default AwardEditForm