import "./stories.css";
import React, { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { fetchStories } from "../../store/reducerAPI";

function Stories(props) {
  const user = useSelector((store) => store.user.user);
  const stories = useSelector((store) => store.stories.stories);
  const dispatch = useDispatch();
  const getStories = async () => {
    try {
      await fetchStories(user, dispatch);
    } catch (error) {
      alert(error.message);
    }
    useEffect(() => {
      getStories();
      fetchStories(user, dispatch);
      console.log(stories);
    }
    , [])

  };

  return (
    <div className="stories">
      <div className="story1">
        <img
          src="https://images.pexels.com/photos/6936407/pexels-photo-6936407.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <div className="poster">
          <span>Ruth Peace</span>
          <p>2 hours ago</p>
        </div>
      </div>

      <div className="story2">
        <img
          src="https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <div className="poster">
          <span>Ruth Peace</span>
          <p>2 hours ago</p>
        </div>
      </div>
      <div className="story3">
        <img
          src="https://images.pexels.com/photos/4873585/pexels-photo-4873585.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <div className="poster">
          <span>Ruth Peace</span>
          <p>2 hours ago</p>
        </div>
      </div>
      <div className="story4">
        <img
          src="https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <div className="poster">
          <span>Ruth Peace</span>
          <p>2 hours ago</p>
        </div>
      </div>
    </div>
  );
}

export default Stories;
