import './header.css'
import JobsIcon from '../../assets/header-svg/jobs.svg'
import MessegeIcon from '../../assets/header-svg/message.svg'
import PaymentsIcon from '../../assets/header-svg/payments.svg'
import BellIcon from '../../assets/header-svg/bell.svg'
import CompanyIcon from '../../assets/header-svg/comapany.svg'
import DownArrowIcon from '../../assets/header-svg/downArrow.svg'



const Header = () => {
  return (
    <header>
          <div className="header-left">
          <a href="/">Logo</a>
          </div>      
          <nav className="header-center">
              <ul>
                  <li>
                      <img src={JobsIcon} alt="" />
                      <span>Jobs</span>
                  </li>
                  <li>
                      <img src={MessegeIcon} alt="" />
                      Messeges
                  </li>
                  <li>
                      <img src={PaymentsIcon} alt="" />
                      Payments
                  </li>
              </ul>
          </nav>
          <div className="header-right">
              <ul>
                  <li>
                      <img src={BellIcon} alt="" />
                  </li>
                  <li >
                      <img src={CompanyIcon} alt="" />
                      <img src={DownArrowIcon} alt="" />

                  </li>
              </ul>
          </div>
    </header>
  )
}

export default Header