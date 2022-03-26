import React, { useState } from "react";
import styled from "styled-components";
import MyEducationCard from "./MyEducationCard";
import EducationRegisterForm from "./EducationRegisterForm";
import { Button, Col } from "react-bootstrap";

function MyEducationCards({
  portfolioOwnerId,
  educations,
  handleAddEducationClick,
  onEditEducation,
}) {
  // 등록 모드 스위처 생성 - 사용자가 처음 페이지 접근 시 default로 false
  const [onRegister, setOnRegister] = useState(false);

  return (
    <MyEducationCardWrapper>
      {educations.map((item, idx) => {
        return (
          <MyEducationCard
            key={`education-card-${idx}`}
            school={item.school}
            major={item.major}
            position={item.position}
            id={item.id}
            onEditEducation={onEditEducation}
          ></MyEducationCard>
        );
      })}

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
          onNewEducation={handleAddEducationClick}
        />
      )}
    </MyEducationCardWrapper>
  );
}

export default MyEducationCards;

const MyEducationCardWrapper = styled.div`
`;
