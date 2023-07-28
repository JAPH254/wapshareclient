import * as React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Login from "./pages/login/login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Rightbar from "./components/rightbar/Rightbar";
import Leftbar from "./components/leftbar/Leftbar";
import Footer from "./pages/footer/Footer";
import Profile from "./components/profile/profile";
import Notfound from "./pages/NotFound/Notfound";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import SinglePost from "./components/posts/SinglePost";
import Comments from "./components/comments/comments";
import Updateprofile from "./components/Updateprofile/Updateprofile";
import Deleteaccount from "./pages/deleteaccount/Deleteaccount";
import Gallery from "./components/Gallery/Gallery";
import Friends from "./components/Friends/Friends";
import Messanging from "./components/messanging/messanging";
import Handledelete from "./components/handleDelete/Handledelete";
import About from "./pages/About/About";

function App() {
  const user = JSON.parse(localStorage.getItem("user"));
  const userd = useSelector((store)=> store.user.user)
  const Dashboard = () => {
    return (
      <div>
        <Navbar />
        <div className="body">
          <Leftbar />
          <Outlet />
          <Rightbar />
        </div>
      </div>
    );
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
        
            <>
              <Route path="/dashboard" element={<Dashboard />}>
              {/* <Route path="/" element={<Dashboard />}> */}
                <Route index element={<Home />} />
                <Route path="/dashboard/profile/:id" element={<Profile />} />
                <Route path="/dashboard/posts/:id" element={<SinglePost />} />
              <Route path="/dashboard/comments" element={<Comments />} />
              <Route path="/dashboard/myprofile" element={<Updateprofile/>}/>
              <Route path="/dashboard/deleteaccount" element={<Deleteaccount/>}/>
              <Route path="/dashboard/gallery" element={<Gallery />} />
              <Route path= "/dashboard/friends" element = {<Friends/>}/>
              <Route path="/dashboard/messages" element={<Messanging/>} />
              <Route path ="/dashboard/settings" element = {<Handledelete/>}/>
              <Route path ="/dashboard/aboutus" element = {<About/>}/>
              </Route>
            </>
          
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Register />} />
              <Route path="*" element={<Notfound />} />
            </>
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
