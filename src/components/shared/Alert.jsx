import React from 'react'

const Alert = props => {
    const tempClass = 'alert alert-dismissable fade show'
    return (
        <div className="row">
            <div className="col-md-12">
                <div className={`${tempClass} ' ' ${props.alertType} `} role="alert">
                {props.message}
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Alert