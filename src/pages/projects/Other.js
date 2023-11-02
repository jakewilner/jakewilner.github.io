import './All-Proj.css'
import './Other.css'

const OtherWork = () => {
    return(
        <div className="container">
            <h1 className='page-header'>Other Work</h1>
            <div className='body-container'>
                <div className='body-title'>
                    All of the steps along the way
                </div>
                <div className='body-content'>
                    This section is devoted to all of the other work that isn't exactly highlighted, but is important work
                    in between my current projects and my start in coding. One such project is Evolution, my first interaction
                    with artificial intelligence/machine learning. This project taught a computer how to play a version of flappy
                    bird. After a night in my room on max speed, with a desk fan used for cooling, it was scoring over 10,000.
                    A lot of my early coding projects were games, and the two that I first used animation and physics in were 
                    a version of Doodle Jump, and Jetpack. These projects helped me learn proper animation and use of acceleration
                    vectors for object movement in Java. All of those projects are bundled into one "Arcade" project. I also developed 
                    some web apps, like my D&D dice roller. It was taking me a long time to calculate out attacks and damage, so I made 
                    a small app to do it for me. Another web app is the website that you're currently on!
                </div>
                <div className='links-graphics-container'>
                    <div className='links'>
                        Arcade links:
                        <ul>
                            <li>Check out the <a href='https://github.com/jakewilner/arcade' target='_blank'>GitHub</a> for Arcade.</li>
                        </ul>
                    </div>
                    <div className='links-other'>
                        Web app links:
                        <ul>
                            <li>Or peek at the <a href='https://github.com/jakewilner/jakewilner.github.io/tree/main' target='_blank'>GitHub</a> for the site you're on right now!</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OtherWork