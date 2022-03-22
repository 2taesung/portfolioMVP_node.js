import React, { useEffect, useState } from "react";
import OthersEducationCards from "./OthersEducationCards";
import MyEducationCards from "./MyEducationCards";
import * as Api from "../../api";

function Education({ portfolioOwnerId, isEditable }) {
  const [educations, setEducations] = useState([]);

  const handleAddEducationClick = React.useCallback(
    (educationData) => {
      const newList = educations.concat(educationData);
      setEducations(newList);
    },
    [educations]
  );

  const handleEditEducation = React.useCallback(
    (card_id, school, major, position) => {
      const mapped = educations.map((education) => {
        if (education.id === card_id) {
          return { id: card_id, school, major, position };
        } else {
          return { ...education };
        }
      });

      setEducations(mapped);
    },
    [educations]
  );

  useEffect(() => {
    Api.get("educationlist", portfolioOwnerId).then((res) =>
      setEducations(res.data)
    );
  }, []);

  /**
   * 본인의 카드
   */
  if (isEditable) {
    return (
      <MyEducationCards
        educations={educations}
        portfolioOwnerId={portfolioOwnerId}
        handleAddEducationClick={handleAddEducationClick}
        onEditEducation={handleEditEducation}
      ></MyEducationCards>
    );
  }

  return <OthersEducationCards educations={educations}></OthersEducationCards>;
}

export default Education;

// school={item.school}
// major={item.major}
// position={item.position}
