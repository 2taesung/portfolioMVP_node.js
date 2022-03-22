import React, { useState } from "react";
import MyEducationCard from "./MyEducationCard";
import EducationRegisterForm from "./EducationRegisterForm";
import { Button, Col } from "react-bootstrap";

function MyEducationCards({
  portfolioOwnerId,
  educations,
  onNewEducation,
  onEditEducation,
}) {
  // 등록 모드 스위처 생성 - 사용자가 처음 페이지 접근 시 default로 false
  const [onRegister, setOnRegister] = useState(false);

  return (
    <>
      {educations == null ? (
        <></>
      ) : (
        educations.map((item) => {
          return (
            <MyEducationCard
              school={item.school}
              major={item.major}
              position={item.position}
              id={item.id}
              onEditEducation={onEditEducation}
            ></MyEducationCard>
          );
        })
      )}

      <Col className="text-center">
        <Button
          className="float-center"
          variant="primary"
          size="md"
          onClick={() => {
            setOnRegister(true);
          }}
        >
          +
        </Button>
      </Col>

      {onRegister && (
        <EducationRegisterForm
          portfolioOwnerId={portfolioOwnerId}
          onRegister={setOnRegister}
          onNewEducation={onNewEducation}
        />
      )}
    </>
  );
}

export default MyEducationCards;
