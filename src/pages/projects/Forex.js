import './All-Proj.css'
import forexGraph from './images/forex-graph.png'

const Forex = () => {
    return(
        <div className="container">
            <h1 className='page-header'>Forex Assistant</h1>
            <div className='body-container'>
                <div className='body-title'>
                    External APIs for live data
                </div>
                <div className='body-content'>
                    This project utilized a variety of live APIs to get current data on a variety of metrics important to Forex trading.
                    These metrics were then used to calculate our own inflation index, and display data on graphs and charts. This data
                    was available for a variety of major countries and their currencies, like the US, UK, Canada, Australia, and many
                    others. This project was a proof of concept for the creation of a free tool that would allow the average person to
                    have Forex data, and a better understanding of the market, for free.
                </div>
                <div className='links-graphics-container'>
                    <div className='links'>
                        Related links:
                        <ul>
                            <li>Check out the <a href='https://github.com/jakewilner/Forex-assistant' target='_blank'>GitHub</a></li>
                        </ul>
                    </div>
                    <div className='graphics'>
                        <img className='graphics-img' src={forexGraph}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forex