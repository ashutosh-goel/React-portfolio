import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faGithub
} from '@fortawesome/free-brands-svg-icons'


const Contact = () => {
    return(
    <>
        <div className="container contact">
        <div className="text-zone">
          <h1>
            Contact Me :
          </h1>
          <h2>

          <FontAwesomeIcon
              icon={faPhone}
              color="#4d4d4e"
              className="icon"
            /> <span className='text'>+91-8569855890</span>
            
            <br/>
            <FontAwesomeIcon
              icon={faEnvelope}
              color="#4d4d4e"
              className="icon"
            /> <span className='text'>ashutoshgoel.03@gmail.com</span>
          </h2>
          <a
            href="https://www.linkedin.com/in/ashutosh-goel-1aa360252"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
          <a
            href="https://github.com/ashutosh-goel"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </div>
        
        </div>
    </>
    )
}

export default Contact