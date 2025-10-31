import React from 'react'
import UserInputs from '../components/UserInputs'
import Preview from '../components/Preview'

function UserForm() {
  return (
    <div className='row container m-5'>
      <div className='col-md-6'>
        <UserInputs/>
      </div>
      <div className='col-md-6'>
        <Preview/>
      </div>
    </div>
  )
}

export default UserForm