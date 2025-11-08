import React, { useEffect, useState } from 'react'
import Preview from '../components/Preview'
import { FaBackward } from "react-icons/fa6";
import { FaFileDownload } from "react-icons/fa";
import { IoReload } from "react-icons/io5";
import { Link, useParams } from 'react-router-dom';
import { viewResumeAPI,addHistoryAPI } from '../services/allAPI';
import Edit from '../components/Edit';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';


function ViewResume() {
  const { id } = useParams()
  const [resumeDetails, setResumeDetails] = useState({})
  //console.log(id);
  console.log(resumeDetails);

  useEffect(() => { getResumeDetails() }, []);

  const getResumeDetails = async () => {
    const result = await viewResumeAPI(id)
    //console.log(result);
    if (result.status == 200) {
      setResumeDetails(result.data)
    }
  }

  const handleDownloadResume = async () => {
    // create pdf document
    const doc = new jsPDF();
    const input = document.getElementById("preview")
    const canvas = await html2canvas(input,{scale:2})
    console.log(canvas);
    const imgURL = canvas.toDataURL('image/png')
    console.log(imgURL);
    const imgWidth = doc.internal.pageSize.getWidth()
    const imgHeight = doc.internal.pageSize.getHeight()
    doc.addImage(imgURL,'PNG',0,0,imgWidth,imgHeight)
    doc.save(`${resumeDetails?.fullName}-resume.pdf`)
    // date and time
    const localDateTime =new Date()
    const timeStamp=`${localDateTime.toLocaleDateString()},${localDateTime.toLocaleTimeString()}`
    // console.log(timeStamp);
    // api call
    try{
      await addHistoryAPI({timeStamp,imgURL})
    }catch(err){
      console.log(err);
    }
  }

  return (
    <div className='continer'>
      <div className='row my-5'>
        <div className='col-md-2'></div>
        <div className='col-md-8'>
          <div className='d-flex justify-content-center align-items-center'>
            <button onClick={handleDownloadResume} className='btn text-danger fs-2 me-2'><FaFileDownload /></button>
            <Edit resumeDetails={resumeDetails} setResumeDetails={setResumeDetails} />
            <Link to={'/history'} className='btn text-success fs-2 me-2'><IoReload /></Link>
            <Link to={'/resume'} className="btn text-primary fs-2 me-2"><FaBackward /></Link>
          </div>
          <div id="preview"> <Preview resumeDetails={resumeDetails} /></div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  )
}

export default ViewResume