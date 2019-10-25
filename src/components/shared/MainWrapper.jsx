import React from 'react'

const Wrapper = props => {
    return (
        <div className="col-md-9">
            {props.children}
        </div>
    )
}

export default Wrapper