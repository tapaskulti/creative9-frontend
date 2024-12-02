/* eslint-disable react/prop-types */
import { ArrowBack, ChatBubble, Close, Send } from "@mui/icons-material";
import ReceiverCard from "./ReceiverCard";
import SenderCard from "./SenderCard";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ScrollToBottom from "react-scroll-to-bottom";
import { css } from "@emotion/react";
import io from "socket.io-client";
import moment from "moment";
import { setMessages, setReceiver } from "../redux/chat/chat";



const socket = io("https://creativevalley9.com/api/");

function Chat() {
  const dispatch = useDispatch();
  const { user, userList } = useSelector((state) => state.user);
  const { messages, receiver } = useSelector((state) => state.chat);
  const [openChatWindow, setopenChatWindow] = useState(false);
  const [chatInput, setchatInput] = useState();

  const [message, setMessage] = useState("");
  // const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  //   6496ce0afd365ce69b53bdc3 - receiver

  const bottomRef = useRef(null);

  useEffect(() => {
    if (messages.length) {
      bottomRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [messages]);

  useEffect(() => {
    if (user?._id && receiver !== undefined) {
      socket.emit("user-connected", user?._id);
      dispatch({
        type: "GET_CHAT",
        payload: {
          sender: user._id,
          receiver: receiver?._id,
        },
      });
    }
  }, [user?._id, receiver, dispatch]);

  // get all users list
  useEffect(() => {
    // Event listener for receiving new messages
    socket.on("receive-message", (message) => {
      // setMessages((prevMessages) => [...prevMessages, message]);
      console.log(message, "message fromsocket");
      dispatch(
        setMessages({
          message: message,
        })
      );
      // receiveSoundplay();
    });
  }, []);

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      // Emit the message to the server
      socket.emit("send-message", {
        message,
        sender: user._id,
        receiver: receiver?._id,
      });

      setMessage("");
      // sendSoundplay();
    }
  };

  return (
    <div
      className={`bg-orange-50 absolute bottom-0 right-10 ${
        openChatWindow ? "h-1/2" : "h-0 cursor-pointer"
      } w-96 shadow-2xl border rounded-t-md px-5 py-5 font-sans`}
    >
      <div
        className="flex justify-between transform -translate-y-2 items-center border-b border-orange-500"
        onClick={() => {
          setopenChatWindow(!openChatWindow);
        }}
      >
        <div className="text-xl ">Chat</div>
        {receiver !== undefined && (
          <div className="flex justify-between items-center mt-2">
            <div className="text-xl font-bold">{receiver?.name}</div>
          </div>
        )}
        {openChatWindow && (
          <Close
            className="text-red-600 cursor-pointer"
            onClick={() => {
              setopenChatWindow(false);
            }}
          />
        )}
        {!openChatWindow && <ChatBubble />}
      </div>

      {openChatWindow && (
        <>
          {receiver !== undefined && (
            <button
              onClick={() => {
                dispatch(setReceiver({ receiver: undefined }));
              }}
            >
              <ArrowBack />
            </button>
          )}
          <div className="h-80 overflow-y-auto">
            {/* receiver */}
            {/* <ReceiverCard /> */}
            {/* sender */}
            {/* <SenderCard content="hello" username="username" /> */}
            <div className="overflow-y-auto">
              {receiver === undefined &&
                user?.role === "ADMIN" &&
                userList?.map((chatuser) => {
                  return (
                    user?._id !== chatuser?._id && (
                      <ChatUser
                        key={chatuser?._id}
                        userName={chatuser?.name}
                        onClick={() => {
                          dispatch(setReceiver({ receiver: chatuser }));
                        }}
                      />
                    )
                  );
                })}
              {receiver === undefined &&
                user?.role === "USER" &&
                userList?.map((chatuser) => {
                  return (
                    chatuser?.role === "ADMIN" && (
                      <ChatUser
                        key={chatuser?._id}
                        userName={chatuser?.name}
                        onClick={() => {
                          dispatch(setReceiver({ receiver: chatuser }));
                        }}
                      />
                    )
                  );
                })}
            </div>
            <div className="overflow-y-auto  md:h-[30vh] lg: scroll-mt-0">
              {receiver !== undefined &&
                messages?.map((msg, index) => {
                  return (
                    <div
                      key={index}
                      className={`mb-2 chat ${
                        msg?.sender === user?._id ? "chat-end  " : "chat-start"
                      }`}
                    >
                      <div
                        className={`${
                          msg?.sender === user?._id
                            ? " chat-bubble bg-blue-500 text-white  "
                            : "bg-gray-200 text-black "
                        } p-2 chat-bubble `}
                      >
                        {msg.message}
                      </div>
                    </div>
                  );
                })}
              <div ref={bottomRef} />
            </div>
          </div>
        </>
      )}
      {openChatWindow && receiver !== undefined && (
        <div className="bottom-2 absolute space-x-2 flex">
          <input
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            value={message}
            className="w-80 h-8 px-3 bg-orange-200 rounded-2xl focus:outline-none tracking-wider text-base"
            placeholder="Type Here"
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSendMessage();
              }
            }}
          />
          <button className=" " onClick={handleSendMessage}>
            <Send />
          </button>
        </div>
      )}
    </div>
  );
}

export default Chat;

const ChatUser = ({ userName, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex justify-between items-center hover:bg-slate-100 px-2 py-1.5 rounded-md hover:shadow-md cursor-pointer "
    >
      <div className="flex space-x-3">
        <div className="avatar online placeholder">
          <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
            <span className="text-xl">{userName[0]}</span>
          </div>
        </div>
        <div>
          <div className="font-semibold">{userName}</div>
          <div className="text-sm truncate w-36">
            Here is the message here is the new
          </div>
        </div>
      </div>
      <div className="text-xs">{moment().format("MMM Do YYYY, h:mm a")}</div>
    </div>
  );
};
