import { useState } from "react";
import image1 from "../assets/unnamed.png";
import image2 from "../assets/wide_16x9.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Person, Star } from "@mui/icons-material";
import { useSelector } from "react-redux";

function IllustrationCard() {
  const { adminView } = useSelector((state) => state.user);
  const [priceSction, setpriceSction] = useState({
    basic: true,
    standard: false,
    premium: false
  });
  return (
    <div className="flex justify-between space-x-10">
      <div>
        <Carousel className="w-80 h-80 ">
          <div>
            <img src={image1} className="rounded-lg" />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src={image2} className="rounded-lg" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src={image1} className="rounded-lg" />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </div>
      <div className="font-sans space-y-3 w-1/2">
        <div className="text-xl">This Is title</div>
        <div>
          <div className="text-stone-500 font-semibold border-b">About</div>
          <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book.
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="text-stone-500 font-semibold">Ratings:</div>
          <div>
            <Star className="text-[#0363af]/50" />
            <Star className="text-[#0363af]/50" />
            <Star className="text-[#0363af]/50" />
            <Star className="text-[#0363af]/50" />
          </div>
        </div>
        <div className="">
          <div className="text-stone-500 font-semibold">Reviews:</div>
          <div className="space-y-2">
            <div className="border  px-2 py-2 rounded-lg shadow-lg">
              <div className="flex items-center space-x-3">
                <Person className="text-[#0363af]/50" />
                <div className="text-stone-500">User name</div>
              </div>
              <div className="truncate">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur vel veritatis sed sint eveniet repellendus odit
                expedita fuga? Architecto, aliquam?
              </div>
            </div>
            <div className="border  px-2 py-2 rounded-lg shadow-lg">
              <div className="flex items-center space-x-3">
                <Person className="text-[#0363af]/50" />
                <div className="text-stone-500">User name</div>
              </div>
              <div className="truncate">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur vel veritatis sed sint eveniet repellendus odit
                expedita fuga? Architecto, aliquam?
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/3 h-1/2 font-sans text-xl border px-2 py-2 rounded-md shadow-lg ">
        <div className="flex justify-around ">
          <div
            className={`hover:border-b-2 ${
              priceSction?.basic
                ? "border-b-2 border-orange-600 text-orange-700"
                : "hover:border-b-2 "
            } cursor-pointer `}
            onClick={() => {
              setpriceSction({
                basic: true,
                standard: false,
                premium: false
              });
            }}
          >
            Basic
          </div>
          <div
            className={`hover:border-b-2 ${
              priceSction?.standard &&
              "border-b-2 border-orange-600 text-orange-700"
            } cursor-pointer `}
            onClick={() => {
              setpriceSction({
                basic: false,
                standard: true,
                premium: false
              });
            }}
          >
            Standard
          </div>
          <div
            className={`hover:border-b-2 ${
              priceSction?.premium &&
              "border-b-2 border-orange-600 text-orange-700"
            } cursor-pointer `}
            onClick={() => {
              setpriceSction({
                basic: false,
                standard: false,
                premium: true
              });
            }}
          >
            Premium
          </div>
        </div>
        <div className="h-">
          {/* basic */}
          {priceSction?.basic && (
            <div className="py-3">
              <div className="text-stone-500">You'll get</div>
              <div className="flex items-center space-x-2 px-10">
                <div className=" rounded-full bg-orange-700 w-3 h-3"></div>
                <div>Feature 1</div>
              </div>
              <div className="flex items-center space-x-2 px-10">
                <div className=" rounded-full bg-orange-700 w-3 h-3"></div>
                <div>Feature 1</div>
              </div>
              <div className="flex items-center space-x-2 px-10">
                <div className=" rounded-full bg-orange-700 w-3 h-3"></div>
                <div>Feature 1</div>
              </div>
              <div className="flex items-center space-x-2 px-10">
                <div className=" rounded-full bg-orange-700 w-3 h-3"></div>
                <div>Feature 1</div>
              </div>{" "}
            </div>
          )}
          {priceSction?.standard && (
            <div className="py-3">
              <div className="text-stone-500">You'll get</div>
              <div className="flex items-center space-x-2 px-10">
                <div className=" rounded-full bg-orange-700 w-3 h-3"></div>
                <div>Feature 2</div>
              </div>
              <div className="flex items-center space-x-2 px-10">
                <div className=" rounded-full bg-orange-700 w-3 h-3"></div>
                <div>Feature 2</div>
              </div>
              <div className="flex items-center space-x-2 px-10">
                <div className=" rounded-full bg-orange-700 w-3 h-3"></div>
                <div>Feature 2</div>
              </div>
              <div className="flex items-center space-x-2 px-10">
                <div className=" rounded-full bg-orange-700 w-3 h-3"></div>
                <div>Feature 2</div>
              </div>{" "}
            </div>
          )}
          {priceSction?.premium && (
            <div className="py-3">
              <div className="text-stone-500">You'll get</div>
              <div className="flex items-center space-x-2 px-10">
                <div className=" rounded-full bg-orange-700 w-3 h-3"></div>
                <div>Feature 3</div>
              </div>
              <div className="flex items-center space-x-2 px-10">
                <div className=" rounded-full bg-orange-700 w-3 h-3"></div>
                <div>Feature 3</div>
              </div>
              <div className="flex items-center space-x-2 px-10">
                <div className=" rounded-full bg-orange-700 w-3 h-3"></div>
                <div>Feature 3</div>
              </div>
              <div className="flex items-center space-x-2 px-10">
                <div className=" rounded-full bg-orange-700 w-3 h-3"></div>
                <div>Feature 3</div>
              </div>{" "}
            </div>
          )}
        </div>

        {!adminView ? (
          <div className="items-end align-bottom flex justify-center bg-teal-700 hover:bg-teal-800 cursor-pointer rounded-md text-white justify-items-end">
            Chooose & Pay
          </div>
        ) : (
          <div className="items-end align-bottom flex justify-center bg-teal-700 hover:bg-teal-800 cursor-pointer rounded-md text-white justify-items-end">
            Update
          </div>
        )}
      </div>
    </div>
  );
}

export default IllustrationCard;
