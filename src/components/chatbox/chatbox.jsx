import { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";

function Chatbox({ socket, username, room }) {
    const [currentMessage, setCurrentMessage] = useState("");
    const [messageList, setMessageList] = useState([]);

    const sendMessage = async () => {
        if (currentMessage !== "") {
            const messageData = {
                room: room,
                author: username,
                message: currentMessage,
                time:
                    new Date(Date.now()).getHours() +
                    ":" +
                    new Date(Date.now()).getMinutes(),
            };

            await socket.emit("send_message", messageData);  // send_message is the event name
            setMessageList((list) => [...list, messageData]);   // add the message to the list
            setCurrentMessage("");   // clear the input field
        }
    };

    useEffect(() => {
        socket.on("receive_message", (data) => {     // receive_message is the event name
            setMessageList((list) => [...list, data]);   // data is the message data
        });
    }, [socket]);

    return (
        <div className="chat-window">
            <div className="chat-header">
                <p>wapshare live chatbox</p>
            </div>
            <div className="chat-body">
                <ScrollToBottom className="message-container">
                    {messageList.map((messageContent, index) => {
                        return (
                            <div
                                className="message" key={index}
                                id={username === messageContent.author ? "you" : "other"}
                            >
                                <div>
                                    <div className="message-content">
                                        <p>{messageContent.message}</p>
                                    </div>
                                    <div className="message-meta">
                                        <p id="time">{messageContent.time}</p>
                                        <p id="author">{messageContent.author}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </ScrollToBottom>
            </div>
            <div className="chat-footer">
                <input
                    type="text"
                    value={currentMessage}
                    placeholder="write message..."
                    onChange={(event) => {
                        setCurrentMessage(event.target.value);
                    }}
                    onKeyPress={(event) => {
                        event.key === "Enter" && sendMessage();
                    }}
                />
                <button onClick={sendMessage}>send</button>
            </div>
        </div>
    );
}

export default Chatbox;