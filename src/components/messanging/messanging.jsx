import "./messanging.css";
import io from "socket.io-client";
import { useState } from "react";
import Chatbox from "../chatbox/chatbox";
import { useSelector } from "react-redux";

const socket = io.connect("http://localhost:8082");

function Messanging() {
  const user = useSelector((store) => store.user.user);
  const [username, setUsername] = useState(user.USERNAME);
  const [room, setRoom] = useState(123);
  const [showChat, setShowChat] = useState(false); // showChat is a boolean

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true); // show the chat window
    }
  };
  const chatid=1234

  return (
    <div className="messApp">
      {!showChat ? ( // if showChat is false, show the joinChatContainer
        <div className="joinChatContainer">
          <h3>Wapshare chat Setup</h3>
          <div className="inputs">
            <label>Joining as {user.USERNAME}</label>
            {/* <input
              type="text"
              placeholder="Connection ID..."
              onChange={(event) => {
                setRoom(event.target.value);
              }} 
            /> */}
            {/* <label value></label> */}
          </div>
          <div>
            <button onClick={joinRoom}>connect</button>
          </div>
        </div>
      ) : (
        //
        <Chatbox socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default Messanging;
