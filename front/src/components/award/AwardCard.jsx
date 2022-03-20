import React from "react"
import AwardEditForm from './AwardEditForm'
import { Card } from "react-bootstrap"

const AwardCard = ({ award, isEditing }) => { 

    return (
        <Card>
        {isEditing ? (
            <AwardEditForm />
        ): (
            <Card.Body>
                <Card.Subtitle>{award.title}</Card.Subtitle>
                <Card.Text>{award.description}</Card.Text>                
            </Card.Body>
        )}
        </Card>          
    )
}

export default AwardCard;