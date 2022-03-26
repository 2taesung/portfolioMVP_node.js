import React, { useState } from "react";
import CertificateEditForm from "./CertificateEditForm"
import { Card, Col, Row, Button, Container } from "react-bootstrap"
import moment from 'moment'
import * as Api from "../../api";


const CertificateCard = ({ isEditable, certi, certificateList, setCertificateList }) => {
  const [isEditing, setIsEditing] = React.useState(false)
  const whenDate = moment(certi.when_date).format('YYYY-MM-DD')

  // const removeHandler = async (event) => {
  //   event.stopPropagation()
  //   await Api.del(`certificatelist/${id}`, certi.id )
  // }

  // const removeHandler = React.useCallback(
  //   (removedCertificate) => {
  //     const removedList = certificateList.filter(removedCertificate)
  //     setCertificateList(removedList)
  //   },
  //   [certificateList]
  // )

  if (isEditable) {
    return (
      <>
        {isEditing ? (
          <CertificateEditForm
            setIsEditing={setIsEditing}
            certi={certi}
            certificateList={certificateList}
            setCertificateList={setCertificateList}
          />
        ) : (
          <Container className="mb-1 ms-1 mr-1">
            <Card.Body>
              <Row>
                <Col>
                  <Card.Text className="mb-1">{certi.title}</Card.Text>
                  <Card.Subtitle className="mb-1 text-muted">{certi.description}</Card.Subtitle>
                  <Card.Text className= "mb-1 text-muted">{whenDate}</Card.Text>
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
        <Card.Text className="mb-1">{certi.title}</Card.Text>
        <Card.Subtitle className="mb-1 text-muted">{certi.description}</Card.Subtitle>
        <Card.Text className="mb-1 text-muted">{whenDate}</Card.Text>
      </Col>
    </Container>
  )
};

export default CertificateCard;
