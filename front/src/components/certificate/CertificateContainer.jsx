import React, { useState, useEffect } from "react"
import CertificateAddForm from "./CertificateAddForm"
import Certificate from "./Certificate"
import { Card, Button, Col } from "react-bootstrap"
import { UserStateContext } from "../../App"
import * as Api from "../../api"

const CertificateContainer = ({ portfolioOwnerId, isEditable }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [certificateList, setCertificateList] = useState([])

  const newCertificateHandler = React.useCallback(
    (newCertificate) => {
      const newList = certificateList.concat(newCertificate)
      setCertificateList(newList)
    },
    [certificateList]
  )
  // const newCertificateList = [...certificateList];
  // newCertificateList.push(newCertificate);
  // setCertificateList(newCertificateList);
  
  useEffect(() => {
    Api.get("certificatelist", portfolioOwnerId).then((res) => setCertificateList(res.data))
  }, [])

  return (
      <Card>
        <Card.Body>
          <Col>
            <Card.Title>자격증</Card.Title>
          </Col>
          <Col>
            <Certificate
              isEditable={isEditable}
              certificateList={certificateList}
              setCertificateList={setCertificateList}
            />
          </Col>

          {isEditable && (
            <Col className="text-center" sm={{ span: 20 }}>
              <Button
                variant="primary"
                size="md"
                onClick={() => setIsAdding(true)}
              >
                +
              </Button>
            </Col>
          )}

          {isAdding && (
            <CertificateAddForm
              setIsAdding={setIsAdding}
              addCertificateList={newCertificateHandler}
            />
          )}
        </Card.Body>
      </Card>
  );
};

export default CertificateContainer;
