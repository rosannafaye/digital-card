import React from "react"

export default function Info() {
    return (
        <div className="info-div">
            <h3>Rosanna Whittle</h3>
            <h6 className="job-title">Software Engineer</h6>
            <h6 className="email">whittlerosanna@gmail.com</h6>
            <div className="button">
                <i className="fa-regular fa-envelope">
                <a href="mailto:whittlerosanna@gmail.com" className="email-button">Email</a>
                </i>
            </div>
        </div>
    )
}
