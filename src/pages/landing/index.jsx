import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import background from '../../assets/images/background.jpg';
import logo from '../../assets/icons/logo.svg';
import languageIcon from '../../assets/icons/language.svg';
import plusIcon from '../../assets/icons/plus-icon.svg';
import FeatureComponent from '../../components/landingComponents/feature';
import { landingData } from '../../data/landing';
import './landing.css';

function LandingPage() {

    useEffect(() => {
        const questionButtons = document.querySelectorAll('.landing-question-title>button');
        const questionHiddenTexts = document.querySelectorAll('.landing-question>.question-card>div');
        const questionIcons = document.querySelectorAll('.landing-question-title>button>i');
        questionButtons.forEach((btn, i) => {
            btn.addEventListener('click', () => {
                if (document.getElementsByClassName('question-open').length != 0) {
                    if (document.getElementsByClassName('question-open')[0] !== questionHiddenTexts[i]) {
                        document.getElementsByClassName('question-open')[0].classList.remove('question-open')
                        document.getElementsByClassName('x-icon')[0].classList.remove('x-icon')
                    }
                    questionHiddenTexts[i].classList.toggle('question-open')
                    questionIcons[i].classList.toggle('x-icon')
                }
                else {
                    questionHiddenTexts[i].classList.toggle('question-open')
                    questionIcons[i].classList.toggle('x-icon')
                }
            })
        });
    }, []);

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
            <div className='landing-question container'>
                <h2>Frequently Asked Questions</h2>
                <div className='question-card'>
                    <h3 className='landing-question-title'>
                        <button>
                            <span>What is Netflix?</span>
                            <i><img src={plusIcon} /></i>
                        </button>
                    </h3>
                    <div>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.

                        You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</div>
                </div>
                <div className='question-card'>
                    <h3 className='landing-question-title'>
                        <button>
                            <span>How much does Netflix cost?</span>
                            <i><img src={plusIcon} /></i>
                        </button>
                    </h3>
                    <div>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from 70,000 ₫ to 260,000 ₫ a month. No extra costs, no contracts.</div>
                </div>
                <div className='question-card'>
                    <h3 className='landing-question-title'>
                        <button>
                            <span>Where can i watch?</span>
                            <i><img src={plusIcon} /></i>
                        </button>
                    </h3>
                    <div>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.</div>
                </div>
                <div className='question-card'>
                    <h3 className='landing-question-title'>
                        <button>
                            <span>How do i cancel?</span>
                            <i><img src={plusIcon} /></i>
                        </button>
                    </h3>
                    <div>Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</div>
                </div>
                <div className='question-card'>
                    <h3 className='landing-question-title'>
                        <button>
                            <span>What can i watch on Netflix?</span>
                            <i><img src={plusIcon} /></i>
                        </button>
                    </h3>
                    <div>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</div>
                </div>
                <div className='question-card'>
                    <h3 className='landing-question-title'>
                        <button>
                            <span>Is Netflix good for kids?</span>
                            <i><img src={plusIcon} /></i>
                        </button>
                    </h3>
                    <div>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.</div>
                </div>

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
    );
}

export default LandingPage;
