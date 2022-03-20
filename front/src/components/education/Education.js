import React, {useEffect, useState} from "react"
import EducationCardEdit from "./EducationCardEdit"
import EducationRegisterForm from "./EducationRegisterForm"
import * as Api from "../../api"
import { Card, Row, Button, Col } from "react-bootstrap";

function MyEducationCard ({school, major, position, id , onEditEducation}){
    // 편집 모드 스위처 생성 - 사용자가 처음 페이지 접근할 시 default 로 false  
    const [isEditing, setIsEditing] = useState(false);
    
    const cardInfo = {
        school,
        major,
        position,
        id
    }  

    return <>
        { 
            isEditing
            ? <EducationCardEdit setIsEditing={setIsEditing} cardInfo={cardInfo} onEditEducation = {onEditEducation}></EducationCardEdit>
            : 
            <Card className="mb-1 ms-1 mr-1" style={{ width: "30rem" }}>
            <Card.Body>
            <Row className="justify-content-left">
                <Col>
                <Card.Title >학력</Card.Title>
                <Card.Text >{school}</Card.Text>
                <Card.Text className="mb-2 text-muted">{`${major}(${position})`}</Card.Text>
                </Col>
            </Row>
            
        
            <Col>
            <Row className="mt-3 text-left text-info">
                <Col sm={{ span: 20 }}>
                <Button
                    variant="outline-info"
                    size="sm"
                    onClick={() => setIsEditing(true)}
                > 편집
                </Button>
                </Col>
            </Row>
            </Col>
         </Card.Body>
         </Card>
        }
        </>
}





function MyEducationCards( {portfolioOwnerId, educations, onNewEducation, onEditEducation}) {
    
    // 등록 모드 스위처 생성 - 사용자가 처음 페이지 접근 시 default로 false
    const [onRegister, setOnRegister] = useState(false)
    
    console.log('card:', educations)
    return <>
    {
        educations == null
        ? <></>
        : educations.map((item) => {
            return <MyEducationCard 
            school = {item.school} 
            major = {item.major}
            position = {item.position}
            id = {item.id}
            onEditEducation = {onEditEducation}
            ></MyEducationCard>
            
        })
    }
    <br></br>
    <button onClick = {()=> {setOnRegister(true)
    }}>+</button>
    {onRegister
        ?<EducationRegisterForm portfolioOwnerId={portfolioOwnerId} setOnRegister={setOnRegister} onNewEducation = {onNewEducation}/>
        :<></>}
        </>
    }
    
function Education ({portfolioOwnerId, isEditable }) {
    console.log(portfolioOwnerId)
    
    useEffect(() => {
        Api.get("educationlist", portfolioOwnerId).then((res) => setEducations(res.data))
    }, [portfolioOwnerId])
    
    // education data를 담는 그릇 생성
    const [educations, setEducations] = useState(null);
    
    const handleNewEdication = (newEducation) => {
        const newEducations = [...educations]
        newEducations.push(newEducation)
        setEducations(newEducations)
    }
    
    // 편집된 Education 반영하여 educations 수정 
    const handleEditEducation = (card_id, school, major, position) => {
        console.log(1)
        const mapped = educations.map((education) => {
            if (education.id === card_id) {
                return { id: card_id,
                    school,
                    major,
                    position}
                } else {
                    return {...education}
                }
            })
            console.log(mapped)
            setEducations(mapped)
            console.log(educations)
        }
        
        console.log(educations)
        
        return (
            <>
            {isEditable
                ? <MyEducationCards educations={educations} portfolioOwnerId={portfolioOwnerId} onNewEducation = {handleNewEdication} onEditEducation = {handleEditEducation}>  </MyEducationCards>
                : 
                <>
                {
                    educations == null
                    ? <></>
                    : educations.map((item) => 
                    {return <>
                        <p>학교: {item.school}</p>
                        <p>전공: {item.major}</p>
                        <p>포지션: {item.position}</p>
                        </>  } 
                        )
                    }
                    </>
                }
                </>      
                )
            }
            
            export default Education
            