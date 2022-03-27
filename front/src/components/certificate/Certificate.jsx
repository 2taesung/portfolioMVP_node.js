import React, { useEffect } from "react"
import CertificateCard from "./CertificateCard"
import MyCard from "./MyCard"

const Certificate = ({ isEditable, certificateList, setCertificateList }) => {
  
  if(isEditable) {
    return <MyCard />
  }
  
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
