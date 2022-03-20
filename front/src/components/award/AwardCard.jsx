import React from "react"
import AwardEditForm from './AwardEditForm'
import { Card } from "react-bootstrap"

const AwardCard = ({ award, isEditing }) => { 

    return (
        <Card>
        {isEditing ? (
            <AwardEditForm key={award.id} />
        ): (
            <Card.Body>
                <Card.Subtitle key={award.id}>{award.title}</Card.Subtitle>
                <Card.Text key={award.id}>{award.description}</Card.Text>                
            </Card.Body>
        )}
        </Card>          
    )
}

export default AwardCard;