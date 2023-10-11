import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import background from '../../assets/images/background.jpg';
import logo from '../../assets/images/logo.svg';
import languageIcon from '../../assets/images/language.svg';
import FeatureComponent from '../../components/landingComponents/feature';
import { landingData } from '../../data/landing';
import './landing.css';

function LandingPage() {
    return (
        <div className='landing-page'>
            <div className='banner'>
                <div className='background'><img src={background} /></div>
                <div className='landing-page-nav container'>
                    <div className='nav-logo'><img src={logo} /></div>
                    <header className='nav-action'>
                        <div>
                            <select>
                                <option>English</option>
                                <option>Tiếng Việt</option>
                            </select>
                            <img src={languageIcon} />
                            <i><FontAwesomeIcon icon={faCaretDown} /></i>
                        </div>
                        <button>Sign In</button>
                    </header>
                </div>
                <div className='card-text container'>
                    <h1>Laughter. Tears. Thrills. Find it all on Netflix.</h1>
                    <h3>Join today. Cancel anytime.</h3>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                    <div className='get-started'>
                        <div className='landing-email-input-field'>
                            <input type='text' required />
                            <label>Email address</label>
                        </div>
                        <button type='button'>Get Started <i><FontAwesomeIcon icon={faChevronRight} /></i>
                        </button>
                    </div>
                </div>
            </div>
            {landingData.map(item => {
                return (
                    <FeatureComponent key={item.id}
                        heading1={item.heading1} heading2={item.heading2}
                        image={item.image} image2={item.image2} video={item.video} id={item.id} />
                )
            })}
        </div>
    );
}

export default LandingPage;
