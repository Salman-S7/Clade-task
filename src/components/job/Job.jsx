import './job.css'

import Options from "../option/Options"
import Location from '../../assets/job preview svg/location.svg'
import Coins from '../../assets/job preview svg/coins.svg'
import Figma from '../../assets/job preview svg/figma.svg'
import AI from '../../assets/job preview svg/ai.svg'
import AX from '../../assets/job preview svg/ax.svg'
import atlassian from '../../assets/job preview svg/atlassian.svg'
import edit from '../../assets/job preview svg/edit.svg'
import eye from '../../assets/job preview svg/eye.svg'
import trash from '../../assets/job preview svg/trash.svg'
import usercheck from '../../assets/job preview svg/user-check.svg'
import user from '../../assets/job preview svg/users.svg'
import messages from '../../assets/job preview svg/message.svg'





const Job = () => {
  return (
      <>
          <Options />
          <div className="job-details">
              <JobDetails />
              <JobActions/>
          </div>
          
      </>
  )
}

const JobDetails = () => {
    return (
        <div className="job-features">
            <div className="job-title-wrapper">
                <div className="job-title">
                    <h1>Senior Product Designer</h1>
                    <span className='posted-time'>posted 2 days ago</span>
                    <span className='job-status'> <span className='dot'></span>Open</span>
                </div>
                <div className="job-info">
                    <span>
                        <img src={Location} alt="" />
                        Delaware, USA
                    </span>
                    <span>
                        <img src={Coins} alt="" />
                        $300k-$400k
                    </span>
                </div>
            </div>
            <div className="job-skills">
                <ul>
                    <li>Skills Required</li>
                    <li className='job-sk'>
                        <img src={Figma} alt="" />
                        <span>Figma</span>
                    </li>
                    <li className='job-sk'>
                        <img src={AI} alt="" />
                        <span>Adobe Illustrator</span>
                    </li>
                    <li  className='job-sk'>
                        <img src={AX} alt="" />
                        <span>Adobe XD</span>
                    </li>
                </ul>
                <ul>
                    <li>Preferred Language</li>
                    <li className='text-bold'>English</li>
                </ul>
                <ul>
                    <li>Type</li>
                    <li className='text-bold'>Full time</li>
                </ul>
                <ul>
                    <li>
                        Years of Experience
                    </li>
                    <li className='text-bold'>
                        3+ Years of Experience
                    </li>
                </ul>
            </div>
            <div className="job-d">
                <ul className='ab-job'>
                    <span className='ab-job-title'>About the job</span>
                    <li>Handle the UI/UX research design</li>
                      <li>Work on researching on latest web applications designs & trends</li>
                      <li>Work on conceptualizing and visualizing</li>
                      <li>Work on creating graphics content and other graphic related works</li>
                </ul>
                <ul>
                    <span>Benefits:</span>
                    <li>Health insurance</li>
                    <li>Provident Fund</li>
                </ul>
                <ul>
                    <span>Schedule:</span>
                    <li>Day shift</li>
                    {/* <li>Provident Fund</li> */}
                </ul>
                 <ul>
                    <span>Supplemental pay types:</span>
                    <li>Performance bonus</li>
                    <li>Yearly bonus</li>
                </ul>
                <ul><p>Work Location: In person</p></ul>
            </div>
            <div className="company-info">
                <div className="c-title">
                    <img src={atlassian} alt="" />
                    <span>Atlassian</span>
                </div>
                <div className="c-details">
                    <div className="c-det-left">
                        <div className="">
                            <span>Company size</span>
                            <p>1k - 2k Employees</p>
                        </div>
                        <div className="">
                            <span>Sector</span>
                            <p>Information Technology, Infrastructure</p>
                        </div>
                        <div className="">
                            <span>Founded In</span>
                            <p>2019</p>
                        </div>
                    </div>
                    <div className="c-det-right">
                        <div className="">
                            <span>Type</span>
                            <p>Private</p>
                        </div>
                        <div className="">
                            <span>Funding</span>
                            <p>Bootstrapped</p>
                        </div><div className="">
                            <span>Founded By</span>
                            <p>Scott Farquhar, Mike Cannon-Brookes</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


const JobActions = () => {
    return (
        <div className="job-actions">
            <div className="action-btns">
                <button className='dlt-btn'>
                    <img src={trash} alt="" />
                    <span>Delete</span>
                </button>
                <button className='edt-btn'>
                    <img src={edit} alt="" />
                    <span>
                        Edit
                    </span>
                </button>
            </div>
            <div className="job-act-info">
                <div className="info-row">
                    <div className='row-start'>
                        <img src={user} alt="" />
                        <span>Applicants</span>
                    </div>
                    <div className="row-end">
                        <span>400</span>
                    </div>
                </div>
                <div className="info-row">
                    <div className='row-start'>
                        <img src={usercheck} alt="" />
                        <span>Matches</span>
                    </div>
                    <div className="row-end">
                        <span>100</span>
                    </div>
                </div><div className="info-row">
                    <div className='row-start'>
                        <img src={messages} alt="" />
                        <span>Messeges</span>
                    </div>
                    <div className="row-end">
                        <span>147</span>
                    </div>
                </div><div className="info-row">
                    <div className='row-start'>
                        <img src={eye} alt="" />
                        <span>Views</span>
                    </div>
                    <div className="row-end">
                        <span>800</span>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Job