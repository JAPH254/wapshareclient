import React from 'react';
import './Notfound.css';
function Notfound(props) {
    return (
        <div className='notfound'>
        <div className="titl">
            <h3>Not Found</h3>
        </div>
        <div className="detail">
            sorry, the page you are looking for does not exist.
            click <a href="/dashboard">here</a> to go back to the home page.
        </div>
        </div>
    );
}

export default Notfound;