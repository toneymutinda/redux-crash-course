import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="col-md-3">
            <div className="list-group">
                <Link to="/" className="list-group-item list-group-item-action active">
                    Home
                </Link>
                <Link to="/categories" className="list-group-item list-group-item-action">Categories</Link>
            </div>
        </div>
    )
}

export default Sidebar