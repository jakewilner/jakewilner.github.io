import './Empty.css'

const Empty = () => {
    return(
        <div className="container">
            <h1 className='page-header'>Page not found</h1>
            <div className='not-found-body'>
                Sorry, the provided url doesn't lead anywhere!
            </div>
        </div>
    )
}

export default Empty