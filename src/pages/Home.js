import React from 'react';
import homeBanner from '../assets/images/home_banner.png';
import lodgeComplaint from '../assets/images/lodgeComplaint.png';
import makeInquiry from '../assets/images/makeInquiry.png';
import myMatters from '../assets/images/myMatters.png';
import provideFeedback from '../assets/images/provideFeedback.png';

const Home = () => {
    return (
        <div className="container-fluid">
            <div className='row'>
                <div className="col-sm-12 col-md-8">

                    <img src={homeBanner} className="w-100" alt="homeBanner"/>
                    <div className="separator mt-3 mb-3"><h3>What would you like to do?</h3></div>
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div style={cardStyle} className="card text-center">
                                <img className="m-auto" width={64} src={lodgeComplaint} alt='lodgeComplaint'/>
                                <div style={iCardBody}>
                                    <h5 className="card-title">Lodge a Complaint</h5>
                                    <p className="card-text">Find out how to make a complaint</p>
                                    <div>
                                        <a href="#" className="btn btn-primary">CLICK HERE</a>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div style={cardStyle} className="card text-center">
                                <img className="m-auto" width={64} src={makeInquiry} alt='makeInquiry'/>
                                <div style={iCardBody}>
                                    <h5 className="card-title">Make an Inquiry</h5>
                                    <p className="card-text">Need to know anything just drop us a note</p>
                                    <a href="#" className="btn btn-primary">CLICK HERE</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div style={cardStyle} className="card text-center">
                                <img className="m-auto" width={64} src={myMatters} alt='myMatters'/>
                                <div style={iCardBody}>
                                    <h5 className="card-title">My Matters</h5>
                                    <p className="card-text">Check the status of your matters</p>
                                    <a href="#" className="btn btn-primary">CLICK HERE</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div style={cardStyle} className="card text-center">
                                <img className="m-auto" width={64} src={provideFeedback} alt='provideFeedback'/>
                                <div style={iCardBody}>
                                    <h5 className="card-title">Provide Feedback</h5>
                                    <p className="card-text">Have your say/give us feedback</p>
                                    <a href="#" className="btn btn-primary">CLICK HERE</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                <div className="col-md-4">
                    <div className="col-12">

                        <div className="card">
                            <div className="card-body">
                                <button type="button" className="btn btn-info btn-lg btn-block">LOGIN</button>
                                <button type="button" className="btn btn-primary btn-lg btn-block">NEW USER REGISTER
                                </button>
                            </div>
                        </div>
                        <br/>
                        <div className="card">
                            <div className="card-body">
                              <span className="font-weight-bold">
                                  Are you a registered health practitioner, employer or education provider?
                              </span>
                                <p>If so, in determining where to make your complaint you will need to consider whether
                                    you have a legal obligation to make a mandatory notification, in accordance with
                                    Division 2 of the Health Practitioner Regulation National Law (NSW).</p>
                                <p>
                                    <a target="_blank"
                                       href="http://www.hccc.nsw.gov.au/Information/Information-For-Health-Providers/Mandatory-reporting---What-Practitioners-need-to-know-/default.aspx"> Mandatory
                                        notifications </a> <span className="font-weight-bold">must</span> be made to the
                                    National Agency (AHPRA). Upon receiving the notification AHPRA would then refer that
                                    notification to the HCCC and/or the relevant Professional Council for management as
                                    a complaint. Making a complaint to the Commission only, does not satisfy mandatory
                                    reporting requirements.
                                </p>
                                <p className="font-italic">
                                    You may also wish to make a complaint to the Commission in addition to notifying
                                    AHPRA. This may avoid any delay in the Commission receiving and assessing your
                                    complaint.
                                </p>
                                <p>
                                    If your complaint is not a mandatory notification within the meaning of the National
                                    law, it can be made directly to the Commission via this portal.
                                </p>
                            </div>
                        </div>
                    </div>


                </div>


            </div>
        </div>
    )
}
export default Home;
const cardStyle = {
    minHeight: '350px',
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: '20px',
}
const iCardBody = {
    minHeight: '1px',
    padding: '1.25rem'
}
