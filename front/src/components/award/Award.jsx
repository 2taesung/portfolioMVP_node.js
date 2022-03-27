import React from "react"
import AwardCard from "./AwardCard"
import MyCard from "./MyCard"

const Award = ({ isEditable, awardList, setAwardList }) => {

  if(isEditable) {
    return <MyCard />
  }

  return (
    <>
      {awardList.map((awd) => {
        return (
          <AwardCard
            isEditable={isEditable}
            key={`awd-${awd.id}`}
            user={`awd-${awd.user_id}`}
            awardList={awardList}
            awd={{
              id: awd.id,
              title: awd.title,
              description: awd.description,
            }}
            setAwardList={setAwardList}
          />
        )
      })}
    </>
  )
}

export default Award
