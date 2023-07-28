import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ApiDomain } from "../../assets/utils";
function Story() {
  const user = useSelector((store) => store.user.user);
  const stories = useSelector((store) => store.stories.stories);
  return (
    <div className="story">
      <div className="image">
        <img src={stories.STORY_IMAGE} alt="" />
      </div>
      <div className="foot">
        <span>{stories.DATE_POSTED}</span>
      </div>
    </div>
  );
}

export default Story;
