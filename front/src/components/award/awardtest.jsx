import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Button, Form, Card, Col, Row } from "react-bootstrap";

const AwardTest = (award) => {
    const [awardList, setAwardList] = useState(null)
    const [title, setTitle] = useState(award.title)
    const [body, setBody] = useState(award.body)
    const [isEditing, setIsEditing] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();    
        const res = await axios.put(`posts/${award.id}`, {
          title,
          body,
        });
        const updatedAwardList = res.data;
        setAwardList(updatedAwardList);
        setIsEditing(false);
      };


    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
                .then((res) => {
                    return res.json()
                })
                .then((json) => setAwardList(json))
                .catch((error) => console.error)
        
    },[])

    
        
    return (
        <>
        {isEditing ? (
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
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
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
        ) :(
            <>
              {awardList && (
                  <>
                    {awardList.map((award) => (
                        <>
                            <p>{award.title}</p>
                            <p>{award.body}</p>
                            <Button onClick={()=>setIsEditing(true)}>편집</Button>
                        </>            
                    ))}
                    </>
              )}                
            </>
            )}
            
        </>
    )
}

export default AwardTest;