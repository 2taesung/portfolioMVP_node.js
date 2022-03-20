import React, { useState } from "react";
import { Button, Form, Container, Col, Row } from "react-bootstrap";
import * as Api from "../../api";

const AwardAddForm = ({ user, setIsAdding }) => {    
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")    
    
    const submitHandler = async (event) => {
        event.preventdefault()
        try {
            await Api.post("award/create", {
                user,
                title,
                description,
            })
        setIsAdding(false)
        } catch (err) {
            console.log("수상내역 추가 실패", err)
        }
    }    

    return (
        <Container>            
            <Row className="justify-content-md-center mt-5">
                <Col lg={8}>
                    <Form onSubmit={submitHandler}>
                        <Form.Group controlId="awardEditTitle" className="mb-3">
                            <Form.Control
                                type="text" 
                                placeholder="수상내역" 
                                value={title} 
                                onChange={event=>setTitle(event.target.value)} /> 
                            </Form.Group>

                            <Form.Group controlId="awardEditDescription" className="mb-3">
                                <Form.Control
                                    type="text" 
                                    placeholder="상세내역" 
                                    value={description} 
                                onChange={event=>setDescription(event.target.value)} />
                            </Form.Group>

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

export default AwardAddForm;