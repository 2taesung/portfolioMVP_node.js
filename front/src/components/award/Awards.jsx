import React, { useState, useEffect } from "react";
import AwardAddForm from "./AwardAddForm";
import Award from "./Award";
import { Card, Button, Col } from "react-bootstrap";

const Awards = ({ isEditable }) => {
  const [isAdding, setIsAdding] = useState(false);

  return (
    <Card className="mb-2 ms-3 mr-5" style={{ width: "60rem" }}>
      <Card.Body>
        <Col className="justify-content-md-center">
          <Card.Title>수상이력</Card.Title>
        </Col>
        <Col>
          <Award isEditable={isEditable} />
        </Col>

        {isEditable && (
          <Col className="text-center" sm={{ span: 20 }}>
            <Button
              variant="primary"
              size="sm"
              onClick={() => setIsAdding(true)}
            >
              +
            </Button>
          </Col>
        )}
        {isAdding && <AwardAddForm setIsAdding={setIsAdding} />}
      </Card.Body>
    </Card>
  );
};

export default Awards;
