import React from "react";
import CertificateCard from "./CertificateCard";

const Certificate = ({ certificateList }) => {

  return (
    <>
      {certificateList.map((certi) => {
        return (
          <CertificateCard
            user={`certi-${certi.user_id}`}
            key={`certi-${certi.id}`}
            certi={{
              id: certi.id,
              title: certi.title,
              description: certi.description,
              when_date: certi.whenDate,
            }}
          />
        );
      })}
    </>
  );
};

export default Certificate;
