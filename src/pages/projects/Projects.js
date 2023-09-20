import './Projects.css'

const Projects = () => {
    return(
        <div className="container">
            <div className='page-header'>Projects</div>
            <div className='page-body'>
                <div className='ai-container proj-container'>
                    <div className='desc-content'>
                        <div className='ai-title proj-title'>
                            Artificial Intelligence
                        </div>
                        <div className='proj-desc'>
                            I have worked with various tools within the AI space, mostly in the area of deep learning. 
                            My most recent project was a <a href="/#/projects/saguaro">computer vision</a> project, identifying
                            features of Saguaro cacti, for use of Saguaro National Park biologists in their study of
                            Saguaro blooms. I have also done work with image captioning, handwriting interpretation,
                            image classification and other neural networks. Most of my AI work has been done in Python.
                        </div>
                    </div>
                </div>
                <div className='web-app-container proj-container'>
                    <div className='desc-content'>
                        <div className='web-app-title proj-title'>
                            Web Applications
                        </div>
                        <div className='proj-desc'>
                            Most recently, I created a <a href="/#/forex">Forex trading assistant</a>. This web app pulled data
                            on inflation and interest rates from live APIs, for a number of major countries. It also calculated 
                            an inflation index score for each of those countries. I have done other work with APIs, on the back-end
                            and have done front-end development in React. One example of that is the site that you're currently on!
                        </div>
                    </div>
                    
                </div>
                <div className='game-container proj-container'>
                    <div className='desc-content'>
                        <div className='game-title proj-title'>
                            Games
                        </div>
                        <div className='proj-desc'>
                            Early on in my programming career, I started out programming games. One example of this is my collection of games, <a href='/#/projects/other'>Arcade</a>. 
                            There's Flappy Bird, Tetris, Doodle Jump, and even hints of machine learning. If we go back even farther, we can see my true
                            programming origins, in my <a href="https://scratch.mit.edu/users/jakewwilner/">Scratch profile</a>. This is where I 
                            first discovered that I loved to program, and wanted to do it for real (in middle school)!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects