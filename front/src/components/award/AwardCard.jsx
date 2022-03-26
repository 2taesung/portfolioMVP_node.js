import React from "react"
import AwardEditForm from "./AwardEditForm"
import { Card, Col, Row, Button, Container } from "react-bootstrap"
import { UserStateContext } from "../../App"

const AwardCard = ({ isEditable, awd, awardList, setAwardList }) => {
  const [isEditing, setIsEditing] = React.useState(false)

  if (isEditable) {
    return (
      <>
        {isEditing ? (
          <AwardEditForm
            setIsEditing={setIsEditing}
            awd={awd}
            awardList={awardList}
            setAwardList={setAwardList}
          />
        ) : (
          <Container className="mb-1 ms-1 mr-1">
            <Card.Body>
              <Row>
                <Col>
                  <Card.Text className="mb-1">{awd.title}</Card.Text>
                  <Card.Subtitle className="mb-1 text-muted">{awd.description}</Card.Subtitle>
                </Col>

                <Col className="mt-3 text-center text-info">
                  <Button
                    className="float-end "
                    variant="outline-info"
                    size="sm"
                    onClick={() => setIsEditing(true)}
                  >
                    편집
                  </Button>
                  <Button
                    className="float-end"
                    variant="outline-info"
                    size="sm"
                    onClick={() => setIsEditing(true)}
                  >
                    삭제
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Container>
        )}
      </>
    )
  }

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
