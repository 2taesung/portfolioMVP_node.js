import React, {useEffect, useState} from "react"
import EducationCardEdit from "./EducationCardEdit"
// import EducationCard from "./EducationCard"
import EducationRegisterForm from "./EducationRegisterForm"
import * as Api from "../../api"

function MyEducationCard ({school, major, position, id }){
    // 편집 모드 스위처 생성 - 사용자가 처음 페이지 접근할 시 default 로 false  
    const [isEditing, setIsEditing] = useState(false);
    
    const cardInfo = {
        school,
        major,
        position,
        id
    }  

   return <>
    
    {isEditing
    ?
    <EducationCardEdit setIsEditing={setIsEditing} cardInfo={cardInfo} ></EducationCardEdit>
    :<>
    <br></br>
    <p>학교: {school}</p>
    <p>전공: {major}</p>
    <p>포지션: {position}</p>
    <button onClick = {()=> {setIsEditing(true)
    }}>편집</button>
    </>
    }
    </>
}


function MyEducationCards( {portfolioOwnerId, educations, onNewEducation}) {

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
                    ></MyEducationCard>
                    
            })
        }
        <br></br>
        <button onClick = {()=> {setOnRegister(true)
    }}>+</button>
        {onRegister
        ?<EducationRegisterForm portfolioOwnerId={portfolioOwnerId} setOnRegister={setOnRegister} onNewEducation = {onNewEducation}/>
        :<></>}

{/* educations == null
        ? <></>
        : educations.map((item) => (
            <>
            <p>학교: {item.school}</p>
            <p>전공: {item.major}</p>
            <p>포지션: {item.position}</p>
            </>  
        )) */}

          {/* {
            onRegister
            ? <EducationRegisterForm portfolioOwnerId={portfolioOwnerId}/>
            // : <h1>error: {isEditing}</h1>
            : isEditing 
            ? <EducationEditForm education={education}/>
            : <EducationCard education={education} isEditable={isEditable} setIsEditing={setIsEditing} setOnRegister={setOnRegister}/>
        } */}
        </>
}

function EducationCards ({educations}) {
    
    console.log(educations)
    return  <>
    {
        educations == null
        ? <></>
        : educations.map((item) => (
            <>
            <p>학교: {item.school}</p>
            <p>전공: {item.major}</p>
            <p>포지션: {item.position}</p>
            </>  
        ))
    }
    </>
}

function Education ({portfolioOwnerId, isEditable }) {
    console.log(portfolioOwnerId)

    // education data를 담는 그릇 생성
    const [educations, setEducations] = useState(null);

    const handleNewEdication = (newEducation) => {
        const newEducations = [...educations]
        newEducations.push(newEducation)
        setEducations(newEducations)
    }

    useEffect(() => {
        Api.get("educationlist", portfolioOwnerId).then((res) => setEducations(res.data))
    }, [portfolioOwnerId])

    console.log(educations)

    return (
        <>
        {isEditable
        ? <MyEducationCards educations={educations} portfolioOwnerId={portfolioOwnerId} onNewEducation = {handleNewEdication}></MyEducationCards>
        : <h1>1<EducationCards education={educations}></EducationCards></h1> 
        }
        </>      
        )
    }
    
    export default Education
    