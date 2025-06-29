import { Close } from "@mui/icons-material";
// import Header from "../../components/Header";
import { IconButton } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

// import { toast } from "react-toastify";

const ArtCreatePage = () => {
  const dispatch = useDispatch();
  const [images, setimages] = useState();
  const imageRef = useRef(null);
  const [newArt, setnewArt] = useState({});
  const [selectedImages, setSelectedImages] = useState([]);
  const navigate = useNavigate();

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

  const createArt = () => {
    const formData = new FormData();

    for (let i = 0; i < images?.length; i++) {
      formData.append("images", images[i]);
    }

    formData.append("title", newArt.title);
    formData.append("description", newArt.description);
    formData.append("artistName", newArt.artistName);
    formData.append("categoryMedium", newArt.categoryMedium);
    formData.append("width", newArt.width);
    formData.append("height", newArt.height);
    formData.append("year", newArt.year);
    formData.append("price", newArt.price);

    dispatch({
      type: "CREATE_ART",
      payload: {
        body: formData,
        navigate
      }
    });
  };

  return (
    <>
      <div className="w-screen ">
        {/* <div className=" px-20 pt-3 overflow-y-hidden">
          <Header />
        </div> */}
        <div className="px-6 2xl:px-20 pt-10">
          <div className="border-b flex justify-between">
            <div className="text-3xl font-sans "> Create New Painting</div>
            <Link to="/Painting">
              <IconButton size="50">
                <Close />
              </IconButton>
            </Link>
          </div>
          <div className="py-3 grid grid-cols-6 gap-y-10">
            <div className=" ">
              {selectedImages.length === 0 && (
                <div>
                  <button
                    onClick={() => {
                      imageRef.current.click();
                    }}
                    className="w-80 cursor-pointer h-20 border-2 border-dotted   border-[#0363af]/80  text-[#0363af] text-center justify-center flex items-center"
                  >
                    Add images
                  </button>

                  <input
                    ref={imageRef}
                    type="file"
                    multiple
                    hidden
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </div>
              )}

              {selectedImages.length > 0 && (
                <div className="grid grid-cols-3 gap-2 py-2 border-2 p-5 border-dotted   border-[#0363af]/80">
                  {selectedImages.map((image, index) => (
                    <img key={index} src={image} alt={`Image ${index}`} />
                  ))}
                </div>
              )}
              {selectedImages.length > 0 && (
                <div
                  className="flex items-center px-2 cursor-pointer text-red-600"
                  onClick={() => {
                    setimages();
                    setSelectedImages([]);
                  }}
                >
                  <FontAwesomeIcon
                    icon={faClose}
                    className="flex justify-end text-right"
                  />
                  <div>Close</div>
                </div>
              )}
            </div>
          </div>
          <div className="space-y-5 md:space-y-10 max-h-[36rem] overflow-y-auto scrollbar">
            <div>
              <div className="text-xl font-sans">Add Title</div>
              <input
                onChange={(e) => {
                  setnewArt({
                    ...newArt,
                    title: e.target.value
                  });
                }}
                type="text"
                className="border-b border-black w-full sm:w-96 focus:outline-none"
              />
            </div>
            <div>
              <div className="text-xl font-sans">Add Description</div>
              <textarea
                onChange={(e) => {
                  setnewArt({
                    ...newArt,
                    description: e.target.value
                  });
                }}
                type="text"
                className="border-b border-black w-full sm:w-96 focus:outline-none"
              />
            </div>
            <div>
              <div className="text-xl font-sans">Artist name</div>
              <input
                onChange={(e) => {
                  setnewArt({
                    ...newArt,
                    artistName: e.target.value
                  });
                }}
                type="text"
                className="border-b border-black w-full sm:w-96 focus:outline-none"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 md:gap-x-5 lg:gap-x-5 justify-between">
              <div>
                <div className="text-xl font-sans">Medium</div>
                <input
                  onChange={(e) => {
                    setnewArt({
                      ...newArt,
                      categoryMedium: e.target.value
                    });
                  }}
                  type="text"
                  className="border-b border-black w-full focus:outline-none"
                />
              </div>
              <div className="my-2 md:my-0">
                <div className="text-xl font-sans">Width</div>
                <input
                  onChange={(e) => {
                    setnewArt({
                      ...newArt,
                      width: e.target.value
                    });
                  }}
                  type="Number"
                  className="border-b border-black w-full focus:outline-none"
                />
              </div>
              <div className="my-2 lg:my-0">
                <div className="text-xl font-sans">height</div>
                <input
                  onChange={(e) => {
                    setnewArt({
                      ...newArt,
                      height: e.target.value
                    });
                  }}
                  type="Number"
                  className="border-b border-black w-full focus:outline-none"
                />
              </div>
              <div className="my-2 2xl:my-0">
                <div className="text-xl font-sans">Year</div>
                <input
                  onChange={(e) => {
                    setnewArt({
                      ...newArt,
                      year: e.target.value
                    });
                  }}
                  type="text"
                  className="border-b border-black w-full focus:outline-none"
                />
              </div>
              <div className="lg:my-2 2xl:my-0">
                <div className="text-xl font-sans">Price</div>
                <input
                  onChange={(e) => {
                    setnewArt({
                      ...newArt,
                      price: e.target.value
                    });
                  }}
                  type="Number"
                  className="border-b border-black w-full focus:outline-none"
                />
              </div>
            </div>
            <div
              onClick={createArt}
              className="text-lg cursor-pointer rounded-lg font-sans bg-[#0363af] hover:bg-[#0363af]/80 w-min px-5 py-1 text-white font-medium uppercase"
            >
              Save
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArtCreatePage;
