import React from 'react'


const Form = () => {
  return (
    <div>
        <div className="container-sm mt-5 pt-5 bg-secondary-subtle rounded">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-4">

                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 d-flex">
                    <label htmlFor="Name" className="form-label">Name:</label>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
                    <input type="text" id="Name" className="form-control"/>
                    </div>
                </div>
                </div>

                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 d-flex">
                    <label htmlFor="Designation" className="form-label">Designation:</label>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
                    <input type="text" id="Designation" className="form-control"/>
                    </div>
                </div>
                </div>

                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 d-flex">
                    <label htmlFor="Location" className="form-label">Location:</label>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
                    <input type="text" id="Location" className="form-control"/>
                    </div>
                </div>
                </div>

                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 d-flex">
                    <label htmlFor="Salary" className="form-label">Salary:</label>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
                    <input type="number" id="Salary" className="form-control"/>
                    </div>
                </div>
                </div>

                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mb-3">
                    <button className="btn btn-success">Submit</button>
                </div>

                </div>
                </div>    
            </div>
        </div>
    </div>
  )
}

export default Form