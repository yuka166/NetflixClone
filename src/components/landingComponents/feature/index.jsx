import downloadGif from '../../../assets/images/download-icon.gif';
import './feature.css';

function FeatureComponent(props) {
    return (
        <div className="landing-feature">
            <div className="container">
                <div>
                    <h2>
                        {props.heading1}
                    </h2>
                    <h3>
                        {props.heading2}
                    </h3>
                </div>
                <div>
                    <img src={props.image} />
                    {props.video
                        ? <video autoPlay muted loop playsInline className={'tv' + props.id}>
                            <source src={props.video} type="video/mp4" />
                        </video>
                        : <></>}
                    {props.image2
                        ? <div className='boxshot'>
                            <img src={props.image2} />
                            <div className='boxshot-text'>
                                <div>Stranger Things</div>
                                <div>Downloading...</div>
                            </div>
                            <div><img src={downloadGif} /></div>
                        </div>
                        : <></>}
                </div>
            </div>
        </div>
    );
}

export default FeatureComponent;
