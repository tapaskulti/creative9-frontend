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
      <div className=" bg-gradient-to-t from-[#FF6B0000] to-[#feb861]  w-full absolute h-full px-52 py-52  rounded-full transform translate-x-2/3 -translate-y-20 "></div>
      <div className="pt-0">
        {/* header */}
        <Header />
        {/* content */} {/* Snaps */}
        <div className="h-[80vh] md:h-screen overflow-y-scroll">
          <div className="flex justify-around overflow-x-hidden">
            {/* content */}
            <div className="w-full px-5 space-y-6 pt-28 sm:w-4/5 md:w-1/2 xl:w-2/5 2xl:w-2/6">
              <div className="font-sans text-5xl font-semibold ">Signup</div>
              <div className="py-1 space-y-5">
                <div className="flex items-center space-x-5">
                  <div className="space-y-2 grow">
                    <div className="font-sans text-xl ">First Name</div>
                    <input
                      onChange={(e) => {
                        setnewUser({
                          ...newUser,
                          firstName: e.target.value,
                        });
                      }}
                      className="border-b border-[#ff6b00] focus:outline-none w-full font-sans"
                    />
                  </div>
                  <div className="space-y-2 grow">
                    <div className="font-sans text-xl ">Last Name</div>
                    <input
                      onChange={(e) => {
                        setnewUser({
                          ...newUser,
                          lastName: e.target.value,
                        });
                      }}
                      className="border-b border-[#ff6b00] focus:outline-none w-full font-sans"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="font-sans text-xl ">Email</div>
                  <input
                    onChange={(e) => {
                      setnewUser({
                        ...newUser,
                        email: e.target.value,
                      });
                    }}
                    className="border-b border-[#ff6b00] focus:outline-none w-full font-sans"
                  />
                </div>
                <div className="space-y-2">
                  <div className="font-sans text-xl">Password</div>
                  <input
                    onChange={(e) => {
                      setnewUser({
                        ...newUser,
                        password: e.target.value,
                      });
                    }}
                    className="border-b border-[#ff6b00] focus:outline-none w-full font-sans"
                  />
                </div>
                <div className="flex items-center justify-center space-x-1 font-sans">
                  <div> Have an Account?</div>
                  <Link to="/login" className="text-[#ff6b00]">Login</Link>
                </div>
                <button
                  onClick={handleSignup}
                  disabled={loading}
                  className="btn btn-accent w-full text-white bg-[#ff6b00] hover:bg-[#ff6b00] hover:border-[#ff6b00] border-[#ff6b00]"
                >
                  {loading ? (
                    <span className="loading loading-spinner loading-md"></span>
                  ) : (
                    <span>Signup</span>
                  )}
                </button>
              </div>
            </div>
            {/* snaps */}
            <div className="relative hidden pt-5 space-y-2 md:block">
              <img
                src={imageLandingPage}
                alt=""
                className="rounded-full w-72 h-72 border-4 border-[#FF6B00] shadow-2xl shadow-[#e16d3c]   transform -translate-x-20"
              />
              <img
                src={imageLandingPage}
                alt=""
                className="rounded-full w-52 h-52 border-4 border-[#FF6B00]  transform -translate-x-10"
              />

              <img
                src={imageLandingPage}
                alt=""
                className="rounded-full w-40 h-40 border-4 border-[#FF6B00] transform translate-x-40 -translate-y-72"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
