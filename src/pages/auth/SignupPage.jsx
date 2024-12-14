import { Link } from "react-router-dom";
import imageLandingPage from "../../assets/wide_16x9.jpg";
import Header from "../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

function SignupPage() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.user);
  const [newUser, setnewUser] = useState({});

  const handleSignup = () => {
    const payload = {
      name: newUser.firstName + " " + newUser.lastName,
      email: newUser.email,
      password: newUser.password,
    };
    dispatch({
      type: "SIGNUP",
      payload: {
        body: payload,
      },
    });
  };

  return (
    <div className="relative overflow-x-hidden overflow-y-hidden">
      <div className="hidden md:flex bg-gradient-to-t from-[#FF6B0000] to-[#feb861]  w-full absolute h-full px-52 py-52  rounded-full transform translate-x-2/3 -translate-y-20 "></div>
      <div className="pt-0">
        {/* header */}
        <Header />
        {/* content */} {/* Snaps */}
        <div className="h-[80vh] md:h-screen overflow-y-scroll">
          <div className="flex justify-around overflow-x-hidden">
            {/* content */}
            <div className="w-full px-5 space-y-6 pt-28 sm:w-4/5 md:w-1/2 xl:w-2/5 2xl:w-2/6 z-20">
              <div className="font-sans text-4xl font-semibold pb-5">Signup</div>
              <div className="py-1 space-y-5">
                <div className="flex items-center space-x-5">
                  <div className="space-y-1 grow">
                    <div className="font-sans text-sm">First Name</div>
                    <input
                      onChange={(e) => {
                        setnewUser({
                          ...newUser,
                          firstName: e.target.value,
                        });
                      }}
                      placeholder="Enter your first name"
                      className="text-sm border border-gray-300 focus:outline-none w-full font-sans rounded-md px-2 py-2.5 bg-transparent"
                    />
                  </div>
                  <div className="space-y-1 grow">
                    <div className="font-sans text-sm">Last Name</div>
                    <input
                      onChange={(e) => {
                        setnewUser({
                          ...newUser,
                          lastName: e.target.value,
                        });
                      }}
                      placeholder="Enter your last name"
                      className="text-sm border border-gray-300 focus:outline-none w-full font-sans rounded-md px-2 py-2.5 bg-transparent"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="font-sans text-sm">Email</div>
                  <input
                    onChange={(e) => {
                      setnewUser({
                        ...newUser,
                        email: e.target.value,
                      });
                    }}
                    placeholder="Enter your email"
                    className="text-sm border border-gray-300 focus:outline-none w-full font-sans rounded-md px-2 py-2.5 bg-transparent"
                  />
                </div>
                <div className="space-y-1">
                  <div className="font-sans text-sm">Password</div>
                  <input
                    onChange={(e) => {
                      setnewUser({
                        ...newUser,
                        password: e.target.value,
                      });
                    }}
                    placeholder="Enter your password"
                    className="text-sm border border-gray-300 focus:outline-none w-full font-sans rounded-md px-2 py-2.5 bg-transparent"
                  />
                </div>
                <div className="flex items-center justify-center space-x-1 font-sans">
                  <div> Have an Account?</div>
                  <Link to="/login" className="text-[#ff6b00]">Login</Link>
                </div>
                <button
                  onClick={handleSignup}
                  disabled={loading}
                  className="btn btn-accent w-full text-white bg-orange-500 hover:bg-orange-400 border-orange-500"
                >
                  {loading ? (
                    <span className="loading loading-spinner loading-md"></span>
                  ) : (
                    <span className="text-lg">Signup</span>
                  )}
                </button>
              </div>
            </div>
            {/* snaps */}
            <div className="relative hidden pt-5 space-y-2 md:block z-0">
              <img
                src={imageLandingPage}
                alt=""
                className="rounded-full size-60 2md:size-72 border-4 border-[#FF6B00] shadow-2xl shadow-[#e16d3c]   transform -translate-x-20"
              />
              <img
                src={imageLandingPage}
                alt=""
                className="rounded-full size-44 2md:size-52 border-4 border-[#FF6B00]  transform -translate-x-10"
              />

              <img
                src={imageLandingPage}
                alt=""
                className="rounded-full size-32 2md:size-40 border-4 border-[#FF6B00] transform translate-x-40 -translate-y-72"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
