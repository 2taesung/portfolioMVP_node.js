import React, {useState} from "react"
import * as Api from "../../api"

function EducationRegisterForm({portfolioOwnerId, setOnRegister, onNewEducation}) {

    console.log(portfolioOwnerId)
    const [school, setSchool] = useState('')
    const [major, setMajor] = useState('')
    const [position, setPosition] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(portfolioOwnerId)
        
        const res = await Api.post("education/create", {
            "user_id": portfolioOwnerId,
            school,
            major,
            position
        })
        const newEducation = res.data
        onNewEducation(newEducation)
        
        // try catch 사용 ---> 왜해야해?
        // let newEducation =''
        // try {
        //     const  res = await Api.post("education/create", {
        //         "user_id": portfolioOwnerId,
        //         school,
        //         major,
        //         position
        //     })
        //     newEducation = res.data
        //     console.log('done requesting education creation')
        // } catch (err) {
        //     console.log("Education 생성에 실패하였습니다.")
        // }
        // onNewEducation(newEducation)

        setOnRegister(false)
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input value={school} onChange={(e)=>{
                e.preventDefault()
                setSchool(e.target.value)
                }} type="text" placeholder="학교이름"/>

            <input value={major} onChange={(e)=>{
                e.preventDefault()
                setMajor(e.target.value)
                }} type="text" placeholder="전공"/>

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

export default EducationRegisterForm