import "./Home.css"
import "./pages.css"
import ReactTyped from "react-typed"
import { Link } from "react-router-dom"

const Home = () => {
    return(
        <div className="container">
            <div className="intro">
                Hi! My name is...
            </div>
            <div className="name-container">
                <div className="first-name">
                    Jake
                </div>
                <div className="last-name">
                    Wilner
                </div>
            </div>
            <div className="description-container">
                <div className="description">
                I am <ReactTyped
                strings={[
                    'a junior developer. ',
                    'an economist. ',
                    'a behavioral scientist. ',
                    'a college student. ',
                    'a pet person. ',
                    'excited to meet you! ']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                    >
                </ReactTyped><br/><br/>

                Learn more <a href="/about">about me</a>.<br/>
                Get in <a href="/contact">contact</a>.<br/>
                See my <a href="/projects">projects</a>.

                </div>
            </div>
        </div>
    )
}

export default Home