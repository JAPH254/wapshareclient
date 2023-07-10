import React from "react";
import "./Leftbar.css";
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';

const Leftbar = () => {
  return (
    <div className="leftbar">
      <div className="leftbar_upper">
        <div className="upper_tab">
          <img
            src="https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <span>Profile</span>
        </div>
        <div className="upper_tab">
          <img
            src="https://images.pexels.com/photos/4834142/pexels-photo-4834142.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <span>Friends</span>
        </div>

        <div className="upper_tab">
          <img
            src="https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <span>Groups</span>
        </div>
        <div className="upper_tab">
          <img
            src="https://images.pexels.com/photos/442161/pexels-photo-442161.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <span>Marketplace</span>
        </div>
        <div className="upper_tab">
          <img
            src="https://images.pexels.com/photos/320617/pexels-photo-320617.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <span>Media</span>
        </div>
        <div className="upper_tab">
          <img
            src="https://images.pexels.com/photos/2874998/pexels-photo-2874998.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <span>Memories</span>
        </div>
      </div>
      <hr />
      <div className="leftbar_lower">
        <h3>Online friends</h3>
        <div className="lower_tab">
          <img
            src="https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <span>Kenneth Juma</span>
        </div>
        <div className="lower_tab">
          <img
            src="https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <span>Alice Cheese</span>
        </div>
      </div>
      <div className="suggestedPages">
        <div className="pages">
        <LanguageRoundedIcon/>
        <span>Kenya Articles</span>
        <button>follow</button>
        </div>
        <div className="pages">
        <LanguageRoundedIcon/>
        <span>American stars</span>
        <button>follow</button>
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
