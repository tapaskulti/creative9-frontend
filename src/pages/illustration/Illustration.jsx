import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Delete } from "@mui/icons-material";
import Footer from "../../components/Footer";

function Illustration() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { adminView } = useSelector((state) => state.user);
  const { categories } = useSelector((state) => state.category);
  const [openModal, setOpenModal] = useState(false);

  const [categoryTitle, setcategoryTitle] = useState();
  const [categoryPicture, setcategoryPicture] = useState();
  const [deleteConfirmationModalCategory, setdeleteConfirmationModalCategory] =
    useState(false);

  const formData = new FormData();

  useEffect(() => {
    dispatch({
      type: "GET_ALL_CATEGORY",
    });
  }, []);

  const handleCategoryCreate = () => {
    formData.append("name", categoryTitle);
    formData.append("categoryImage", categoryPicture);

    dispatch({
      type: "CREATE_CATEGORY",
      payload: {
        body: formData,
      },
    });
    setOpenModal(false);
  };

  return (
    <>
      <div
        onClick={() => {
          setOpenModal(false);
        }}
        className={`bg-black/50 absolute w-full h-screen z-30  ${
          openModal ? "visible" : "hidden"
        }  `}
      ></div>
      <div
        className={`bg-white absolute w-1/3 h-1/3 z-40 top-1/3 right-1/3 rounded-md  ${
          openModal ? "visible" : "hidden"
        }`}
      >
        <div className="px-5 py-5 text-2xl border-b-2">Create Category</div>
        <div className="px-5 py-3 space-y-2">
          <div className="space-y-3">
            <div className="">Select category Image</div>
            <input
              type="file"
              name=""
              value=""
              onChange={(e) => {
                console.log(e.target.files[0]);
                setcategoryPicture(e.target.files[0]);
              }}
            />
          </div>

          <div className="space-y-3">
            <div>Category Name</div>
            <input
              onChange={(e) => {
                setcategoryTitle(e.target.value);
              }}
              type="text"
              className="border-b border-black focus:outline-none"
            />
          </div>
        </div>

        <div className="flex justify-end px-5 py-5 space-x-3">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            className="px-2 text-red-500 border border-red-500 rounded-lg "
          >
            Cancel
          </button>
          <button
            onClick={handleCategoryCreate}
            className="px-2 text-white bg-teal-700 rounded-lg "
          >
            Save
          </button>
        </div>
      </div>
      <div className="h-screen w-screen">
        <Header />
        <div className="pt-10">
          {/* card */}
          {adminView && (
            <div className="flex justify-end px-10 py-2">
              <div
                // to="/Illustration/create"
                onClick={() => {
                  setOpenModal(true);
                }}
                className="font-sans text-xl text-center text-white bg-teal-800 rounded-md cursor-pointer wide w-52"
              >
                Create Illustration
              </div>
            </div>
          )}
          <div className="space-y-10">
            <div className="px-5 sm:px-10 font-sans text-xl sm:text-2xl lg:text-3xl border-b pb-3 font-bold text-stone-700">
              Illustration Categories
            </div>
            <div className="h-[80vh] overflow-y-auto">
              <div className="grid gap-10 place-content-center md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4  px-3 md:px-10">
                {categories.map((category) => (
                  <div
                    className="w-80 lg:w-72 xl:w-80 border border-slate-200 p-5 shadow-lg px-5 md:px-2 py-5 rounded-lg hover:shadow-xl"
                    key={category._id}
                  >
                    <div className="flex">
                      <div className="w-[90%] h-14 font-sans text-lg md:text-xl font-semibold leading-tight tracking-tighter text-center">
                        {category?.name}
                      </div>
                      {adminView && (
                        <button
                          className="w-[10%] flex justify-end"
                          onClick={() => {
                            dispatch({
                              type: "DELETE_CATEGORY",
                              payload: {
                                categoryId: category._id,
                              },
                            });
                            setdeleteConfirmationModalCategory(true);
                          }}
                        >
                          <Delete className="text-red-500" />
                        </button>
                      )}
                    </div>
                    <Link to={`/Illustration/${category._id}/Portfolio`}>
                      <div className="w-full h-96">
                        <img
                          src={category?.picture?.secure_url}
                          className="object-cover w-full h-full rounded-md"
                        />
                      </div>
                    </Link>
                    <div className="text-center">
                      <button
                        className="bg-gradient-to-r text-center from-[#FF6B00] to-[#d71d00f3] hover:from-[#d71d00f3] hover:to-[#FF6B00] text-lg rounded-md text-white px-12 py-1 mt-3 uppercase font-semibold"
                        onClick={() => {
                          navigate(`/Illustration/${category._id}/Portfolio`);
                        }}
                      >
                        View More
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-10">
                <Footer />
              </div>
              
            </div>
            
          </div>
        </div>
        
      </div>
    </>
  );
}

export default Illustration;
