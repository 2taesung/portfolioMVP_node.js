import React, {useEffect, useState} from "react";
import * as Api from "../../api";
import AwardCard from './AwardCard'
import { Row, Button } from "react-bootstrap"

const Award = ({portfolioOwnerId, isEditable, setIsEditing}) => {
    const [awardList, setAwardList] = useState([])
    const userId = portfolioOwnerId

    useEffect(()=>{
        Api.get("awardlist", userId)
        .then((res) => setAwardList(res.data))
    }, [awardList])

    return (
        <>
            {awardList.map((award)=> {
                <AwardCard 
                    key={award.id}
                    setIsEditing={setIsEditing}
                    isEditable={isEditable} 
                />
                {isEditable && (
                    <Row>
                        <Button
                            variant="outline-info"
                            size="sm"
                            onClick={() => setIsEditing(true)}
                        >
                            편집
                        </Button>
                    </Row>
                )}
            })}
        </>
    )
}

export default Award;