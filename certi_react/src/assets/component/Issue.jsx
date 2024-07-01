import React from 'react'

const Issue = () => {
  return (
    <div>
      <body>
  <div className='flex flex-row justify-end p-4'>
    <a className="border-1  px-8 py-2  mr-2" href="/">Home</a>
    <a className="border-1 bg-cyan-700 px-8 py-2 " href="/issue">Issue Certificate</a>

  </div>

  <div>
    <h1 nclassName=" text-2xl font-bold">Certificate Dapp</h1>

    <br />
    <div >
      <h3 className="text-center text-3xl font-bold mb-4">Issue New Certificate</h3>
    <div nclassName="flex flex-col justify-center items-center ">
      <form action="/submit-form" method="POST"/>
        <div className="border-2 rounded px-20" >
          <div className="p-2">
          <label className="block " for="CourseName">Select Course *</label>
          <select className="border-2 border-black" name="CourseName" id="courseName">
            <option>Certified Blockchain Associate</option>
            <option>Certified Ethereum Developer</option>
            <option>Blockchain Foundation</option>
            <option>Ethereum Fundamentals</option>
          </select>
        </div>

        <div className="p-2">
          <label className="block" for="certificateID">Certificate ID *</label>
          <input type="text" className="border-2 border-black" name="CertiID" id="certificateID" placeholder="Certificate ID"/>
        </div>
        <div nclassName="p-2">
          <label className="block" for="CandName">Candidate name *</label>
          <input type="text" nclassName="border-2 border-black" name="CandName" id="candidateName" placeholder="Name"/>
        </div>
        <div nclassName=" p-2">
          <label className="block" for="grade">Select Grade *</label>
          <select className="border-2 border-black" id="grade" name="Grade">
            <option>S</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>
        </div>
        <div className="p-2">
          <label className="block" for="date">Issue Date *</label>
          <input  className="border-2 border-black" id="date" name="Date"/>
        </div>
        <a href="formsubmitted.html" className="border-2 bg-orange-700 hover:bg-orange-400 mt-6 ml-10" type="submit" >Issue Certificate</a></div>      </div>
    </div>
  </div>
</body>


    </div>
  )
}

export default Issue
