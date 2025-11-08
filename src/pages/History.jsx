import { Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MdDelete } from "react-icons/md";
import { getHistoryAPI } from '../services/allAPI';
import { removeHistoryAPI } from '../services/allAPI';


function History() {
   const [allHistoryData,setAllHistoryData] = useState([])
  // console.log(allHistoryData);

  useEffect(()=>{
    getAllHistory()
  },[])

  const getAllHistory = async ()=>{
    try{
      const result= await getHistoryAPI()
      // console.log(result);
      if(result.status==200){
        setAllHistoryData(result.data)
      }
    }catch(err){
      console.log(err);
    }
  }

  const handleDeleteHistory = async (id)=>{
    try{
      await removeHistoryAPI(id)
      getAllHistory()
    }catch(err){
      console.log(err);
    }
  }

  return (
    <div>
      <h1 className='text-center my-5'>Downloaded Resume History</h1>
      <Link to={'/form'} className='float-end mx-5' style={{ marginTop: '-80px' }}>Back</Link>
      <Stack direction={'row'} sx={{ flexWrap: 'wrap', gap: '10px', m: 5 }}>
        {
          allHistoryData?.length > 0 ?
            allHistoryData?.map(item => (
              <div key={item?.id} className='shadow p-5 text-center rounded'>
                <div className='d-flex align-items-center mb-2'>
                  <h5>Review At : {item?.timeStamp}</h5>
                  <button onClick={()=>handleDeleteHistory(item?.id)} className='btn text-danger fs-4'><MdDelete /></button>
                </div>
                <img width={'250px'} height={'250px'} className='border' src={item?.imgURL} alt="resume" />
              </div>
            )):
            <p>History is not Available</p>
        }
      </Stack>
    </div>
  )
}

export default History