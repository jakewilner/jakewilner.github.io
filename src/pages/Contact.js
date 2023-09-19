import './Contact.css'
import linkedin from '../images/linked-in.png'
import indeed from '../images/indeed.png'

const Contact = () => {
    return(
        <div className="container">
            <div className='page-header'>Contact Me</div>
            <div className='contact-body'>
                <div className="contact-email">
                    The best way to reach me is by email, just click the button below!<br/>
                    <button className='contact-button' onClick={() => window.location = 'mailto:jacob_w_wilner@brown.edu'}>Send me an email!</button>
                </div>
                <div className='social-container'>
                    <div className='contact-social'>
                        Alternatively, you can click on any of the platforms below to find me there!
                    </div>
                    <div className='social-links'>
                        <a className='linked-in-link' href='https://www.linkedin.com/in/jake-wilner-003170292' target='_blank'><img className='linked-in-img' src={linkedin}/></a>
                        <a className='indeed-link' href='https://profile.indeed.com/p/jacobw-7k4zyl3' target='_blank'><img className='indeed-img' src={indeed}/></a>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Contact