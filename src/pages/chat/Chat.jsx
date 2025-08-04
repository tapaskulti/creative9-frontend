/* eslint-disable react/prop-types */
import { Close, AttachFile, Send } from "@mui/icons-material";
import Header from "../../components/Header";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import { setMessages, setReceiver } from "../../redux/chat/chat";
import EmojiPicker from "emoji-picker-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlus,
  faCircleXmark,
  faClose,
  faXmarkCircle
} from "@fortawesome/free-solid-svg-icons";
// import axios from "axios";
// import { toast } from "react-toastify";
import ModalComponent from "../../components/Modal";
import { getPayingPrice } from "../../redux/art/artSlice";
import { Circle } from "lucide-react";

const socket = io("https://creativevalley9.com", {
  path: "/api/socket.io",
  transports: ["websocket", "polling"],
  withCredentials: true
});
// const socket = io("http://localhost:5001", {
//   path: "/api/socket.io",
//   transports: ["websocket", "polling"],
//   withCredentials: true,
// });

// Add debugging for localhost
socket.on("connect", () => {
  console.log("✅ Connected to backend server:", socket.id);
});

socket.on("disconnect", (reason) => {
  console.log("❌ Disconnected from backend:", reason);
});

socket.on("connect_error", (error) => {
  console.log("🔥 Connection error:", error);
});

// const socket = io("https://hammerhead-app-4du5b.ondigitalocean.app");

const Chat = () => {
  const dispatch = useDispatch();
  const { user, userList } = useSelector((state) => state.user);
  const { messages, receiver } = useSelector((state) => state.chat);
  const { arts } = useSelector((state) => state.art);
  const { offerIllustration } = useSelector((state) => state.illustration);

  const [message, setMessage] = useState("");
  const [openEmojiPicker, setopenEmojiPicker] = useState(false);
  const bottomRef = useRef(null);
  const [images, setimages] = useState();
  const imagePickerRef = useRef();
  const [selectedImages, setSelectedImages] = useState([]);
  const [offerselection, setofferselection] = useState({
    offerCreate: "",
    paymentType: "",
    art: undefined,
    illustration: undefined,
    milestone: {
      0.21217648626684205: {
        isPaid: false,
        lastPage: null,
        price: null,
        startPage: null,
        title: "M1",
        total: null
      }
    },
    singlePaymentPrice: "",
    revisions: "",
    deliveryDays: "",
    description: "",
    numberOfFigures: "",
    sourceFile: false,
    colourIllustration: false,
    blackAndWhiteIllustration: false,
    // fullColorIllustration: false,
    backgroundScene: false,
    blackAndWhitelineDrawing: false,
    copyrightAndOwnership: false,
    pricePerIllustration: "",
    totalIllustration: "",
    totalMileStonePrice: 0,
    // painting fields
    pageSize: 0,
    canvasSize: "",
    withFrame: false,
    withoutFrame: false,
    medium: "",
    totalPainting: ""
  });

  const handleRemoveImage = (indexToRemove) => {
    const updatedImages = selectedImages.filter(
      (_, index) => index !== indexToRemove
    );
    setSelectedImages(updatedImages);
  };

  // let totalValue
  console.log("offerselection==========>", offerselection);

  console.log("mileStPrice==========>", offerselection?.totalMileStonePrice);
  //   if(offerselection.milestone!==undefined){
  //      totalValue = Object.keys(offerselection.milestone).reduce((acc,curr)=>{
  //       return acc+=offerselection.milestone[curr]["total"]
  //     },0)
  //     console.log("totalValue====>",totalValue)
  //   }

  console.log(user, "check to connect socket");

  useEffect(() => {
    // if(offerselection.milestone!==undefined){
    //   setMileStPrice(Object.keys(offerselection.milestone).reduce((acc,curr)=>{
    //     return acc+=offerselection.milestone[curr]["total"]
    //   },0))
    // }
    if (offerselection.milestone !== undefined) {
      setofferselection({
        ...offerselection,
        totalMileStonePrice: Object.keys(offerselection.milestone).reduce(
          (acc, curr) => {
            return (acc += offerselection.milestone[curr]["total"]);
          },
          0
        )
      });
    }
  }, [offerselection.milestone]);

  const [modalOpen, setModalOpen] = useState(false);
  const handleOpen = () => setModalOpen(true);

  const handleCheckout = async ({
    price,
    product_image,
    product_type,
    msg
  }) => {
    try {
      console.log("price===>", price);
      dispatch(getPayingPrice({ payingPrice: price }));
      handleOpen();

      // const response = await axios.post(
      //   "http://localhost:5001/create-payment-intent",
      //   // "http://localhost:5001/createPayment",
      //   {
      //     // const response = await axios.post(
      //     //   "https://hammerhead-app-4du5b.ondigitalocean.app/create-payment-intent",
      //     //   {
      //     artId: Math.random(),
      //     price: price,
      //     product_type: product_type,
      //     product_image: product_image,
      //   }
      // );

      localStorage.setItem("offer_single", JSON.stringify(msg));
      // console.log("Response:", response.data);
      // window.location.href = response.data.checkoutUrl;
    } catch (error) {
      console.error("Error processing payment:", error);
    }
  };

  const handleCheckoutMilestone = async ({
    price,
    product_image,
    product_type,
    msg,
    keyOfMilestone
  }) => {
    try {
      console.log("price===>", price);
      dispatch(getPayingPrice({ payingPrice: price }));
      handleOpen();
      // const response = await axios.post(
      //   "http://localhost:5001/create-payment-intent",
      //   {
      //     // const response = await axios.post(
      //     //   "https://hammerhead-app-4du5b.ondigitalocean.app/create-payment-intent",
      //     //   {
      //     artId: Math.random(),
      //     price: price,
      //     product_type: product_type,
      //     product_image: product_image,
      //   }
      // );

      localStorage.setItem("offer_milestone", JSON.stringify(msg));
      localStorage.setItem("milestone_key", keyOfMilestone);
      // console.log('Response:', response.data);
      // Redirect to Stripe checkout URL
      // window.location.href = response.data.checkoutUrl;
    } catch (error) {
      console.error("Error processing payment:", error);
    }
  };

  useEffect(() => {
    if (messages.length) {
      bottomRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end"
      });
    }
  }, [messages]);

  useEffect(() => {
    dispatch({
      type: "GET_ALL_ART"
    });
    dispatch({
      type: "GET_ALL_SERVICES_OFFER"
    });
  }, []);

  useEffect(() => {
    if (user?._id && receiver !== undefined) {
      console.log(user?._id, "check user id for socket");
      socket.emit("user-connected", user._id);
      dispatch({
        type: "GET_CHAT",
        payload: {
          sender: user._id,
          receiver: receiver?._id
        }
      });
    }
  }, [user?._id, receiver]);

  // get all users list
  useEffect(() => {
    // Event listener for receiving new messages
    socket.on("receive-message", (message) => {
      // setMessages((prevMessages) => [...prevMessages, message]);
      console.log(message, "message fromsocket");
      dispatch(
        setMessages({
          message: message
        })
      );
      // receiveSoundplay();
    });
  }, []);

  const handleSendMessage = () => {
    if (message.trim() !== "" && selectedImages.length === 0) {
      // Emit the message to the server

      socket.emit("send-message", {
        msg: {
          message,
          sender: user?._id,
          receiver: receiver?._id,
          images: selectedImages
        }
      });

      setMessage("");
      // sendSoundplay();
      setopenEmojiPicker(false);

      setimages();
      setSelectedImages([]);
    } else if (message.trim() !== "" && selectedImages.length > 0) {
      socket.emit("send-message", {
        msg: {
          message,
          sender: user._id,
          receiver: receiver?._id,
          images: selectedImages
        }
      });

      setMessage("");
      // sendSoundplay();
      setopenEmojiPicker(false);
      setimages();
      setSelectedImages([]);
    }
  };

  const handleImageChange = (e) => {
    setimages(e.target.files);

    const files = Array.from(e.target.files);
    const images = [];

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        images.push(reader.result);
        if (images.length === files.length) {
          setSelectedImages(images);
        }
      };

      reader.readAsDataURL(file);
    });
  };
  return (
    <div className="w-screen h-screen pt-5">
      <Header />

      {modalOpen && (
        <ModalComponent
          open={modalOpen}
          handleClose={() => {
            setModalOpen(false);
          }}
        />
      )}
      {/* offer create modal */}
      <dialog id="my_modal_2" className="modal ">
        <div className="modal-box rounded-md">
          <div className="font-bold text-lg border-b text-gray-500">
            Create Offer{" "}
            {offerselection?.offerCreate &&
              `for ${offerselection?.offerCreate}`}
          </div>
          {/* choose section */}
          <div className="h-[60vh] overflow-y-auto scrollbar">
            {!offerselection.offerCreate && (
              <div>
                <div className="pt-2">
                  Choose where you want to create offer
                </div>
                <div className="flex justify-evenly pt-10">
                  <button
                    onClick={() => {
                      setofferselection({
                        ...offerselection,
                        offerCreate: "Painting"
                      });
                    }}
                    className="border h-32 w-32 rounded-md text-xl hover:bg-slate-100 hover:text-black"
                  >
                    Painting
                  </button>
                  <button
                    onClick={() => {
                      setofferselection({
                        ...offerselection,
                        offerCreate: "Illustration"
                      });
                    }}
                    className="border h-32 w-32 rounded-md text-xl hover:bg-slate-100 hover:text-black"
                  >
                    Illustration
                  </button>
                </div>
              </div>
            )}
            {/* choose payment type */}
            {offerselection.offerCreate && !offerselection.paymentType && (
              <div>
                <div className="pt-2">Choose Payment Type</div>
                <div className="flex justify-evenly pt-10">
                  <button
                    onClick={() => {
                      setofferselection({
                        ...offerselection,
                        paymentType: "single_payment"
                      });
                    }}
                    className="border h-32 w-32 rounded-md text-xl hover:bg-slate-100 hover:text-black"
                  >
                    Single Payment
                  </button>
                  <button
                    onClick={() => {
                      setofferselection({
                        ...offerselection,
                        paymentType: "milestone"
                      });
                    }}
                    className="border h-32 w-32 rounded-md text-xl hover:bg-slate-100 hover:text-black"
                  >
                    Milestone
                  </button>
                </div>
              </div>
            )}

            {/* if choose painting show all paintings list */}
            {offerselection.offerCreate === "Painting" &&
              offerselection.paymentType &&
              offerselection.art === undefined && (
                <div className="py-5 ">
                  <div>Choose painting</div>

                  <div className="h-80 overflow-y-auto">
                    {arts.map((art) => {
                      return (
                        <div
                          onClick={() => {
                            setofferselection({
                              ...offerselection,
                              art: art
                            });
                          }}
                          key={art._id}
                          className="flex space-x-2 items-center border-b hover:bg-slate-100 py-3"
                        >
                          <img
                            src={art?.art[0]?.secure_url}
                            className="w-24 h-16 rounded-md bg-auto bg-no-repeat bg-center"
                          />
                          <div>{art?.title}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

            {/* if choose Illustration show all Illustration list */}
            {offerselection.offerCreate === "Illustration" &&
              offerselection.paymentType &&
              offerselection.illustration === undefined && (
                <div className="py-5 ">
                  <div>Choose Illustration</div>

                  <div className="h-80 overflow-y-auto">
                    {offerIllustration.map((illustration) => {
                      return (
                        <div
                          onClick={() => {
                            setofferselection({
                              ...offerselection,
                              illustration: illustration
                            });
                          }}
                          key={illustration._id}
                          className="flex space-x-2 items-center border-b hover:bg-slate-100 py-3"
                        >
                          <img
                            src={illustration?.picture[0]?.secure_url}
                            className="w-24 h-16 rounded-md bg-auto bg-no-repeat bg-center"
                          />
                          <div>{illustration?.title}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

            {/* form fields for Painting */}

            {offerselection.art && (
              <div className=" space-y-2">
                <div className="py-2">
                  <div>Description for Painting</div>
                  <textarea
                    className="border border-slate-300 w-full h-24 rounded-md px-2 py-1 mt-2 text-sm focus:border-slate-400 focus:outline-none"
                    placeholder="Describe your offer"
                    onChange={(e) => {
                      setofferselection({
                        ...offerselection,
                        description: e.target.value
                      });
                    }}
                  />
                </div>

                <div className="flex items-center border-b text-sm border-slate-200 pt-2 pb-4">
                  <div className="w-52">Delivery days for Painting</div>
                  <input
                    className="border border-slate-300 w-16 px-1.5 py-1.5 rounded-[4px]"
                    // placeholder="Enter your delivery days"
                    type="number"
                    onChange={(e) => {
                      setofferselection({
                        ...offerselection,
                        deliveryDays: e.target.value
                      });
                    }}
                  />
                  <span className="pl-2">Days</span>
                </div>
                <div className="flex items-center border-b text-sm border-slate-200 pt-2 pb-4">
                  <div className="w-52">Revisions for Painting</div>
                  <input
                    className="border border-slate-300 w-16 px-1.5 py-1.5 rounded-[4px]"
                    // placeholder="Enter your revisions"
                    type="number"
                    onChange={(e) => {
                      setofferselection({
                        ...offerselection,
                        revisions: e.target.value
                      });
                    }}
                  />
                </div>
                <div className="flex items-center border-b text-sm border-slate-200 pt-2 pb-4">
                  <div className="w-52">Page Size</div>
                  <input
                    className="border border-slate-300 w-40 px-1.5 py-1.5 rounded-[4px]"
                    // placeholder="Figures"
                    // type="number"
                    onChange={(e) => {
                      setofferselection({
                        ...offerselection,
                        pageSize: e.target.value
                      });
                    }}
                  />
                </div>
                <div className="flex items-center border-b text-sm border-slate-200 pt-2 pb-4">
                  <div className="w-52">Canvas Size</div>
                  <input
                    className="border border-slate-300 w-40 px-1.5 py-1.5 rounded-[4px]"
                    // placeholder="Figures"
                    onChange={(e) => {
                      setofferselection({
                        ...offerselection,
                        canvasSize: e.target.value
                      });
                    }}
                  />
                </div>
                <div className="flex items-center border-b text-sm border-slate-200 pt-2 pb-4">
                  <div className="w-52">With Frame</div>
                  <input
                    type="checkbox"
                    className="border border-slate-200 w-5 h-5 px-1.5 rounded-[4px]"
                    onChange={(e) => {
                      console.log(e.target.checked);
                      setofferselection({
                        ...offerselection,
                        withFrame: e.target.checked
                      });
                    }}
                  />
                </div>

                <div className="flex items-center border-b text-sm border-slate-200 pt-2 pb-4">
                  <div className="w-52">Without Frame</div>
                  <input
                    type="checkbox"
                    className="border border-slate-200 w-5 h-5 px-1.5 rounded-[4px]"
                    onChange={(e) => {
                      console.log(e.target.checked);
                      setofferselection({
                        ...offerselection,
                        withoutFrame: e.target.checked
                      });
                    }}
                  />
                </div>

                <div className="flex items-center border-b text-sm border-slate-200 pt-2 pb-4 w-full">
                  <div className="w-52">Medium for Painting</div>
                  <input
                    className="border border-slate-300 w-full px-1.5 py-1.5 rounded-[4px]"
                    // placeholder="Enter your total illustration"
                    onChange={(e) => {
                      setofferselection({
                        ...offerselection,
                        medium: e.target.value
                      });
                    }}
                  />
                </div>
                {/* <div className="flex justify-between pr-52 items-center">
                <div>Black and White Linedrawing </div>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    setofferselection({
                      ...offerselection,
                      blackAndWhitelineDrawing: e.target.checked,
                    });
                  }}
                />
              </div> */}
                {/* <div className="flex justify-between pr-52 items-center">
                <div>Full color Illustration </div>
                <input
                  type="checkbox"
                  className="border border-slate-300 w-16 px-1.5 rounded-sm"
                  onChange={(e) => {
                    setofferselection({
                      ...offerselection,
                      fullColorIllustration: e.target.checked,
                    });
                  }}
                />
              </div> */}
                {/* <div className="flex justify-between pr-52 items-center">
                <div>Copyright and Ownership </div>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    setofferselection({
                      ...offerselection,
                      copyrightAndOwnership: e.target.checked,
                    });
                  }}
                />
              </div> */}

                <div className="flex items-center border-b text-sm border-slate-200 pt-2 pb-4">
                  <div className="w-52">Total painting</div>
                  <input
                    className="border border-slate-300 w-16 px-1.5 py-1.5 rounded-[4px]"
                    type="number"
                    // placeholder="Enter your total illustration"
                    onChange={(e) => {
                      setofferselection({
                        ...offerselection,
                        totalPainting: e.target.value
                      });
                    }}
                  />
                </div>
              </div>
            )}

            {/* form fields for Illustration both single payment and milestone */}
            {offerselection.illustration && (
              <div className=" space-y-2">
                <div className="py-2">
                  <div>Description for Illustation</div>
                  <textarea
                    className="border border-slate-300 w-full h-24 rounded-md px-2 py-1 mt-2 text-sm focus:border-slate-400 focus:outline-none"
                    placeholder="Describe your offer"
                    onChange={(e) => {
                      setofferselection({
                        ...offerselection,
                        description: e.target.value
                      });
                    }}
                  />
                </div>

                {(offerselection.art !== undefined ||
                  offerselection.illustration !== undefined) &&
                  offerselection.paymentType === "milestone" && (
                    <div>
                      <div>
                        <h2 className="text-sm font-semibold text-black py-2">
                          Set up a milestones offer
                        </h2>
                        <div className="border border-slate-300 rounded-md px-2 py-2">
                          <div className="">
                            <div>
                              {offerselection.milestone !== undefined &&
                                Object.keys(offerselection.milestone).map(
                                  (milestonek) => {
                                    return (
                                      <>
                                        <div className="flex space-x-3.5 py-2">
                                          <input
                                            // value={}
                                            onChange={(e) => {
                                              setofferselection({
                                                ...offerselection,
                                                milestone: {
                                                  ...offerselection.milestone,
                                                  [milestonek]: {
                                                    ...offerselection.milestone[
                                                      milestonek
                                                    ],
                                                    title: e.target.value
                                                  }
                                                }
                                              });
                                            }}
                                            type="text"
                                            className="w-44 border border-slate-300 rounded-md px-1 py-2 text-sm focus:outline-none"
                                            placeholder="Milestone name"
                                          />
                                          <input
                                            type="text"
                                            placeholder="Start Page"
                                            className="w-16 border border-slate-300 rounded-md px-1 py-2 text-sm focus:outline-none"
                                            onChange={(e) => {
                                              setofferselection({
                                                ...offerselection,
                                                milestone: {
                                                  ...offerselection.milestone,
                                                  [milestonek]: {
                                                    ...offerselection.milestone[
                                                      milestonek
                                                    ],
                                                    startPage: e.target.value
                                                  }
                                                }
                                              });
                                            }}
                                          />
                                          <input
                                            type="text"
                                            placeholder="Last Page"
                                            className="w-16 border border-slate-300 rounded-md px-1 py-2 text-sm focus:outline-none"
                                            onChange={(e) => {
                                              setofferselection({
                                                ...offerselection,
                                                milestone: {
                                                  ...offerselection.milestone,
                                                  [milestonek]: {
                                                    ...offerselection.milestone[
                                                      milestonek
                                                    ],
                                                    lastPage: e.target.value
                                                  }
                                                }
                                              });
                                            }}
                                          />
                                          <input
                                            type="text"
                                            placeholder="Enter amount"
                                            className="w-20 border border-slate-300 rounded-md px-1 py-2 text-sm focus:outline-none"
                                            onChange={(e) => {
                                              setofferselection({
                                                ...offerselection,
                                                milestone: {
                                                  ...offerselection.milestone,
                                                  [milestonek]: {
                                                    ...offerselection.milestone[
                                                      milestonek
                                                    ],
                                                    price: e.target.value,
                                                    total:
                                                      e.target.value *
                                                      (offerselection.milestone[
                                                        milestonek
                                                      ]["lastPage"] -
                                                        offerselection
                                                          .milestone[
                                                          milestonek
                                                        ]["startPage"] +
                                                        1),
                                                    isPaid: false
                                                  }
                                                }
                                              });
                                            }}
                                          />
                                          <input
                                            type="text"
                                            placeholder="Total amount"
                                            className="border text-sm w-20 rounded-md px-1 py-2 focus:outline-none"
                                            value={
                                              offerselection.milestone[
                                                milestonek
                                              ]["price"] *
                                              (offerselection.milestone[
                                                milestonek
                                              ]["lastPage"] -
                                                offerselection.milestone[
                                                  milestonek
                                                ]["startPage"] +
                                                1)
                                            }
                                            onChange={() => {}}
                                          />
                                          <div
                                            className="mt-2"
                                            onClick={() => {
                                              const {
                                                [milestonek]: omittedKey,
                                                ...newObject
                                              } = offerselection.milestone;
                                              setofferselection({
                                                ...offerselection,
                                                milestone: newObject
                                              });
                                            }}
                                          >
                                            <FontAwesomeIcon
                                              icon={faCircleXmark}
                                              className="w-5 h-5"
                                            />
                                          </div>

                                          {/* <button className="bg-green-500 text-white px-3"
                              onClick={()=>{
                                setofferselection({
                                  ...offerselection,
                                  milestone: {
                                    ...offerselection.milestone,
                                    [milestonek]: {
                                      ...offerselection.milestone[milestonek],
                                      total:offerselection.milestone[milestonek]["price"]*((offerselection.milestone[milestonek]["lastPage"]-offerselection.milestone[milestonek]["startPage"])+1),
                                    },
                                  },
                                });
                                
                                console.log("milestonek======>",offerselection.milestone[milestonek])
                                
                              }}                            
                              >pay</button> */}
                                        </div>
                                      </>
                                    );
                                  }
                                )}
                              <div className="flex items-center justify-between">
                                <div
                                  onClick={() => {
                                    let newKey = Math.random();

                                    setofferselection({
                                      ...offerselection,
                                      milestone: {
                                        ...offerselection.milestone,
                                        [newKey]: {}
                                      }
                                    });
                                  }}
                                  className="text-right  cursor-pointer py-2"
                                >
                                  <div className="flex items-center space-x-2">
                                    <FontAwesomeIcon
                                      icon={faCirclePlus}
                                      className="text-green-700 w-3.5 h-3.5"
                                    />{" "}
                                    <h2 className="text-sm text-green-700 font-medium">
                                      Add a Milestone
                                    </h2>
                                  </div>
                                </div>
                                <div className="text-sm font-medium">
                                  Total Price:{" "}
                                  {offerselection?.totalMileStonePrice}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                <div className="flex items-center border-b text-sm border-slate-200 pt-2 pb-4">
                  <div className="w-52">Delivery</div>
                  <input
                    className="border border-slate-300 w-16 px-1.5 py-1.5 rounded-[4px]"
                    // placeholder="Enter your delivery days"
                    type="number"
                    onChange={(e) => {
                      setofferselection({
                        ...offerselection,
                        deliveryDays: e.target.value
                      });
                    }}
                  />
                  <span className="pl-2">Days</span>
                </div>
                <div className="flex items-center border-b text-sm border-slate-200 pt-2 pb-4">
                  <div className="w-52">Revisions</div>
                  <input
                    className="border border-slate-300 w-16 px-1.5 py-1.5 rounded-[4px]"
                    // placeholder="Enter your revisions"
                    type="number"
                    onChange={(e) => {
                      setofferselection({
                        ...offerselection,
                        revisions: e.target.value
                      });
                    }}
                  />
                </div>
                <div className="flex items-center border-b text-sm border-slate-200 pt-2 pb-4">
                  <div className="w-52">Figures</div>
                  <input
                    className="border border-slate-300 w-16 px-1.5 py-1.5 rounded-[4px]"
                    // placeholder="Figures"
                    type="number"
                    onChange={(e) => {
                      setofferselection({
                        ...offerselection,
                        numberOfFigures: e.target.value
                      });
                    }}
                  />
                </div>
                <div className="flex items-center border-b text-sm border-slate-200 pt-2 pb-4">
                  <div className="w-52">Source File </div>
                  <input
                    type="checkbox"
                    className="border border-slate-200 w-5 h-5 px-1.5 rounded-[4px]"
                    onChange={(e) => {
                      console.log(e.target.checked);
                      setofferselection({
                        ...offerselection,
                        sourceFile: e.target.checked
                      });
                    }}
                  />
                  {/* <select
                  className="border-b-2 "
                  onChange={(e) => {
                    setofferselection({
                      ...offerselection,
                      sourceFile: e.target.value,
                    });
                  }}
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select> */}
                </div>
                <div className="flex items-center border-b text-sm border-slate-200 pt-2 pb-4">
                  <div className="w-52">Colour Illustration </div>
                  <input
                    type="checkbox"
                    className="border border-slate-200 w-5 h-5 px-1.5 rounded-[4px]"
                    onChange={(e) => {
                      setofferselection({
                        ...offerselection,
                        colourIllustration: e.target.checked
                      });
                    }}
                  />
                  {/* <select
                  className="border-b-2 "
                  onChange={(e) => {
                    setofferselection({
                      ...offerselection,
                      colourIllustration: e.target.value,
                    });
                  }}
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select> */}
                </div>
                <div className="flex items-center border-b text-sm border-slate-200  pt-2 pb-4">
                  <div className="w-52">Black/White Illustration </div>
                  <input
                    type="checkbox"
                    className="border border-slate-200 w-5 h-5 px-1.5 rounded-[4px]"
                    onChange={(e) => {
                      setofferselection({
                        ...offerselection,
                        blackAndWhiteIllustration: e.target.checked
                      });
                    }}
                  />
                  {/* <select
                  className="border-b-2 "
                  onChange={(e) => {
                    setofferselection({
                      ...offerselection,
                      blackAndWhiteIllustration: e.target.value,
                    });
                  }}
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select> */}
                </div>
                <div className="flex items-center border-b text-sm border-slate-200 pt-2 pb-4">
                  <div className="w-52">Background/Scene</div>
                  <input
                    type="checkbox"
                    className="border border-slate-200 w-5 h-5 px-1.5 rounded-[4px]"
                    onChange={(e) => {
                      setofferselection({
                        ...offerselection,
                        backgroundScene: e.target.checked
                      });
                    }}
                  />
                </div>
                {/* <div className="flex justify-between pr-52 items-center">
                <div>Black and White Linedrawing </div>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    setofferselection({
                      ...offerselection,
                      blackAndWhitelineDrawing: e.target.checked,
                    });
                  }}
                />
              </div> */}
                {/* <div className="flex justify-between pr-52 items-center">
                <div>Full color Illustration </div>
                <input
                  type="checkbox"
                  className="border border-slate-300 w-16 px-1.5 rounded-sm"
                  onChange={(e) => {
                    setofferselection({
                      ...offerselection,
                      fullColorIllustration: e.target.checked,
                    });
                  }}
                />
              </div> */}
                {/* <div className="flex justify-between pr-52 items-center">
                <div>Copyright and Ownership </div>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    setofferselection({
                      ...offerselection,
                      copyrightAndOwnership: e.target.checked,
                    });
                  }}
                />
              </div> */}

                <div className="flex items-center border-b text-sm border-slate-200 pt-2 pb-4">
                  <div className="w-52">Total Illustration </div>
                  <input
                    className="border border-slate-300 w-16 px-1.5 py-1.5 rounded-[4px]"
                    type="number"
                    // placeholder="Enter your total illustration"
                    onChange={(e) => {
                      setofferselection({
                        ...offerselection,
                        totalIllustration: e.target.value
                      });
                    }}
                  />
                </div>
                <div className="flex items-center border-b text-sm border-slate-200 pt-2 pb-4">
                  <div className="w-52">Price per Illustration </div>
                  <input
                    className="border border-slate-300 w-16 px-1.5 py-1.5 rounded-[4px]"
                    type="number"
                    // placeholder="Enter your total illustration"
                    onChange={(e) => {
                      setofferselection({
                        ...offerselection,
                        pricePerIllustration: e.target.value
                      });
                    }}
                  />
                </div>
              </div>
            )}
          </div>

          {offerselection.paymentType === "milestone" && (
            <>
              <div className="flex items-center justify-between mt-2">
                <div
                  onClick={() => {
                    setofferselection(false);
                  }}
                  className="bg-slate-200 hover:bg-slate-300 hover:text-slate-900 px-5 py-2 text-slate-500 rounded-md text-center font-medium cursor-pointer"
                >
                  Back
                </div>
                <div
                  onClick={() => {
                    dispatch({
                      type: "CREATE_ORDER",
                      payload: {
                        body: {
                          user: receiver?._id,
                          orderType: offerselection.offerCreate,
                          art: offerselection.art,
                          illustration: offerselection.illustration,
                          singlePaymentPrice: offerselection.singlePaymentPrice,
                          milestone: offerselection.milestone,
                          totalMileStonePrice:
                            offerselection.totalMileStonePrice
                        }
                      }
                    });
                    socket.emit("send-message", {
                      msg: {
                        message,
                        offer: offerselection,
                        sender: user._id,
                        receiver: receiver?._id
                      }
                    });

                    setMessage("");
                    // sendSoundplay();
                    setopenEmojiPicker(false);

                    setimages();
                    setSelectedImages([]);
                    window.my_modal_2.close();
                  }}
                  className="bg-teal-500 hover:bg-[#0363af]/80 cursor-pointer px-5 py-2 text-center text-white rounded-md font-semibold"
                >
                  Send Offer
                </div>
              </div>
            </>
          )}

          <div>
            {(offerselection.art || offerselection.illustration) &&
              offerselection.paymentType === "single_payment" && (
                <div className="mt-2">
                  <div className="flex items-center border-b border-slate-200 pt-2 pb-4">
                    <div className="w-52 text-sm">Total Price</div>
                    <input
                      onChange={(e) => {
                        setofferselection({
                          ...offerselection,
                          singlePaymentPrice: e.target.value
                        });
                      }}
                      type="number"
                      className="border border-slate-300 w-16 px-1.5 py-1.5 rounded-[4px]"
                    />
                  </div>
                  <div className="flex items-center justify-between mt-5">
                    <div
                      onClick={() => {
                        setofferselection(false);
                      }}
                      className="bg-slate-200 hover:bg-slate-300 hover:text-slate-900 px-5 py-2 text-slate-500 rounded-md text-center font-medium cursor-pointer"
                    >
                      Back
                    </div>
                    <div
                      onClick={() => {
                        // create order
                        dispatch({
                          type: "CREATE_ORDER",
                          payload: {
                            body: {
                              user: receiver?._id,
                              orderType:
                                offerselection.offerCreate === "Painting"
                                  ? "Art"
                                  : "Illustration",
                              art: {
                                // offerselection.art,
                                id: offerselection?.art?._id,
                                title: offerselection.art?.title,
                                artistName: offerselection.art?.artistName,
                                image: offerselection.art?.art[0]?.secure_url,
                                medium: offerselection.art?.categoryMedium,
                                width: offerselection.art?.width,
                                height: offerselection.art?.height,
                                year: offerselection.art?.year,
                                price: offerselection.art?.price,
                                quantity: 1,
                                totalPrice: offerselection.art?.price
                              },
                              illustration: offerselection.illustration,
                              singlePaymentPrice:
                                offerselection.singlePaymentPrice,
                              milestone: offerselection.milestone
                            }
                          }
                        });

                        socket.emit("send-message", {
                          msg: {
                            message,
                            offer: offerselection,
                            sender: user._id,
                            receiver: receiver?._id
                          }
                        });

                        setMessage("");
                        window.my_modal_2.close();
                        // sendSoundplay();
                        setopenEmojiPicker(false);

                        setimages();
                        setSelectedImages([]);
                      }}
                      className="bg-teal-500 hover:bg-[#0363af]/80 cursor-pointer px-5 py-2 text-center text-white rounded-md font-semibold"
                    >
                      Send Offer
                    </div>
                  </div>
                </div>
              )}
          </div>
        </div>

        <form method="dialog" className="modal-backdrop">
          <button
            onClick={() => {
              setofferselection({
                offerCreate: "",
                paymentType: "",
                art: undefined,
                milestone: undefined,
                singlePaymentPrice: ""
              });
            }}
          >
            close
          </button>
        </form>
      </dialog>

      <div className="px-5 flex w-full">
        <div>
          {/* contacts */}
          <div className="bg-gray-100 w-80 h-12 flex items-center justify-center text-center font-semibold text-gray-400 rounded-t-xl">
            Contacts
          </div>
          <div className="space-y-2 h-[78vh] w-80 overflow-y-auto mr-2 scrollbar">
            {user?.role === "ADMIN" &&
              userList?.map((chatuser) => {
                return (
                  user?._id !== chatuser?._id && (
                    <Contact
                      key={chatuser?._id}
                      userName={chatuser?.name}
                      onClick={() => {
                        dispatch(setReceiver({ receiver: chatuser }));
                      }}
                    />
                  )
                );
              })}
            {user?.role === "USER" &&
              userList?.map((chatuser) => {
                return (
                  chatuser?.role === "ADMIN" && (
                    <Contact
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
        </div>

        {/* For Client Chat Window */}
        {receiver?.name ? (
          <div className="flex-1 bg-slate-50 relative h-[83vh] border-2 border-slate-400 rounded-xl">
            {/* chat window header */}
            <div className="bg-gray-100 w-full h-12 flex items-center text-gray-400 border-b-2 border-slate-400 rounded-t-lg">
              <div className="px-2 flex space-x-2 items-center">
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://res.cloudinary.com/dfrtdfw3l/image/upload/v1632130040/servicecreativevally/fbekl0jh9xsw1oodopuh.avif"
                />
                <div>{receiver?.name}</div>
              </div>
            </div>
            {/* chat box */}
            <div className="h-[67vh] overflow-y-auto mt-2 scrollbar">
              {receiver !== undefined &&
                messages?.map((msg, index) => {
                  return (
                    <div
                      key={index}
                      className={`mb-2 chat ${
                        msg?.sender === user?._id ? "chat-end  " : "chat-start"
                      }`}
                    >
                      {/* Date and Time */}
                      <div className="text-xs font-semibold text-gray-600 mt-1 text-right">
                        {msg.createdAt
                          ? new Date(msg.createdAt).toLocaleString()
                          : ""}
                      </div>
                      <div
                        className={`${
                          msg?.sender === user?._id
                            ? " chat-bubble bg-slate-100 border border-slate-300 text-black "
                            : "bg-gray-200 text-black "
                        } p-2 chat-bubble `}
                      >
                        <div
                          className={`${
                            msg?.images?.length >= 2 && "grid grid-cols-2 gap-1"
                          } `}
                        >
                          {msg?.images?.length > 0 &&
                            msg?.images?.map((image, index) => (
                              <div
                                key={index}
                                className="relative group w-32 h-auto"
                              >
                                <img
                                  src={image?.secure_url}
                                  alt={`Sent image ${index}`}
                                  className="rounded-md shadow-lg w-full"
                                />
                                <a
                                  href={image?.secure_url}
                                  download={`image-${index}.jpg`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="absolute top-1 right-1 bg-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition"
                                  title="Download image"
                                >
                                  <svg
                                    className="w-4 h-4 text-gray-600"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v6m0 0l-3-3m3 3l3-3M12 4v8"
                                    />
                                  </svg>
                                </a>
                              </div>
                            ))}
                        </div>

                        {(msg?.offer?.offerCreate === "Painting" ||
                          msg?.offer?.offerCreate === "Illustration") && (
                          <div>
                            <div className="bg-slate-300 text-gray-900 font-semibold rounded-t-xl text-left px-2 py-2 mb-2">
                              Offer for {msg?.offer?.offerCreate}
                            </div>
                            <div>
                              <div className="flex space-x-2">
                                <div>
                                  {msg?.offer?.art && (
                                    <img
                                      src={msg?.offer?.art?.art[0]?.secure_url}
                                      className="w-auto h-32"
                                    />
                                  )}
                                  {msg?.offer?.illustration && (
                                    <img
                                      src={
                                        msg?.offer?.illustration?.picture[0]
                                          ?.secure_url
                                      }
                                      className="w-32 h-20"
                                    />
                                  )}
                                </div>

                                <div>
                                  <div className="flex space-x-1 items-center">
                                    <div className="text-sm font-semibold">
                                      Title:
                                    </div>

                                    <div className="text-gray-600">
                                      {msg?.offer?.offerCreate === "Painting"
                                        ? `${msg?.offer?.art?.title}`
                                        : `${msg?.offer?.illustration?.title}`}
                                    </div>
                                  </div>
                                  <div className="flex space-x-1 items-center">
                                    <div className="text-sm font-semibold">
                                      Description:
                                    </div>

                                    {msg?.offer?.description && (
                                      <span className="text-gray-600">
                                        {msg?.offer?.description}
                                      </span>
                                    )}
                                  </div>
                                </div>
                              </div>
                              <br />
                              <div>
                                <div className="">
                                  {msg?.offer.deliveryDays && (
                                    <span className="text-gray-600">
                                      Delivery within{" "}
                                      <b> {msg?.offer?.deliveryDays} days </b>
                                    </span>
                                  )}
                                  <br />

                                  {msg?.offer?.revisions && (
                                    <span className="text-gray-600">
                                      {" "}
                                      {parseInt(msg?.offer?.revisions) > 1
                                        ? "Revisions"
                                        : "revision"}{" "}
                                      <b>{msg?.offer?.revisions} </b>
                                    </span>
                                  )}
                                  <br />

                                  {/* painting Fields  */}
                                  {msg?.offer?.pageSize && (
                                    <span className="text-gray-600">
                                      Page Size <b>{msg?.offer?.pageSize} </b>
                                    </span>
                                  )}
                                  <br />

                                  {msg?.offer?.pageSize && (
                                    <span className="text-gray-600">
                                      Canvas Size{" "}
                                      <b>{msg?.offer?.canvasSize} </b>
                                    </span>
                                  )}
                                  <br />

                                  {msg?.offer?.withFrame === true && (
                                    <span className="text-gray-600">
                                      With Frame{" "}
                                      <span className="font-bold">
                                        {msg?.offer?.withFrame === true && (
                                          <input type="checkbox" checked />
                                        )}
                                      </span>
                                    </span>
                                  )}
                                  <br />
                                  {msg?.offer?.withoutFrame === true && (
                                    <span className="text-gray-600">
                                      Without Frame{" "}
                                      <span className="font-bold">
                                        {msg?.offer?.withoutFrame === true && (
                                          <input type="checkbox" checked />
                                        )}
                                      </span>
                                    </span>
                                  )}

                                  <br />
                                  {msg?.offer?.medium && (
                                    <span className="text-gray-600">
                                      Medium <b>{msg?.offer?.medium} </b>
                                    </span>
                                  )}
                                  <br />

                                  {msg?.offer?.totalPainting && (
                                    <span className="text-gray-600">
                                      Total Painting{" "}
                                      <b>{msg?.offer?.totalPainting} </b>
                                    </span>
                                  )}
                                  <br />

                                  {/* painting fields */}

                                  {msg?.offer?.numberOfFigures && (
                                    <span className="text-gray-600">
                                      {" "}
                                      {parseInt(msg?.offer?.numberOfFigures) > 1
                                        ? "Figures"
                                        : "figure"}{" "}
                                      <span className="font-bold">
                                        {msg?.offer?.numberOfFigures}
                                      </span>
                                    </span>
                                  )}
                                  <br />

                                  {/* {msg?.offer?.sourceFile && (
                                    <span className="text-gray-600">
                                      Source file{" "}
                                      <span className="font-bold">
                                        {msg?.offer?.sourceFile}
                                      </span>
                                    </span>
                                  )} */}

                                  {msg?.offer?.sourceFile === true && (
                                    <span className="text-gray-600">
                                      Source file{" "}
                                      <span className="font-bold">
                                        {msg?.offer?.sourceFile === true && (
                                          <input type="checkbox" checked />
                                        )}
                                      </span>
                                    </span>
                                  )}

                                  <br />
                                  {msg?.offer?.colourIllustration == true && (
                                    <span className="text-gray-600">
                                      Colour Illustration{" "}
                                      <span className="font-bold">
                                        {console.log(msg?.offer, "test")}
                                        {msg?.offer?.colourIllustration ===
                                          true && (
                                          <input type="checkbox" checked />
                                        )}
                                      </span>
                                    </span>
                                  )}
                                  <br />
                                  {msg?.offer?.blackAndWhiteIllustration ===
                                    true && (
                                    <span className="text-gray-600">
                                      Black & White Illustration{" "}
                                      <span className="font-bold">
                                        {msg?.offer
                                          ?.blackAndWhiteIllustration ===
                                          true && (
                                          <input type="checkbox" checked />
                                        )}
                                      </span>
                                    </span>
                                  )}
                                  {/* <br />
                                  {msg?.offer?.fullColorIllustration ===
                                    true && (
                                    <span className="text-gray-600">
                                      Full Color Illustration{" "}
                                      <span className="font-bold">
                                        {msg?.offer?.fullColorIllustration ===
                                          true && (
                                          <input type="checkbox" checked />
                                        )}
                                      </span>
                                    </span>
                                  )} */}
                                  <br />
                                  {msg?.offer?.backgroundScene === true && (
                                    <span className="text-gray-600">
                                      Background/Scene{" "}
                                      <span className="font-bold">
                                        {msg?.offer?.backgroundScene ===
                                          true && (
                                          <input type="checkbox" checked />
                                        )}
                                      </span>
                                    </span>
                                  )}
                                  <br />
                                  {msg?.offer?.blackAndWhitelineDrawing ===
                                    true && (
                                    <span className="text-gray-600">
                                      Black and White Linedrawing{" "}
                                      <span className="font-bold">
                                        {msg?.offer
                                          ?.blackAndWhitelineDrawing ===
                                          true && (
                                          <input type="checkbox" checked />
                                        )}
                                      </span>
                                    </span>
                                  )}
                                  <br />
                                  {msg?.offer?.copyrightAndOwnership ===
                                    true && (
                                    <span className="text-gray-600">
                                      Copyright and ownership{" "}
                                      <span className="font-bold">
                                        {msg?.offer?.copyrightAndOwnership ===
                                          true && (
                                          <input type="checkbox" checked />
                                        )}
                                      </span>
                                    </span>
                                  )}
                                  <br />
                                  {msg?.offer?.pricePerIllustration ===
                                    true && (
                                    <span className="text-gray-600">
                                      Price per Illustration{" "}
                                      <span className="font-bold">
                                        {msg?.offer?.pricePerIllustration ===
                                          true && (
                                          <input type="checkbox" checked />
                                        )}
                                      </span>
                                    </span>
                                  )}
                                  {msg?.offer?.totalIllustration && (
                                    <span className="text-gray-600">
                                      Total Illustration{" "}
                                      <span className="font-bold">
                                        {msg?.offer?.totalIllustration}
                                      </span>
                                    </span>
                                  )}
                                </div>
                                <br />
                                {msg?.offer?.singlePaymentPrice === "" ? (
                                  <>
                                    <div className="text-gray-600">
                                      Your payment milestones:{" "}
                                    </div>
                                    <div>
                                      <div className="text-sm text-[#0363af] border-b border-[#0363af]/70">
                                        <div className="text-base font-semibold">
                                          Total Price:
                                          {msg?.offer?.totalMileStonePrice}
                                        </div>
                                        <div className="flex space-x-3 items-center mt-3">
                                          <h2 className="w-40">
                                            MileStone Name
                                          </h2>
                                          <h2 className="w-20">Page from</h2>
                                          <h2 className="w-16">Page to</h2>
                                          <h2 className="w-24">
                                            Price per page
                                          </h2>
                                          <h2 className="w-20">Total price</h2>
                                        </div>
                                      </div>
                                      {/* {msg?.offer?.milestone &&
                                        Object.values(
                                          msg?.offer?.milestone
                                        ).map((m, index) => {
                                          return (
                                            <div
                                              key={m.title}
                                              className="flex justify-between"
                                            >
                                              <div className="text-sm py-1">
                                                {m.title}
                                              </div>
                                              <div className="text-sm py-1">
                                                {`${m.startPage} to ${m.lastPage}`}
                                              </div>
                                              <div className="text-sm py-1">
                                                {m.price}
                                              </div>
                                              <div className="text-sm py-1">
                                                {m.total}
                                              </div>
                                              {m.isPaid ? (
                                                <span className="text-green-600">
                                                  Paid{" "}
                                                  <span
                                                    className="
                                            text-sm text-gray-400 italic
                                                "
                                                  >
                                                    {m && m?.paidTime}
                                                  </span>{" "}
                                                </span>
                                              ) : (
                                                <span
                                                  onClick={() => {
                                                    console.log(index, m);
                                                    console.log(
                                                      Object.values(
                                                        msg?.offer?.milestone
                                                      )[
                                                        index === 0
                                                          ? 0
                                                          : index - 1
                                                      ]
                                                    );
                                                    index === 0 ||
                                                    Object.values(
                                                      msg?.offer?.milestone
                                                    )[
                                                      index === 0
                                                        ? 0
                                                        : index - 1
                                                    ].isPaid === true
                                                      ? toast.success(`paid`)
                                                      : // handleCheckoutMilestone({
                                                        //   msg: msg,
                                                        //   price: m.price,
                                                        //   product_type:
                                                        //     msg?.offer?.offerCreate,
                                                        //   product_image:
                                                        //     msg?.offer?.art?.art[0]
                                                        //       ?.secure_url,
                                                        //   // keyOfMilestone: m,
                                                        // })
                                                        toast.warning(
                                                          `Please pay for ${
                                                            Object.values(
                                                              msg?.offer
                                                                ?.milestone
                                                            )[
                                                              index === 0
                                                                ? 0
                                                                : index - 1
                                                            ].title
                                                          } First`
                                                        );
                                                  }}
                                                  className=" bg-[#0363af] hover:bg-[#0363af]/80 px-1 py-0.5 text-white w-20 mt-1 text-sm text-center rounded-full cursor-pointer"
                                                >
                                                  Pay
                                                </span>
                                              )}
                                            </div>
                                          );
                                        })} */}

                                      {msg?.offer?.milestone &&
                                        Object.keys(msg?.offer?.milestone).map(
                                          (m) => {
                                            return (
                                              <div
                                                key={m}
                                                className="flex space-x-3 justify-between"
                                              >
                                                <div className="w-40 border border-slate-300 text-sm px-2 py-1 mt-2 rounded-md">
                                                  {msg?.offer?.milestone[m] &&
                                                    msg?.offer?.milestone[m][
                                                      "title"
                                                    ]}
                                                </div>
                                                <div className="w-20 border border-slate-300 px-2 mt-2 rounded-md">
                                                  {`${
                                                    msg?.offer?.milestone[m] &&
                                                    msg?.offer?.milestone[m][
                                                      "startPage"
                                                    ]
                                                  }`}
                                                </div>
                                                <div className="w-16 border border-slate-300 px-2 mt-2 rounded-md">
                                                  {`${
                                                    msg?.offer?.milestone[m] &&
                                                    msg?.offer?.milestone[m][
                                                      "lastPage"
                                                    ]
                                                  }`}
                                                </div>
                                                <div className="w-24 border border-slate-300 px-2 mt-2 rounded-md">
                                                  {msg?.offer?.milestone[m] &&
                                                    msg?.offer?.milestone[m][
                                                      "price"
                                                    ]}
                                                </div>
                                                <div className="w-20 border border-slate-300 px-2 mt-2 rounded-md">
                                                  {msg?.offer?.milestone[m] &&
                                                    msg?.offer?.milestone[m][
                                                      "total"
                                                    ]}
                                                </div>
                                                {msg?.offer?.milestone[m] &&
                                                msg?.offer?.milestone[m][
                                                  "isPaid"
                                                ] ? (
                                                  <span className="text-green-600">
                                                    Paid{" "}
                                                    <span className="text-sm text-gray-400 italic">
                                                      {msg?.offer?.milestone[
                                                        m
                                                      ] &&
                                                        msg?.offer?.milestone[
                                                          m
                                                        ]["paidTime"]}
                                                    </span>{" "}
                                                  </span>
                                                ) : (
                                                  <span
                                                    onClick={() => {
                                                      handleCheckoutMilestone({
                                                        msg: msg,
                                                        price:
                                                          msg?.offer?.milestone[
                                                            m
                                                          ]["total"],
                                                        product_type:
                                                          msg?.offer
                                                            ?.offerCreate,
                                                        product_image:
                                                          msg?.offer?.art
                                                            ?.art[0]
                                                            ?.secure_url,
                                                        keyOfMilestone: m
                                                      });
                                                    }}
                                                    className="bg-[#0363af] hover:bg-[#0363af]/90 px-1 py-2 w-20 mt-1  rounded-full cursor-pointer"
                                                  >
                                                    {/* <PayPalScriptProvider
                                                      options={initialOptions}
                                                    >
                                                      <PayPalButtons
                                                        style={{
                                                          shape: "rect",
                                                          layout: "vertical",
                                                          color: "gold",
                                                          label: "paypal",
                                                        }}
                                                      />
                                                    </PayPalScriptProvider> */}
                                                    <h2 className="text-white text-sm text-center">
                                                      Pay
                                                    </h2>
                                                  </span>
                                                )}
                                              </div>
                                            );
                                          }
                                        )}
                                    </div>
                                  </>
                                ) : (
                                  <>
                                    <div className="text-gray-600  flex  flex-col">
                                      <span>
                                        Total Price{" "}
                                        <span className="font-bold">
                                          {msg?.offer?.singlePaymentPrice}
                                        </span>
                                      </span>
                                      {msg?.offer?.isPaid ? (
                                        <>
                                          <span className="text-green-600">
                                            Paid{" "}
                                            <span className="text-sm text-gray-400 italic">
                                              {msg?.offer?.paidTime}
                                            </span>
                                          </span>
                                        </>
                                      ) : (
                                        <span
                                          onClick={() => {
                                            handleCheckout({
                                              msg: msg,
                                              price:
                                                msg?.offer?.singlePaymentPrice,
                                              product_type:
                                                msg?.offer?.offerCreate,
                                              product_image:
                                                msg?.offer?.art?.art[0]
                                                  ?.secure_url
                                            });
                                          }}
                                          className="bg-[#0363af] hover:bg-[#0363af]/80 px-1 py-1 text-white w-20 mt-1 text-sm text-center rounded-full cursor-pointer"
                                        >
                                          {/* <PayPalScriptProvider
                                                        options={initialOptions}
                                                      >
                                                        <PayPalButtons                                                         
                                                        />
                                                      </PayPalScriptProvider> */}
                                          Pay Now
                                        </span>
                                      )}
                                    </div>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                        )}

                        <span className="">{msg?.message}</span>
                      </div>
                    </div>
                  );
                })}
              <div ref={bottomRef} />
            </div>

            {/* messgae input field */}
            <div className="mb-2 px-2 bottom-0 absolute w-full items-center space-y-2">
              {openEmojiPicker && (
                <div className="absolute bottom-16">
                  <EmojiPicker
                    onEmojiClick={(e) => {
                      console.log(e, "emoji");
                      setMessage(message + e.emoji);
                    }}
                  />
                </div>
              )}
              {/* {selectedImages?.length > 0 && (
                <div className="absolute bottom-16 grid grid-cols-1 gap-2 px-1.5 py-1.5 bg-gray-300/50 h-40 overflow-y-auto group-hover:block">
                  <div
                    className="absolute right-2 top-2 text-black bg-white size-6 rounded-full p-0.5 cursor-pointer"
                    // onClick={setSelectedImages(false)}
                  >
                    <FontAwesomeIcon icon={faXmarkCircle} className="size-5" />
                  </div>
                  {selectedImages?.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Image ${index}`}
                      className="w-32 h-32"
                    />
                  ))}
                </div>
              )} */}

              {selectedImages.length > 0 && (
                <div className="absolute bottom-16 left-0 right-0 flex gap-2 px-2 py-2 bg-gray-300/50 h-40 overflow-x-auto">
                  {selectedImages.map((image, index) => (
                    <div
                      key={index}
                      className="relative group w-32 h-32 shrink-0"
                    >
                      {/* Image */}
                      <img
                        src={image}
                        alt={`Image ${index}`}
                        className="w-full h-full object-cover rounded"
                      />

                      {/* Delete Icon */}
                      <div
                        className="absolute top-1 right-1 text-red-500 bg-white rounded-full px-1 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        onClick={() => handleRemoveImage(index)}
                      >
                        <FontAwesomeIcon
                          icon={faXmarkCircle}
                          className="w-4 h-4"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex">
                <input
                  placeholder="Send Message"
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      handleSendMessage();
                    }
                  }}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  value={message}
                  className="relative w-full rounded-md border-2 border-slate-400 px-2 py-1.5 text-sm pr-14"
                />
                <button
                  className="absolute right-4 top-1 border-l border-slate-300 pl-2"
                  onClick={handleSendMessage}
                >
                  <Send />
                </button>
              </div>
              <input
                type="file"
                ref={imagePickerRef}
                className="hidden"
                multiple
                onChange={handleImageChange}
              />

              {selectedImages?.length === 0 ? (
                <button
                  onClick={() => {
                    imagePickerRef.current.click();
                  }}
                  className=" "
                >
                  <AttachFile className="w-5 text-green-600" />
                </button>
              ) : (
                <button
                  onClick={() => {
                    setimages();
                    setSelectedImages([]);
                  }}
                >
                  <FontAwesomeIcon
                    icon={faClose}
                    className="flex justify-end text-right text-red-500"
                  />
                </button>
              )}

              {openEmojiPicker ? (
                <button
                  onClick={() => {
                    setopenEmojiPicker(false);
                  }}
                >
                  <span>
                    <Close />
                  </span>
                </button>
              ) : (
                <button
                  onClick={() => {
                    setopenEmojiPicker(true);
                  }}
                  className="px-3"
                >
                  <span>😀</span>
                </button>
              )}

              {user?.role === "ADMIN" && (
                <button
                  onClick={() => window.my_modal_2.showModal()}
                  className="text-sm border border-slate-300 bg-slate-100 px-2 py-1 hover:bg-[#0363af] hover:text-white rounded-lg"
                >
                  Create an Offer
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="border border-slate-300 flex justify-center items-center text-xl text-gray-400 font-semibold mx-auto">
            Select a user to chat
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;

const Contact = ({ onClick, userName }) => {
  return (
    <>
      <div onClick={onClick} className="w-72 justify-between hover:bg-gray-100">
        <div className="flex space-x-2 py-1 px-2 rounded-sm justify-between">
          <div className="flex space-x-3">
            <img
              className="w-10 h-10 border border-[#ffffff] rounded-full"
              src="https://res.cloudinary.com/dfrtdfw3l/image/upload/v1632130040/servicecreativevally/fbekl0jh9xsw1oodopuh.avif"
              alt=""
            />
            <div>
              <div className="tex-base">{userName}</div>
              <div className="text-sm text-gray-500">last message</div>
            </div>
          </div>
          <div className="text-xs text-gray-500">12.04.2022</div>
        </div>
      </div>
    </>
  );
};
