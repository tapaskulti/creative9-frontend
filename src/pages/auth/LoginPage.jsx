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
    password: "",
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
        body: loginPayload,
      },
    });
  };

  return (
    <div className="relative w-screen overflow-x-hidden overflow-y-hidden">
      <div className=" bg-gradient-to-t from-[#FF6B0000] to-[#feb861]  w-full absolute h-full px-52 py-52  rounded-full transform translate-x-2/3 -translate-y-20 "></div>
      <div className="pt-0">
        {/* header */}
        <Header />
        {/* content */} {/* Snaps */}
        <div className="flex justify-around overflow-x-hidden overflow-y-auto">
          {/* content */}
          <div className="w-full px-5 space-y-6 pt-28 sm:w-4/5 md:w-1/2 xl:w-2/5 2xl:w-2/6">
            <div className="font-sans text-5xl font-semibold ">Login</div>
            <div className="py-1 space-y-5">
              <div className="space-y-2">
                <div className="font-sans text-xl ">Email</div>
                <input
                  onChange={(e) => {
                    setloginPayload({
                      ...loginPayload,
                      email: e.target.value,
                    });
                  }}
                  className="border-b border-[#ff6b00] focus:outline-none w-full font-sans"
                />
              </div>
              <div className="space-y-2">
                <div className="font-sans text-xl">Password</div>
                <div className="flex">
                  <input
                    onChange={(e) => {
                      setloginPayload({
                        ...loginPayload,
                        password: e.target.value,
                      });
                    }}
                    type={passwordShow ? "text" : "password"}
                    className="border-b border-[#ff6b00] focus:outline-none w-full font-sans"
                  />
                  {passwordShow ? (
                    <FontAwesomeIcon
                      className="text-[#7c3808] cursor-pointer"
                      icon={faEye}
                      onClick={handleVisiblePassword}
                    />
                  ) : (
                    <FontAwesomeIcon
                      className="text-[#7c3808] cursor-pointer"
                      icon={faEyeSlash}
                      onClick={handleVisiblePassword}
                    />
                  )}
                </div>
              </div>
              <div className="flex items-center justify-center space-x-1 font-sans">
                <div>Don&apos;t have an Account?</div>
                <Link to="/signup" className="text-[#ff6b00]">Sign up</Link>
              </div>
              {/* <span className="loading loading-spinner loading-sm"></span> */}
              {/* bg-[#ff6b00] */}
              <button
                onClick={handleLogin}
                disabled={loading}
                className="btn btn-accent w-full text-white bg-[#ff6b00] hover:bg-[#ff6b00] hover:border-[#ff6b00] border-[#ff6b00]"
              >
                {loading ? (
                  <span className="loading loading-spinner loading-md"></span>
                ) : (
                  <span className="text-lg">Login</span>
                )}
              </button>
            </div>
            <div className="flex justify-center font-sans underline text-[#ff6b00]">
            <Link to="/signup">Forgot password?</Link>
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
              className="rounded-full w-52 h-52 border-4 border-[#FF6B00]  transform -translate-x-10
        "
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
  );
}

export default LoginPage;
