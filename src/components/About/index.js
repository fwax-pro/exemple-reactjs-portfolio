import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin, faTwitter, faGithub} from '@fortawesome/free-brands-svg-icons';

import './about.css';

const AboutPage = () => (
    <section className="about-page fade-in">
        <h1>John<span>Doe</span></h1>
        <h2>frontend developer - everywhere - contact@test.com</h2>
        <p>I’m with broad technical skill-set, very strong attention to detail, and <b>3 years of experience</b> in front-end web development.</p> 
        <div className="social-icon">
            <ul>
                <li>
                    <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/mrfwax/">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </li>
                <li>
                    <a rel="noreferrer" target="_blank" href="https://twitter.com/mr_fwax">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                </li>
                <li>
                    <a rel="noreferrer" target="_blank" href="https://github.com/fwax-pro">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li>
            </ul>
        </div>   
    </section>
)

export default AboutPage;