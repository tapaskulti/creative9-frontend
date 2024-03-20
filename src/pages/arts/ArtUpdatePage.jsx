import { Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

const ArtUpdatePage = () => {
  return (
    <>
      <div className="w-screen ">
        {/* <div className=" px-20 pt-3 overflow-y-hidden">
          <Header />
        </div> */}
        <div className="px-20 pt-10">
          <div className="border-b flex justify-between">
            <div className="text-3xl font-sans "> Update art</div>
            <Link to="/Painting">
              <IconButton size="50">
                <Close />
              </IconButton>
            </Link>
          </div>
          <div className="py-3 grid grid-cols-6 gap-y-10">
            <div>
              <div className="w-52 h-52 bg-gray-200 text-gray-500 text-center justify-center flex items-center">
                Add image 1
              </div>
              <img src="" alt="" />
              <input type="file" />
            </div>
            <div>
              <div className="w-52 h-52 bg-gray-200 text-gray-500 text-center justify-center flex items-center">
                Add image 2
              </div>
              <img src="" alt="" />
              <input type="file" />
            </div>
            <div>
              <div className="w-52 h-52 bg-gray-200 text-gray-500 text-center justify-center flex items-center">
                Add image 3
              </div>
              <img src="" alt="" />
              <input type="file" />
            </div>
            <div>
              <div className="w-52 h-52 bg-gray-200 text-gray-500 text-center justify-center flex items-center">
                Add image 4
              </div>
              <img src="" alt="" />
              <input type="file" />
            </div>
            <div>
              <div className="w-52 h-52 bg-gray-200 text-gray-500 text-center justify-center flex items-center">
                Add image 5
              </div>
              <img src="" alt="" />
              <input type="file" />
            </div>
            <div>
              <div className="w-52 h-52 bg-gray-200 text-gray-500 text-center justify-center flex items-center">
                Add image 6
              </div>
              <img src="" alt="" />
              <input type="file" />
            </div>
          </div>
          <div className="space-y-10">
            <div>
              <div className="text-2xl font-sans">Add Title</div>
              <input
                type="text"
                className="border-b border-black w-80 focus:outline-none"
              />
            </div>
            <div>
              <div className="text-2xl font-sans">Add Description</div>
              <textarea
                type="text"
                className="border-b border-black w-full focus:outline-none"
              />
            </div>
            <div className="flex justify-between">
              <div>
                <div className="text-2xl font-sans">Medium</div>
                <input
                  type="text"
                  className="border-b border-black w-80 focus:outline-none"
                />
              </div>
              <div>
                <div className="text-2xl font-sans">Size</div>
                <input
                  type="text"
                  className="border-b border-black w-80 focus:outline-none"
                />
              </div>
              <div>
                <div className="text-2xl font-sans">Year</div>
                <input
                  type="text"
                  className="border-b border-black w-80 focus:outline-none"
                />
              </div>
              <div>
                <div className="text-2xl font-sans">Price</div>
                <input
                  type="text"
                  className="border-b border-black w-80 focus:outline-none"
                />
              </div>
            </div>
            <div className="text-xl cursor-pointer  font-sans bg-teal-700 hover:bg-teal-600 w-min px-5 text-white font-semibold">
              Save
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArtUpdatePage;
