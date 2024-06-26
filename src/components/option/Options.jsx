import { useState } from 'react'
import './options.css'
const Options = () => {
    const [selectedOption, setSelectedOption] = useState('prv')
  return (
    <div className="options">
      <ul>
        <li
          onClick={() => setSelectedOption("prv")}
          className={selectedOption === "prv" ? "option-active" : ""}
        >
          Job preview
        </li>
        <li
          onClick={() => setSelectedOption("apll")}
          className={selectedOption === "apll" ? "option-active" : ""}
        >
          Applicants
        </li>
        <li
          onClick={() => setSelectedOption("match")}
          className={selectedOption === "match" ? "option-active" : ""}
        >
          Match
        </li>
        <li
          onClick={() => setSelectedOption("msgs")}
          className={selectedOption === "msgs" ? "option-active" : ""}
        >
          Messages
        </li>
      </ul>
    </div>
  );
}

export default Options