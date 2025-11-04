import React from 'react'
import UserInputs from '../components/UserInputs'
import Preview from '../components/Preview'

function UserForm() {
    const [resumeDetails,setResumeDetails] = React.useState({
      fullName:"",
      jobTitle:"",
      locaton:"",
      email:"",
      phone:"",
      github:"",
      linkedin:"",
      portfolio:"",
      course:"",
      college:"",
      university:"",
      passoutYear:"",
      jobType:"",
      company:"",
      cLocation:"",
      duration:"",
      skills:[],
      summary:""
    })
  
  
  return (
    <div className='row container m-5'>
      <div className='col-md-6'>
        <UserInputs resumeDetails={resumeDetails} setResumeDetails={setResumeDetails}/>
      </div>
      <div className='col-md-6'>
        {
          resumeDetails.fullName &&
          <Preview resumeDetails={resumeDetails} />}
      </div>
    </div>
  )
}

export default UserForm