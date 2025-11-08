import commonAPI from "./commonAPI";
import serverURL from "./serverURL";

// add resume api:call in UserInputs when input btn is clicked
 export const addResumeAPI = async (resumeDetails)=>{
    return await commonAPI("POST",`${serverURL}/resumes`,resumeDetails)
 }

//  view resume api : call in viewResume,when page load - useEffect
 export const viewResumeAPI = async (id)=>{
    return await commonAPI("GET",`${serverURL}/resumes/${id}`,{})
 }

//  udate api : call by edit component when update btn is clicked
 export const editResumeAPI = async (id,resumeDetails)=>{
    return await commonAPI("PUT",`${serverURL}/resumes/${id}`,resumeDetails)
 }

 //  add history api :called by viewresume when download btn clicked
 export const addHistoryAPI = async (resumeHistory)=>{
     return await commonAPI("POST",`${serverURL}/history`,resumeHistory)
 }

//  get history api :called by history when it loads (useEffect) in browser
  export const getHistoryAPI = async ()=>{
    return await commonAPI("GET",`${serverURL}/history`,{})
 }

 //  remove history api :called by history when delete btn clicked
  export const removeHistoryAPI = async (id)=>{
     return await commonAPI("DELETE",`${serverURL}/history/${id}`,{})
 }
