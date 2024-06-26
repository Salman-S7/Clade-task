import "./header.css";
// import JobsIcon from '../../assets/header-svg/jobs.svg'
// import MessegeIcon from '../../assets/header-svg/message.svg'
// import PaymentsIcon from '../../assets/header-svg/payments.svg'
import BellIcon from "../../assets/header-svg/bell.svg";
import CompanyIcon from "../../assets/header-svg/comapany.svg";
import DownArrowIcon from "../../assets/header-svg/downArrow.svg";
import { useState } from "react";

const Header = () => {
  const [selectedNav, setSelectedNav] = useState("jobs");
  return (
    <header>
      <div className="header-left">
        <a href="/">Logo</a>
      </div>
      <nav className="header-center">
        <ul>
          <li
            onClick={() => setSelectedNav("jobs")}
            className={selectedNav === "jobs" ? "nav-active" : ""}
          >
            {/* <img src={JobsIcon} alt="" /> */}
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 21.5V7.5C8 6.57003 8 6.10504 8.10222 5.72354C8.37962 4.68827 9.18827 3.87962 10.2235 3.60222C10.605 3.5 11.07 3.5 12 3.5C12.93 3.5 13.395 3.5 13.7765 3.60222C14.8117 3.87962 15.6204 4.68827 15.8978 5.72354C16 6.10504 16 6.57003 16 7.5V21.5M5.2 21.5H18.8C19.9201 21.5 20.4802 21.5 20.908 21.282C21.2843 21.0903 21.5903 20.7843 21.782 20.408C22 19.9802 22 19.4201 22 18.3V10.7C22 9.57989 22 9.01984 21.782 8.59202C21.5903 8.21569 21.2843 7.90973 20.908 7.71799C20.4802 7.5 19.9201 7.5 18.8 7.5H5.2C4.07989 7.5 3.51984 7.5 3.09202 7.71799C2.71569 7.90973 2.40973 8.21569 2.21799 8.59202C2 9.01984 2 9.57989 2 10.7V18.3C2 19.4201 2 19.9802 2.21799 20.408C2.40973 20.7843 2.71569 21.0903 3.09202 21.282C3.51984 21.5 4.0799 21.5 5.2 21.5Z"
                stroke={selectedNav === "jobs" ? "#FFF" : "#B0B0B0"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span>Jobs</span>
          </li>
          <li
            onClick={() => setSelectedNav("msgs")}
            className={
              selectedNav === "msgs" ? "nav-active msgs-icon" : "msgs-icon"
            }
          >
            {/* <img src={MessegeIcon} alt="" /> */}
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 8.3C3 6.61984 3 5.77976 3.32698 5.13803C3.6146 4.57354 4.07354 4.1146 4.63803 3.82698C5.27976 3.5 6.11984 3.5 7.8 3.5H16.2C17.8802 3.5 18.7202 3.5 19.362 3.82698C19.9265 4.1146 20.3854 4.57354 20.673 5.13803C21 5.77976 21 6.61984 21 8.3V13.7C21 15.3802 21 16.2202 20.673 16.862C20.3854 17.4265 19.9265 17.8854 19.362 18.173C18.7202 18.5 17.8802 18.5 16.2 18.5H9.68375C9.0597 18.5 8.74767 18.5 8.44921 18.5613C8.18443 18.6156 7.9282 18.7055 7.68749 18.8285C7.41617 18.9671 7.17252 19.162 6.68521 19.5518L4.29976 21.4602C3.88367 21.7931 3.67563 21.9595 3.50054 21.9597C3.34827 21.9599 3.20422 21.8906 3.10923 21.7716C3 21.6348 3 21.3684 3 20.8355V8.3Z"
                stroke={selectedNav === "msgs" ? "#FFF" : "#B0B0B0"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Messeges
          </li>
          <li
            onClick={() => setSelectedNav("payments")}
            className={selectedNav === "payments" ? "nav-active" : ""}
          >
            {/* <img src={PaymentsIcon} alt="" /> */}
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5295 8.85186C12.9571 9.25995 12.2566 9.5 11.5 9.5C9.567 9.5 8 7.933 8 6C8 4.067 9.567 2.5 11.5 2.5C12.753 2.5 13.8522 3.15842 14.4705 4.14814M6 20.5872H8.61029C8.95063 20.5872 9.28888 20.6277 9.61881 20.7086L12.3769 21.3789C12.9753 21.5247 13.5988 21.5388 14.2035 21.4214L17.253 20.8281C18.0585 20.6712 18.7996 20.2854 19.3803 19.7205L21.5379 17.6217C22.154 17.0234 22.154 16.0524 21.5379 15.4531C20.9832 14.9134 20.1047 14.8527 19.4771 15.3103L16.9626 17.1449C16.6025 17.4081 16.1643 17.5498 15.7137 17.5498H13.2855L14.8311 17.5498C15.7022 17.5498 16.4079 16.8633 16.4079 16.0159V15.7091C16.4079 15.0055 15.9156 14.392 15.2141 14.2219L12.8286 13.6417C12.4404 13.5476 12.0428 13.5 11.6431 13.5C10.6783 13.5 8.93189 14.2988 8.93189 14.2988L6 15.5249M20 7C20 8.933 18.433 10.5 16.5 10.5C14.567 10.5 13 8.933 13 7C13 5.067 14.567 3.5 16.5 3.5C18.433 3.5 20 5.067 20 7ZM2 15.1L2 20.9C2 21.4601 2 21.7401 2.10899 21.954C2.20487 22.1422 2.35785 22.2951 2.54601 22.391C2.75992 22.5 3.03995 22.5 3.6 22.5H4.4C4.96005 22.5 5.24008 22.5 5.45399 22.391C5.64215 22.2951 5.79513 22.1422 5.89101 21.954C6 21.7401 6 21.4601 6 20.9V15.1C6 14.5399 6 14.2599 5.89101 14.046C5.79513 13.8578 5.64215 13.7049 5.45399 13.609C5.24008 13.5 4.96005 13.5 4.4 13.5L3.6 13.5C3.03995 13.5 2.75992 13.5 2.54601 13.609C2.35785 13.7049 2.20487 13.8578 2.10899 14.046C2 14.2599 2 14.5399 2 15.1Z"
                stroke={selectedNav === "payments" ? "#FFF" : "#B0B0B0"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Payments
          </li>
        </ul>
      </nav>
      <div className="header-right">
        <ul>
          <li className="bell-icon">
            <img src={BellIcon} alt="" />
          </li>
          <li>
            <img src={CompanyIcon} alt="" />
            <img src={DownArrowIcon} alt="" />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
