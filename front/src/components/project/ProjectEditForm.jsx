import React, { useState } from "react"
import { Button, Form, Card, Col, Row } from "react-bootstrap"
import * as Api from "../../api"
import { UserStateContext } from "../../App"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

const ProjectEditForm = ({ prj, setIsEditing, setProjectList }) => {
    const [title, setTitle] = useState(prj.title)
    const [description, setDescription] = useState(prj.description)
    const [startDate, setStartDate] = useState(new Date(prj.from_date))
    const [endDate, setEndDate] = useState(new Date(prj.to_date))
    const userState = React.useContext(UserStateContext)
    const { id } = userState.user

    const handleSubmit = async (e) => {
        e.stopPropagation()
        e.preventDefault()
        const res = await Api.put(`projects/${prj.id}`, {
            user_id: id,
            id: prj.id,
            title,
            description,
            from_date: startDate,
            to_date: endDate,
        });
        const updatedProject = res.data
        const updatedList = updatedProject.map((prj) => {
            if (prj.id === updatedProject.id) {
                return {
                    ...updatedProject,
                }
            }
            return prj
        })
        setProjectList(updatedList)
        setIsEditing(false)
    }

    return (
        <Card className="mb-2">
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="projcetEditTitle" className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="수상내역"
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

                    <Row className="mt-3">
                        <Col md="3">
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                            />
                        </Col>
                        <Col md="3">
                            <DatePicker
                                selected={endDate}
                                onChange={(date) => setEndDate(date)}
                            />
                        </Col>
                    </Row>

                    <Form.Group as={Row} className="mt-3 text-center">
                        <Col sm={{ span: 20 }}>
                            <Button variant="primary" type="button" className="me-3">
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
