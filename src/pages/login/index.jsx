import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import languageIcon from '../../assets/icons/language.svg';
import logo from '../../assets/icons/logo.svg';
import background from '../../assets/images/background.jpg';
import { footerData } from '../../data/footerData';
import './login.css'

function LoginPage() {
    return (
        <div className='login-page'>
            <div className='login-page-main'>
                <div className='background'><img src={background} /></div>
                <header className='landing-page-nav container'>
                    <div className='nav-logo'><img src={logo} /></div>
                </header>
                <div className='login-form'>
                    <h1>Sign In</h1>
                    <form>
                        <div className='input-field'>
                            <input type='text' required />
                            <label>Email or mobile number</label>
                        </div>
                        <div className='input-field'>
                            <input type='password' required />
                            <label>Password</label>
                        </div>
                        <div className='cta-buttons'>
                            <button type='button' className='sign-in-btn'>Sign In</button>
                            <span>OR</span>
                            <button type='button' className='send-code-btn'>Use a Sign-In Code</button>
                        </div>
                    </form>
                    <div className='center forgot-password-nav'><a href='#'>Forgot password?</a></div>
                    <div>
                        <input type='checkbox' />
                        <label>Remember me</label>
                    </div>
                    <div className='sign-up-nav'>New to Netflix? <a href='#'>Sign up now.</a></div>
                    <div>This page is protected by Google reCAPTCHA to ensure you're not a bot. <button type='button'>Learn more.</button></div>
                </div>
            </div>
            <footer className='container'>
                <h3><a href='#'>Question? Contact us.</a></h3>
                <ul>
                    {footerData.map((item, i) => {
                        let url;
                        item.url
                            ? url = item.url
                            : url = '#'
                        return (
                            <li key={i}><a href={url} target='_blank' rel='noopener'>{item.title}</a></li>
                        )
                    })}
                </ul>
                <div className='nav-action'>
                    <div>
                        <select>
                            <option>English</option>
                            <option>Tiếng Việt</option>
                        </select>
                        <img src={languageIcon} />
                        <i><FontAwesomeIcon icon={faCaretDown} /></i>
                    </div>
                </div>
                <div className='netflix-location'>Netflix Vietnam</div>
            </footer>
        </div>
    );
}

export default LoginPage;
