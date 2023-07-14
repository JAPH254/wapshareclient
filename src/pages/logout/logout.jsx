import React from 'react';
import './logout.css'
import SettingsPowerIcon from '@mui/icons-material/SettingsPower';
import { useNavigate } from 'react-router-dom';
function Logout(props) {
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem("token")
        navigate("/login")
    }
    return (
        <div className='logout' onClick={handleLogout}>
            <p>Log Out</p>
            <SettingsPowerIcon/>

        </div>
    );
}

export default Logout;