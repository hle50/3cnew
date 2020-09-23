import React from 'react';

const MakeInquiry = () => {
    return (
        <div className="container-fluid">
            <div className='row'>
                <div className="col-12">
                    <h3>Inquiry Form</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="card w-100">
                        <div className="card-body">
                            <h4 className="card-title">Before making an inquiry</h4>
                            <p>Please note that the Commission does not have the power to direct a health service
                                provider to:</p>
                            <ul>
                                <li>Pay damages or compensation</li>
                                <li>Provide a refund or alter fees</li>
                                <li>Provide health care treatment</li>
                                <li>Alter a medico-legal document if you are unhappy with the context</li>
                            </ul>
                            <p>Please note: It is an offence for a person to provide false or misleading information to
                                the Commission.</p>

                            <div className="card w-100">
                                <div className="card-body">
                                    <div className="card-title">
                                        <h4 className="card-title">Contact Details</h4>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="fName"
                                               className="col-sm-2 col-form-label">First Name</label>
                                        <div className="col-sm-4">
                                            <input className="form-control" id="fName"
                                                   placeholder="Email"/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="mName"
                                               className="col-sm-2 col-form-label">Middle Name</label>
                                        <div className="col-sm-4">
                                            <input  className="form-control" id="mName"
                                                   placeholder="Email"/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="lName"
                                               className="col-sm-2 col-form-label">Last Name</label>
                                        <div className="col-sm-4">
                                            <input  className="form-control" id="lName"
                                                   placeholder="Last Name"/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="hNum"
                                               className="col-sm-2 col-form-label">Apartment/unit/house number</label>
                                        <div className="col-sm-4">
                                            <input  className="form-control" id="hNum"
                                                    placeholder="Apartment/unit/house number"/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="sName"
                                               className="col-sm-2 col-form-label">Street Name</label>
                                        <div className="col-sm-4">
                                            <input  className="form-control" id="sName"
                                                    placeholder="Street Name"/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="State"
                                               className="col-sm-2 col-form-label">State</label>
                                        <div className="col-sm-4">
                                            <input  className="form-control" id="State"
                                                    placeholder="State"/>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="town"
                                               className="col-sm-2 col-form-label">City/Suburb/Town</label>
                                        <div className="col-sm-4">
                                            <input  className="form-control" id="town"
                                                    placeholder="City/Suburb/Town"/>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="postcode"
                                               className="col-sm-2 col-form-label">Post Code</label>
                                        <div className="col-sm-4">
                                            <input  className="form-control" id="postcode"
                                                    placeholder="Post Code"/>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="postcode"
                                               className="col-sm-2 col-form-label">My preferred Contact Method is</label>
                                        <div className="col-sm-4">
                                            <select className="form-control">
                                                <option value="email">Email</option>
                                                <option value="phone">Phone</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="dayphone"
                                               className="col-sm-2 col-form-label">Daytime Phone</label>
                                        <div className="col-sm-4">
                                            <input  className="form-control" id="dayphone"
                                            placeholder="Daytime Phone"/>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="alternatePhone"
                                               className="col-sm-2 col-form-label">Alternate Phone Number</label>
                                        <div className="col-sm-4">
                                            <input  className="form-control" id="alternatePhone"
                                                    placeholder="Alternate Phone Number"/>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="email"
                                               className="col-sm-2 col-form-label">Email</label>
                                        <div className="col-sm-4">
                                            <input  className="form-control" id="email"
                                                    placeholder="Alternate Phone Number"/>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="confirmEmail"
                                               className="col-sm-2 col-form-label">Confirm Email</label>
                                        <div className="col-sm-4">
                                            <input  className="form-control" id="confirmEmail"
                                                    placeholder="Confirm Email"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h4 className="card-title">Inquiry Details</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
)
}
export default MakeInquiry;
