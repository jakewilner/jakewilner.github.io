import MapChart from '../components/MapChart'
import './About.css'
import brown from '../images/brown.png'

const About = () => {
    return(
        <div className="container">
            <div className='about-title'>
                <p>
                    About Me
                </p>
                <img className='brown-logo'
                    src={brown}
                />                
            </div>
            <div className='page-content'>
                <div className='about-body'>
                        <div className='about-header'>
                            Hi, I'm Jake Wilner!
                        </div>
                        <div className='about-text'>
                            I am a college student from Bloomfield Hills, MI.
                            I am an aspiring software developer, economist and behavioral scientist. I am a student at Brown University, class of 2025. 
                            I am pursuing a Bachelor's of Art in both Computer Science-Economics and Behavioral Decision Sciences. 
                            I have programming experience in Java, Javascript, C++ and Python.<br/><br/>
                            I love to ski, hike, and hang out with my dog. I also love playing video games, ping pong and spikeball. I'm even a founder and 
                            captain of Brown University's spikeball team!
                        </div>
                </div>

                <div className='map-graphics'>
                    <div className='map'>
                        <MapChart/>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default About