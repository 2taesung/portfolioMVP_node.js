import React, { useEffect, useState } from "react";
import EducationCards from "./EducationCards";
import MyEducationCards from "./MyEducationCards";
import * as Api from "../../api";

function Education({ portfolioOwnerId, isEditable }) {
  useEffect(() => {
    Api.get("educationlist", portfolioOwnerId).then((res) =>
      setEducations(res.data)
    );
  }, [portfolioOwnerId]);

  const [educations, setEducations] = useState(null);

  const handleNewEducation = (newEducation) => {
    const newEducations = [...educations];
    newEducations.push(newEducation);
    setEducations(newEducations);
  };

  const handleEditEducation = (card_id, school, major, position) => {
    const mapped = educations.map((education) => {
      if (education.id === card_id) {
        return { id: card_id, school, major, position };
      } else {
        return { ...education };
      }
    });

    setEducations(mapped);
  };

  return (
    <>
      {isEditable ? (
        <MyEducationCards
          educations={educations}
          portfolioOwnerId={portfolioOwnerId}
          onNewEducation={handleNewEducation}
          onEditEducation={handleEditEducation}
        ></MyEducationCards>
      ) : (
        <EducationCards educations={educations}></EducationCards>
      )}
    </>
  );
}

export default Education;

// school={item.school}
// major={item.major}
// position={item.position}
