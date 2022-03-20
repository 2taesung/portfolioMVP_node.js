import React, {useState} from 'react'
import * as Api from "../../api"

function EducationCardEdit ({setIsEditing, cardInfo, onEditEducation}) {
    // setIsEditing(false) 
    console.log(cardInfo)
    const [school, setSchool] = useState(cardInfo.school)
    const [major, setMajor] = useState(cardInfo.major)
    const [position, setPosition] = useState(cardInfo.position)
    const card_id = cardInfo.id
    
    console.log(position)
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await Api.put("educations/"+card_id, {
                id: card_id,
                school,
                major,
                position
            })
        } catch (err) {
            console.log("Education edit에 실패하였습니다.")
        }
        onEditEducation(card_id, school, major, position)
        setIsEditing(false)
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input value={school} onChange={(e)=>{
                e.preventDefault()
                setSchool(e.target.value)
                }} type="text" />

            <input value={major} onChange={(e)=>{
                e.preventDefault()
                setMajor(e.target.value)
                }} type="text" />

            <div value = {position} onChange={(e)=>{
                e.preventDefault()
                setPosition(e.target.value)
                }}>
                <div>
                    <input type="radio" name="position" value="학사중"/>학사중
                  </div>
                <div>
                    <input type="radio" name="position" value="석사중"/>석사중
                  </div>
                <div>
                    <input type="radio" name="position" value="박사중"/>박사중
                  </div>
            </div>
            <button type="submit">Submit</button>
        </form>
        
        </>
    )
}

export default EducationCardEdit