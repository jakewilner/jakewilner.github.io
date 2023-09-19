import './All-Proj.css'
import saguaro1 from './images/saguaro-1.png'
import saguaro2 from './images/saguaro-2.png'

const Saguaro = () => {
    return(
        <div className="container">
            <h1 className='page-header'>Saguaro Identification</h1>
            <div className='body-container'>
                <div className='body-title'>
                    Computer Vision to solve real-world problems
                </div>
                <div className='body-content'>
                    This project utilized computer vision tools for the identification of features on a plot of
                    Saguaro cacti in the Saguaro National Park. Biologists at the park had been counting flowers 
                    and identifying buds by hand. My team and I created a model that is able to identify not only
                    the presence of buds and flowers, but one that can identify and count buds, flowers, and two 
                    types of fruit. 
                </div>
                <div className='links-graphics-container'>
                    <div className='links'>
                        Related links:
                        <ul>
                            <li>View the <a href='https://docs.google.com/document/d/1WBiDPbMO5IJtgo5hXvZgdn8x8CkXK4PiPRIq6tiFUww/edit?usp=sharing' target='_blank'>project specifications</a></li>
                            <li>Check out the <a href='https://github.com/jakewilner/Saguaro-Identification' target='_blank'>GitHub</a></li>
                            <li>Or look at the live deployment on <a href='https://universe.roboflow.com/saguaro-identification-hig2x/saguaro-identification' target='_blank'>Roboflow</a></li>
                        </ul>
                    </div>
                    <div className='graphics'>
                        <img className='graphics-img' src={saguaro1}/>
                        <img className='graphics-img' src={saguaro2}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Saguaro