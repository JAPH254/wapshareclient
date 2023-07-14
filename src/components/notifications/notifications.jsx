import React from 'react';
import "./notifications.css";
import SdCardAlertIcon from '@mui/icons-material/SdCardAlert';
function Notifications(props) {
    return (
        <div className='notifications'>
            <div className="noti">
                <SdCardAlertIcon />
                <h3>notifications</h3>
                <p>no new notifications</p>
                </div>
        </div>
    );
}

export default Notifications;