import React, { useEffect, useState } from "react";
import "./Updateprofile.css";
import { useSelector } from "react-redux";
import { ApiDomain } from "../../assets/utils";
import axios from "axios";
function Updateprofile() {
  const handleback = () => {
    window.history.back();
  };
  const user = useSelector((store) => store.user.user);
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    setName(user.USERNAME);
    setCountry(user.COUNTRY);
    setPhone(user.PHONE);
    setWebsite(user.WEBSITE);
    setEmail(user.EMAIL);
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedUser = {
      USERId: user.USERID,
      USERNAME: name,
      COUNTRY: country,
      PHONE: phone,
      WEBSITE: website,
      EMAIL: email,
    };
  try {
    const res = await axios.put(`${ApiDomain}/users/${user.USERID}`, updatedUser);
    const data  =  await res.data;
    console.log(data, updatedUser);
  } catch (error) {
    console.log(error);
  }
  }
  return (
    <div className="Updates">
      <div className="up">
        <h2>Update your Profile</h2>
      </div>
      <div className="updatingdetail">
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input type="text" value={name} onChange={(e)=> setName(e.target.value)} placeholder="Enter your username" />
          <label>Email</label>
          <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Enter your email" />
          <label>Phone</label>
          <input type="text" value={phone} onChange={(e)=> setPhone(e.target.value)} placeholder="Enter your phone number" />
          <label>Country</label>
          <input type="text" value={country} onChange={(e)=> setCountry(e.target.value)} placeholder="Enter your country" />
          <label>Website</label>
          <input type="text" value={website} onChange={(e)=> setWebsite(e.target.value)} placeholder="Enter your website" />
          <button>Update</button>
        </form>
      </div>
      <div className="foot">
        <button onClick={handleback}>back</button>
      </div>
    </div>
  );
}

export default Updateprofile;
