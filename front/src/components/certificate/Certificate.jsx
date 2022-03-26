import React from "react"
import CertificateCard from "./CertificateCard"

const Certificate = ({ isEditable, certificateList, setCertificateList }) => {
  return (
    <>
      {certificateList.map((certi) => {
        return (
          <CertificateCard
            isEditable={isEditable}
            key={`certi-${certi.id}`}
            user={`certi-${certi.user_id}`}
            certificateList={certificateList}
            certi={{
              id: certi.id,
              title: certi.title,
              description: certi.description,
              when_date: certi.when_date,
            }}
            setCertificateList={setCertificateList}
          />
        )
      })}
    </>
  )
}

export default Certificate
