import React, { useState, useEffect } from "react"
import CertificateEditForm from "./CertificateEditForm"
import { Card, Col, Row, Button, Container } from "react-bootstrap"
import { UserStateContext } from "../../App"
import * as Api from "../../api"

const MyCard = () => {
    const [isEditing, setIsEditing] = React.useState(false)
    const [certificateList, setCertificateList] = useState([])

    const userState = React.useContext(UserStateContext)
    const { id } = userState.user

    useEffect(() => {
        Api.get("certificatelist", id).then((res) => setCertificateList(res.data))
    }, [])

        return (
            <>
                {isEditing ? (
                    <CertificateEditForm
                        setIsEditing={setIsEditing}
                        certificateList={certificateList}
                        setCertificateList={setCertificateList}
                    />
                ) : (
                    <>
                        {certificateList.map((item) => {
                            return (
                                <Container className="mb-1 ms-1 mr-1">
                                    <Card.Body>
                                        <Row>
                                            <Col>
                                                <Card.Text className="mb-1">{item.title}</Card.Text>
                                                <Card.Subtitle className="mb-1 text-muted">{item.description}</Card.Subtitle>
                                            </Col>

                                            <Col className="mt-3 text-center text-info">
                                                <Button
                                                    className="float-end"
                                                    variant="outline-info"
                                                    size="sm"
                                                    onClick={() => setIsEditing(true)}
                                                >
                                                    삭제
                                                </Button>
                                                <Button
                                                    className="float-end me-2"
                                                    variant="outline-info"
                                                    size="sm"
                                                    onClick={() => setIsEditing(true)}
                                                >
                                                    편집
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Container>
                            )
                        })}
                    </>
                )}
            </>)
    }

    

export default MyCard
