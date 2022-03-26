import React, { useState } from "react"
import { UserStateContext } from "../../App";
import { Button, Form, Col, Row, Container } from "react-bootstrap"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import * as Api from "../../api"

const ProjectAddForm = ({ addProjectList, setIsAdding }) => {    
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const userState = React.useContext(UserStateContext);
    const { id } = userState.user;
    
    
    const handleAddClick = async (event) => {
        event.stopPropagation()
        const res = await Api.post("project/create", {
                user_id: id,
                title,
                description,
                from_date: startDate,
                to_date: endDate,
            })
            const newProject = res.data
            addProjectList(newProject)
            setIsAdding(false)
    }    

    return (
        <Container>
            <Form>
                <Form.Group controlId="projectEditTitle" className="mb-3">
                    <Form.Control
                        type="text"
                        placeholder="프로젝트 제목"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="projectEditDescription" className="mb-3">
                    <Form.Control
                        type="text"
                        placeholder="상세내역"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                    />
                </Form.Group>

                <Row className="justify-content-start">
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

export default ProjectAddForm;