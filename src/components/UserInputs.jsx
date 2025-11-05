import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import { FaXmark } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { addResumeAPI } from '../services/allAPI';

const steps = ['Basic Informations', 'Contact Details', 'Educational Details', 'Work Experience', 'Skills & Certifications','Review & Submit'];

function UserInputs({resumeDetails,setResumeDetails}) {
  const navigate = useNavigate()
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const skillSuggesstionArray = ['MONGO DB','ANGULAR','REACT','NEXT J S','SQL','COMMUNICATION']

  const skillRef = React.useRef()

  console.log(resumeDetails);
  

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }


    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleAddResume = async ()=>{
    const{fullName,jobTitle,locaton} = resumeDetails
    if(!fullName || !jobTitle || !locaton){
      alert("Please fill the Form Completely!!!")
    }else{
      console.log("api call");
      try {
        const result = await addResumeAPI(resumeDetails)
        console.log(result);
        if(result.status==201){
          alert("Resume added Successfully!!!")
          const {id} = result.data
          // navigate to view page : resume/${id}/view
          navigate(`/resume/${id}/view`)
        }
      } catch (err) {
        console.log(err);
      }
    }
  }

  const addSkill = (skill)=>{
    if(resumeDetails.skills?.map(data=>data.toLowerCase())?.includes(skill.toLowerCase())){
      alert("Given skill already available,Please add another!!!")
    }else{
      setResumeDetails({...resumeDetails,skills:[...resumeDetails.skills,skill]})
    }
    skillRef.current.value = ""
  }

  const removeSkill = (skill)=>{
    setResumeDetails({...resumeDetails,skills:resumeDetails.skills?.filter(item=>item!=skill)})
  }

  const renderStepContent = (stepCount)=>{
    switch(stepCount){
      case 0 : return (
        <div>
          <h3>Personal Details</h3>
          <div className='p-3 row'>
            <TextField value={resumeDetails.fullName} onChange={e=>setResumeDetails({...resumeDetails,fullName:e.target.value})} id="standard-basic-name" label="Full Name" variant="standard" />
            <TextField value={resumeDetails.jobTitle} onChange={e=>setResumeDetails({...resumeDetails,jobTitle:e.target.value})}  id="standard-basic-job" label="Job Title" variant="standard" />
            <TextField value={resumeDetails.locaton} onChange={e=>setResumeDetails({...resumeDetails,locaton:e.target.value})}  id="standard-basic-location" label="Location" variant="standard" />
          </div>
        </div>
      )
      case 1 : return (
        <div>
          <h3>Contact Details</h3>
          <div className='p-3 row'>
            <TextField value={resumeDetails.email} onChange={e=>setResumeDetails({...resumeDetails,email:e.target.value})}  id="standard-basic-email" label="Email" variant="standard" />
            <TextField value={resumeDetails.phone} onChange={e=>setResumeDetails({...resumeDetails,phone:e.target.value})}  id="standard-basic-phno" label="Phone Number" variant="standard" />
            <TextField value={resumeDetails.github} onChange={e=>setResumeDetails({...resumeDetails,github:e.target.value})}  id="standard-basic-github" label="Github Profile Link" variant="standard" />
            <TextField value={resumeDetails.linkedin} onChange={e=>setResumeDetails({...resumeDetails,linkedin:e.target.value})} id="standard-basic-linkedin" label="Linkedin Profile Link" variant="standard" />
            <TextField value={resumeDetails.portfolio} onChange={e=>setResumeDetails({...resumeDetails,portfolio:e.target.value})} id="standard-basic-portfolio" label="Portfolio Link" variant="standard" />
          </div>
        </div>
      )
      case 2 : return (
        <div>
          <h3>Educational Details</h3>
           <div className='p-3 row'>
            <TextField value={resumeDetails.course} onChange={e=>setResumeDetails({...resumeDetails,course:e.target.value})}  id="standard-basic-course" label="Course Name" variant="standard" />
            <TextField value={resumeDetails.college} onChange={e=>setResumeDetails({...resumeDetails,college:e.target.value})}  id="standard-basic-college" label="College Name" variant="standard" />
            <TextField value={resumeDetails.university} onChange={e=>setResumeDetails({...resumeDetails,university:e.target.value})}  id="standard-basic-university" label="University" variant="standard" />
            <TextField value={resumeDetails.passoutYear} onChange={e=>setResumeDetails({...resumeDetails,passoutYear:e.target.value})}  id="standard-basic-yop" label="Year of Passout" variant="standard" />
          </div>
        </div>
      )
      case 3 : return (
        <div>
          <h3>Work Experience</h3>
           <div className='p-3 row'>
            <TextField value={resumeDetails.jobType} onChange={e=>setResumeDetails({...resumeDetails,jobType:e.target.value})}  id="standard-basic-joi" label="Job or Intership" variant="standard" />
            <TextField value={resumeDetails.company} onChange={e=>setResumeDetails({...resumeDetails,company:e.target.value})}  id="standard-basic-companyn" label="Company Name" variant="standard" />
            <TextField value={resumeDetails.cLocation} onChange={e=>setResumeDetails({...resumeDetails,cLocation:e.target.value})}  id="standard-basic-companyl" label="Company Location" variant="standard" />
            <TextField value={resumeDetails.duration} onChange={e=>setResumeDetails({...resumeDetails,duration:e.target.value})}  id="standard-basic-duration" label="Duration" variant="standard" />
          </div>
        </div>
      )
      case 4 : return (
        <div>
          <h3>Skills</h3>
          <div className='d-flex justify-content-center align-items-center p-3'>
            <input ref={skillRef} type="text" placeholder='Add Skills' className='form-control'/>
            <Button onClick={()=>addSkill(skillRef.current.value)} variant='text'>Add</Button>
          </div>
          <h5>Suggessions :</h5>
          <div className='d-flex flex-wrap justify-content-between p-3'>
            {
              skillSuggesstionArray.map(item=>(
                <Button onClick={()=>addSkill(item)} key={item} variant="outlined" className='my-1'>{item}</Button>
              ))
            }
          </div>
          <h5>Added Skills :</h5>
          <div className='d-flex flex-wrap justify-content-between p-3'>
            {/* duplicated according to input skills */}
            {
              resumeDetails.skills?.map(item=>(
              <Button onClick={()=>removeSkill(item)} key={item} variant="contained" className='my-1'>{item}<FaXmark className='ms-1' /></Button>
              ))
            }
          </div>
        </div>
      )
      case 5 : return (
        <div>
          <h3>Summary</h3>
          <div onChange={e=>setResumeDetails({...resumeDetails,summary:e.target.value})} className='p-3 row'>
            <TextField id="standard-basic-summary" label="Write a short Summary of yourself" multiline rows={6}
             variant="standard" defaultValue={'Motivated and results-driven professional with a proven ability to adapt quickly, learn new skills, and contribute effectively to team success. Demonstrates strong communication, problem-solving, and organizational abilities, with a focus on achieving goals and delivering high-quality results. Passionate about continuous growth and eager to make a meaningful impact in a dynamic workplace.'} />
          </div>

        </div>
      )
      default : return null
    }
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step{activeStep+1}
          </Typography>
          {/* detailed view of each step */}
            <Box>
              {renderStepContent(activeStep)}
            </Box>

          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            {
            activeStep === steps.length - 1 ? 
            <Button onClick={handleAddResume}>Finish</Button>:
            <Button onClick={handleNext}>Next</Button>
            }
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}

export default UserInputs