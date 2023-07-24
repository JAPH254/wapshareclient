import React from "react";
function Updateprofile() {
  return (
    <div className="Updates">
      <div className="up"></div>
      <div className="updatingdetail">
        <label>Username</label>
        <input type="text" placeholder="Enter your username" />
        <label>Email</label>
        <input type="email" placeholder="Enter your email" />
        <label>Phone</label>
        <input type="text" placeholder="Enter your phone number" />
        <label>Country</label>
        <input type="text" placeholder="Enter your country" />
        <label>Website</label>
        <input type="text" placeholder="Enter your website" />
        <label></label>
        <div className="foot">
          <button>back</button>
          <button>Update</button>
        </div>
      </div>
    </div>
  );
}

export default Updateprofile;
