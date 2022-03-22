import React from "react";
import CertificateCard from "./CertificateCard";

const Certificate = ({ certificateList }) => {
  return (
    <div>
      {certificateList.map((certi) => {
        return (
          <CertificateCard
            key={`certi-${certi.id}`}
            user={`certi-${certi.user_id}`}
            certi={{
              id: certi.id,
              title: certi.title,
              description: certi.description,
              when_date: certi.whenDate,
            }}
          />
        );
      })}
    </div>
  );
};

export default Certificate;
