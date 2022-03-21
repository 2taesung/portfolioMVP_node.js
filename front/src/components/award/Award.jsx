import React, { useEffect, useState } from "react";
import * as Api from "../../api";
import AwardCard from "./AwardCard";
import { Row, Button } from "react-bootstrap";
import { UserStateContext } from "../../App";

const Award = ({ isEditable, setIsEditing }) => {
  const [awardList, setAwardList] = useState([]);

  const userState = React.useContext(UserStateContext);

  useEffect(() => {
    const { id } = userState.user;
    console.log(id);
    Api.get("awardlist", id).then((res) => setAwardList(res.data));
  }, [awardList, userState]);

  return (
    <>
      {[
        { id: 1, title: "title1", description: "desc1" },
        { id: 2, title: "title2", description: "desc2" },
        { id: 3, title: "title3", description: "desc3" },
      ].map((award) => {
        return (
          <AwardCard
            key={`award-${award.id}`}
            award={{
              id: award.id,
              title: award.title,
              description: award.description,
            }}
          />
        );
      })}
    </>
  );
};

export default Award;
