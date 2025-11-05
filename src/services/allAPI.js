import commonAPI from "./commonAPI";
import serverURL from "./serverURL";

// add resume api:call in UserInputs when input btn is clicked
 export const addResumeAPI = async (resumeDetails)=>{
    return await commonAPI("POST",`${serverURL}/resumes`,resumeDetails)
 }