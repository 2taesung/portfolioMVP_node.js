import { useNavigate } from "react-router-dom";
import { Card, Row, Button, Col } from "react-bootstrap";

function UserCard({ 
    user, 
    setIsEditing, 
    isEditable, 
    backgroundColor, 
    isNetwork
  }) {
  const navigate = useNavigate()

  function isDark() {
    return user?.backgroundColor === '#663399' || user?.backgroundColor === '#2e8b57' ||
    user?.backgroundColor ==='#FF4500'|| user?.backgroundColor ==='#7B68EE'
           ? 'white' : 'dark'
  }

  return (
    <Card 
      className="mb-2 ms-3 mr-5"
      style={{ backgroundColor: user?.backgroundColor }}
      text={isDark()}   
    >
      <Card.Body>
        <Row className="justify-content-md-center">
          <Card.Img
            style={{ width: "10rem", height: "8rem" }}
            className="mb-3"
            src="http://placekitten.com/200/200"
            alt="랜덤 고양이 사진 (http://placekitten.com API 사용)"
          />
        </Row>
        <Card.Title>{user?.name}</Card.Title>
        <Card.Subtitle className="mb-2">{user?.email}</Card.Subtitle>
        <Card.Text>{user?.description}</Card.Text>

        {isEditable && (
          <Col>
            <Row className="mt-3 text-center text-info">
              <Col sm={{ span: 20 }}>
                <Button
                  variant="outline-info"
                  size="sm"
                  onClick={() => setIsEditing(true)}
                >
                  편집
                </Button>
              </Col>
            </Row>
          </Col>
        )}

        {isNetwork && (
          <Card.Link
            className="mt-3"
            href="#"
            onClick={() => navigate(`/users/${user.id}`)}
          >
            포트폴리오
          </Card.Link>
        )}
      </Card.Body>
    </Card>
  );
}

export default UserCard;
