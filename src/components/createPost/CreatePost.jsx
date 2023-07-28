import React, { useState } from "react";
import "./CreatePost.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import { useForm } from "react-hook-form";
import { ApiDomain } from "../../assets/utils";
import { fetchPosts } from "../../store/reducerAPI";

function CreatePost() {
  const [file, setFile] = useState(null);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user.user);
  console.log(user);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      let POSTIMAGE = Date.now() + file.name;
      // const POSTDATE = new Date().toLocaleString();
      const formData = new FormData();
      formData.append("CONTENT", data.CONTENT);
      formData.append("POSTMAKER", user.USERNAME);
      formData.append("USERID", user.id);
      // formData.append("POSTDATE", POSTDATE);
      formData.append("POSTIMAGE", POSTIMAGE);
      formData.append("file", file);
      const res = await axios.post(`${ApiDomain}/posts`, formData);
      setLoad(true);
      alert(res.data.message);
      await fetchPosts(user,dispatch)
      setLoad(false);
    } catch (error) {
      setLoad(false);
      alert(error);
      setError(error.message);

    }
  };
  if(error) return <h1>{error}</h1>
  if(load) return <h1>Loading...</h1>
  return (
    <div className="CreatePost">
     
      <div className="postcreator">
        <img src={user?.PROFILE_PIC || null} alt="" />
        <form className="postDetails" onSubmit={handleSubmit(onSubmit)}>
          <textarea
            placeholder="What's on your mind?"
            {...register("CONTENT")}
          ></textarea>

          <label htmlFor="file">
            <PermMediaIcon />
          </label>
          <input
            type="file"
            {...register("POSTIMAGE")}
            id="file"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <button type="submit">Post</button>
        </form>
      </div>
    </div>
  );
}

export default CreatePost;
