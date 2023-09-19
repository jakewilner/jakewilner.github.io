import './Empty.css'

const Empty = () => {
    return(
        <div className="container">
            <h1 className='page-header'>Page not found</h1>
            <p className='page-body'>
                Sorry, the provided url doesn't lead anywhere!
            </p>
        </div>
    )
}

export default Empty