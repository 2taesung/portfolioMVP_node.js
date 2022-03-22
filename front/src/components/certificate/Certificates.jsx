import React, { useState, useEffect } from "react";
import CertificateAddForm from "./CertificateAddForm";
import Certificate from "./Certificate";
import { Card, Button, Col } from "react-bootstrap";
import { UserStateContext } from "../../App";
import * as Api from "../../api";

const Certificates = ({ isEditable }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [certificateList, setCertificateList] = useState([]);
  const userState = React.useContext(UserStateContext);
  const { id } = userState.user;

  useEffect(() => {
    Api.get("certificatelist", id).then((res) => setCertificateList(res.data));
  }, [certificateList, userState]);

  const newCertificateHandler = (newCertificate) => {
    const newCertificateList = [...certificateList]
    newCertificateList.push(newCertificate)
    setCertificateList(newCertificateList)
  }

  return (
    <Card className="mb-1 ms-1 mr-1">
      <Card.Body>
        <Col className="justify-content-md-center">
          <Card.Title>자격증</Card.Title>
        </Col>
        <Col>
          <Certificate isEditable={isEditable} certificateList={certificateList} />
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
        {isAdding && 
          <CertificateAddForm 
            setIsAdding={setIsAdding} 
            addCertificateList={newCertificateHandler} 
          />}
      </Card.Body>
    </Card>
  );
};

export default Certificates;
