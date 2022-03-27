import React from "react"
import { Card, Col, Container } from "react-bootstrap"

const AwardCard = ({ awd }) => {

  return (
    <Container>
      <Col>
        <Card.Text className="mb-1">{awd.title}</Card.Text>
        <Card.Subtitle className="mb-1 text-muted">{awd.description}</Card.Subtitle>
      </Col>
    </Container>
  )
}

export default AwardCard
