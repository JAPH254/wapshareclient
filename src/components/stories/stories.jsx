import "./stories.css";
import React from "react";

function Stories(props) {
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
