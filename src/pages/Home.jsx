import React from 'react'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <>
      {/* landing section */}
      <div style={{ height: '90vh', backgroundImage: 'url("https://www.berlin.de/sen/bildung/unterricht/politische-bildung/klassenrat/depositphotos_monkeybusiness.jpg")', backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' }} className='d-flex justify-content-center align-items-center' >
        <div className='row container-fluid'>
          <div className='col-md-4'></div>
          <div className='col-md-4 shadow rounded p-5 text-center' style={{ backgroundColor: 'rgba(255,255,255,0.6)' }}>
            <h3>Design to get hired Your skill,Your story,Your next Job-all in one</h3>
            <Link to={'/resume'} className='btn text-light' style={{ backgroundColor: 'purple' }}>Make your Resume</Link>
          </div>
          <div className="col-md-4"></div>

        </div>
      </div>
      {/* Tools */}
      <div className='container'>
        <h1 className='text-center my-5'>Tools</h1>
        <div className='row align-items-center'>
          <div className='col-md-5 m-5'>
            <h5>Resume</h5>
            <p>Create unlimited new resume and easily edit them afterwards.</p>
            <h5>Cover Letter</h5>
            <p>Easily write professional cover letters.</p>
            <h5>Jobs</h5>
            <p>Automatically receive revelant and new job postings.</p>
            <h5>Applications</h5>
            <p>Effortlessly manage and track your job applications in an organized manner,</p>
          </div>
          <div className='col-md-6'>
            <img className='w-75 mb-5' src="https://masterbundles.com/wp-content/uploads/2022/10/341-284.jpg" alt="" />
          </div>
        </div>
      </div>
      {/* pics */}
      <div style={{ height: '90vh', backgroundImage: 'url("https://systemsthinkingalliance.org/wp-content/uploads/2023/06/Understanding-the-boulding-hierarchy-of-complexity.webp")', backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' }} >
      </div>
      {/* Testimony */}
      <div className='container my-5'>
        <h1 className='text-center my-5'> Testimony</h1>
        <div className='row align-items-center'>
          <div className='col-md-5 m-5'>
            <h3>Tested by professionals worldwide</h3>
            <p>At LiveCareer, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results.</p>
            <p>In fact, users who used LiveCareer reported getting hired an average of 48 days faster.</p>
            <p>Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out.</p>
          </div>
          <div className='col-md-6'>
            <div className='row'>
              <div className='col-md-3'>
                <img className='w-100 m-1' src="https://tse4.mm.bing.net/th/id/OIP.Kk4i-k-7bOfsgPv0SJtj5AHaHa?pid=Api&P=0&h=180" alt="user" />
              </div>
              <div className='col-md-3'>
                <img className='w-100 m-1' src="https://tse4.mm.bing.net/th/id/OIP.Kk4i-k-7bOfsgPv0SJtj5AHaHa?pid=Api&P=0&h=180" alt="user" />

              </div><div className='col-md-3'>
                <img className='w-100 m-1' src="https://tse4.mm.bing.net/th/id/OIP.Kk4i-k-7bOfsgPv0SJtj5AHaHa?pid=Api&P=0&h=180" alt="user" />

              </div><div className='col-md-3'>
                <img className='w-100 m-1' src="https://tse4.mm.bing.net/th/id/OIP.Kk4i-k-7bOfsgPv0SJtj5AHaHa?pid=Api&P=0&h=180" alt="user" />

              </div><div className='col-md-3'>
                <img className='w-100 m-1' src="https://tse4.mm.bing.net/th/id/OIP.Kk4i-k-7bOfsgPv0SJtj5AHaHa?pid=Api&P=0&h=180" alt="user" />

              </div><div className='col-md-3'>
                <img className='w-100 m-1' src="https://tse4.mm.bing.net/th/id/OIP.Kk4i-k-7bOfsgPv0SJtj5AHaHa?pid=Api&P=0&h=180" alt="user" />

              </div><div className='col-md-3'>
                <img className='w-100 m-1' src="https://tse4.mm.bing.net/th/id/OIP.Kk4i-k-7bOfsgPv0SJtj5AHaHa?pid=Api&P=0&h=180" alt="user" />

              </div><div className='col-md-3'>
                <img className='w-100 m-1' src="https://tse4.mm.bing.net/th/id/OIP.Kk4i-k-7bOfsgPv0SJtj5AHaHa?pid=Api&P=0&h=180" alt="user" />

              </div><div className='col-md-3'>
                <img className='w-100 m-1' src="https://tse4.mm.bing.net/th/id/OIP.Kk4i-k-7bOfsgPv0SJtj5AHaHa?pid=Api&P=0&h=180" alt="user" />

              </div><div className='col-md-3'>
                <img className='w-100 m-1' src="https://tse4.mm.bing.net/th/id/OIP.Kk4i-k-7bOfsgPv0SJtj5AHaHa?pid=Api&P=0&h=180" alt="user" />

              </div><div className='col-md-3'>
                <img className='w-100 m-1' src="https://tse4.mm.bing.net/th/id/OIP.Kk4i-k-7bOfsgPv0SJtj5AHaHa?pid=Api&P=0&h=180" alt="user" />

              </div><div className='col-md-3'>
                <img className='w-100 m-1' src="https://tse4.mm.bing.net/th/id/OIP.Kk4i-k-7bOfsgPv0SJtj5AHaHa?pid=Api&P=0&h=180" alt="user" />

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home