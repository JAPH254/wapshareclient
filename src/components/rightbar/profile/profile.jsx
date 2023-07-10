import './profile.css'

function Profile(props) {
    return (
        <div className='profile'>
            <div className="user_info">
                <span>Location</span>
                <img src="https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
               <span>Username</span>
                <span>Message</span>
            </div>
        </div>
    );
}

export default Profile;