import './Handledelete.css'
import React from 'react';

const deletePage = () => {
    window.location.href = "/dashboard/deleteaccount"
}
const aboutPage = () => {
    window.location.href = "/dashboard/aboutus"
}
function Handledelete() {
    return (
        <div className='Delete'>
            <div className="Delpage">
                <h2>settings</h2>
                <button onClick={aboutPage}>About us</button>
                <button onClick={deletePage}>Delete your account</button>
            </div>
        </div>
    );
}

export default Handledelete;