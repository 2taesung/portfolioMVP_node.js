import React, { useState, useEffect } from "react"
import AwardAddForm from "./AwardAddForm"
import Award from "./Award"
import { Card, Button, Col } from "react-bootstrap"
import { UserStateContext } from "../../App"
import * as Api from "../../api"

const Awards = ({ isEditable }) => {
  const [isAdding, setIsAdding] = useState(false)
  const [awardList, setAwardList] = useState([])
  const userState = React.useContext(UserStateContext);
  const { id } = userState.user;

  const newAwardHandler = React.useCallback(
    (newAward) => {
      const newList = awardList.concat(newAward)
      setAwardList(newList)
    },
    [awardList]
  )
  useEffect(() => {
    Api.get("awardlist", id).then((res) => setAwardList(res.data))
  }, [])

  return (
    <Card>
        <Card.Body>
          <Col>
            <Card.Title>수상이력</Card.Title>
          </Col>
          <Col>
            <Award
              isEditable={isEditable}
              awardList={awardList}
              setAwardList={setAwardList}
            />
          </Col>

          {isEditable && (
            <Col className="text-center" sm={{ span: 20 }}>
              <Button
                variant="primary"
                size="md"
                onClick={() => setIsAdding(true)}
              >
                +
              </Button>
            </Col>
          )}

          {isAdding && (
            <AwardAddForm
              setIsAdding={setIsAdding}
              addAwardList={newAwardHandler}
            />
          )}
        </Card.Body>
      </Card>
  );
};

export default Awards;
