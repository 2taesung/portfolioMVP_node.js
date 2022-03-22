import React, { useState } from "react"
import { UserStateContext } from "../../App";
import { Button, Form, Container, Col, Row } from "react-bootstrap"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import * as Api from "../../api"

const ProjectAddForm = ({ setIsAdding }) => {    
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const userState = React.useContext(UserStateContext);
    const { id } = userState.user;
    
    
    const submitHandler = (event) => {
        event.preventdefault()
        Api
            .post("project/create", {
                id,
                title,
                description,
                startDate,
                endDate,
            })
            .then(setIsAdding(false))
    }    

    return (
        <Container>            
            <Row className="justify-content-md-center mt-5">
                <Col lg={8}>
                    <Form onSubmit={submitHandler}>
                        <Form.Group controlId="awardEditTitle" className="mb-3">
                            <Form.Control
                                type="text" 
                                placeholder="프로젝트 제목" 
                                value={title} 
                                onChange={(event)=>setTitle(event.target.value)} /> 
                            </Form.Group>

                            <Form.Group controlId="awardEditDescription" className="mb-3">
                                <Form.Control
                                    type="text" 
                                    placeholder="상세내역" 
                                    value={description} 
                                onChange={(event)=>setDescription(event.target.value)} />
                            </Form.Group>
                            
                            <Row>
                                <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} />
                                <DatePicker selected={endDate} onChange={(date:Date) => setEndDate(date)} />
                            </Row>

                            <Form.Group as={Row} className="mt-3 text-center">
                                <Col sm={{span:20}}>
                                    <Button variant="primary" type="submit" className="me-3">
                                        확인
                                    </Button>
                                    <Button variant="secondary" onClick={() => setIsAdding(false)}>
                                        취소
                                    </Button>
                                </Col>
                            </Form.Group>  
                        </Form>
                    </Col>
                </Row>
            </Container>
    )

}

export default ProjectAddForm;