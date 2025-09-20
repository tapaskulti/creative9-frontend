import { Link, useNavigate } from "react-router-dom";
import imageLandingPage from "./../../assets/wide_16x9.jpg";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";
function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, token } = useSelector((state) => state.user);
  const [passwordShow, setpasswordShow] = useState(false);
  const [loginPayload, setloginPayload] = useState({
    email: "",
    password: ""
  });

  useEffect(() => {
    token && navigate("/Painting");
  }, [token, navigate]);

  const handleVisiblePassword = () => {
    setpasswordShow(!passwordShow);
  };

  const handleLogin = () => {
    console.log(loginPayload, "login payload");
    dispatch({
      type: "LOGIN",
      payload: {
        body: loginPayload
      }
    });
  };

  return (
    <div className="relative w-screen overflow-x-hidden overflow-y-hidden">
      <div className="hidden md:flex bg-gradient-to-t from-[#0363af00] to-[#0363af]  w-full absolute h-full px-52 py-52  rounded-full transform translate-x-2/3 -translate-y-20 "></div>
      <div className="pt-0">
        {/* header */}
        <Header />
        {/* content */} {/* Snaps */}
        <div className="flex justify-around overflow-x-hidden overflow-y-auto">
          {/* content */}
          <div className="w-full px-5 space-y-6 pt-28 sm:w-4/5 md:w-1/2 xl:w-2/5 2xl:w-2/6 z-20">
            <div className="font-sans text-4xl font-semibold pb-5">Login</div>
            <div className="py-1 space-y-5">
              <div className="space-y-1">
                <h2 className="font-sans text-sm">Username</h2>
                <input
                  onChange={(e) => {
                    setloginPayload({
                      ...loginPayload,
                      email: e.target.value
                    });
                  }}
                  placeholder="Enter your username"
                  className="text-sm border border-gray-300 focus:outline-none w-full font-sans rounded-md px-2 py-2.5 bg-transparent"
                />
              </div>
              <div className="space-y-1">
                <div className="font-sans text-sm">Password</div>
                <div className="relative">
                  <input
                    onChange={(e) => {
                      setloginPayload({
                        ...loginPayload,
                        password: e.target.value
                      });
                    }}
                    placeholder="Enter your password"
                    type={passwordShow ? "text" : "password"}
                    className="text-sm border border-gray-300 focus:outline-none w-full font-sans rounded-md px-2 py-2.5 bg-transparent"
                  />
                  <div className="absolute right-2 top-2">
                    {passwordShow ? (
                      <FontAwesomeIcon
                        className="text-slate-600 cursor-pointer w-5 h-3.5"
                        icon={faEye}
                        onClick={handleVisiblePassword}
                      />
                    ) : (
                      <FontAwesomeIcon
                        className="text-slate-600 cursor-pointer w-5 h-3.5"
                        icon={faEyeSlash}
                        onClick={handleVisiblePassword}
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-1 font-sans">
                <div>Don&apos;t have an Account?</div>
                <Link to="/signup" className="text-[#0363af]">
                  Sign up
                </Link>
              </div>
              {/* <span className="loading loading-spinner loading-sm"></span> */}
              {/* bg-[#0363af] */}
              <button
                onClick={handleLogin}
                disabled={loading}
                className="btn btn-accent w-full text-white bg-[#0363af] hover:bg-[#0363af]/80 border-[#0363af]"
              >
                {loading ? (
                  <span className="loading loading-spinner loading-md"></span>
                ) : (
                  <span className="text-lg">Login</span>
                )}
              </button>
            </div>
            <div className="flex justify-center font-sans underline text-[#0363af]">
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
          </div>
          {/* snaps */}
          <div className="relative hidden pt-5 space-y-2 md:block z-0">
            <img
              src={imageLandingPage}
              alt=""
              className="rounded-full size-60 2md:size-72 border-4 border-[#0363af] shadow-2xl shadow-[#0363af]   transform -translate-x-20"
            />
            <img
              src={imageLandingPage}
              alt=""
              className="rounded-full size-44 2md:size-52 border-4 border-[#0363af]  transform -translate-x-10
        "
            />

            <img
              src={imageLandingPage}
              alt=""
              className="rounded-full size-32 2md:size-40 border-4 border-[#0363af] transform translate-x-40 -translate-y-72"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
