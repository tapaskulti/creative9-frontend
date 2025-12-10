// ForgotPassword.jsx
import { useState } from "react";

import Header from "../../components/Header";
import imageLandingPage from "./../../assets/wide_16x9.jpg";
import { toast } from "react-toastify";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Alternative: Direct fetch with correct URL
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const baseUrl = import.meta.env.VITE_APP_BASE_URL;
      const response = await fetch(`${baseUrl}/user/forgotPassword`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
      });

      const data = await response.json();
      if (response.ok) {
        toast.success(
          data.message || "Check your email for reset instructions."
        );
      } else {
        toast.error(data.message || "Something went wrong.");
      }
    } catch (err) {
      toast.error("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-screen overflow-x-hidden overflow-y-hidden">
      <div className="hidden md:flex bg-gradient-to-t from-[#0363af00] to-[#0363af]  w-full absolute h-full px-52 py-52  rounded-full transform translate-x-2/3 -translate-y-20 "></div>
      <div className="pt-0">
        {/* header */}
        <Header />
        {/* content /} {/ Snaps */}
        <div className="flex justify-around overflow-x-hidden overflow-y-auto">
          {/* content */}
          <div className="w-full px-5 space-y-6 pt-28 sm:w-4/5 md:w-1/2 xl:w-2/5 2xl:w-2/6 z-20">
            <div className="font-sans text-4xl font-semibold pb-5">
              Forgot Password
            </div>
            <div className="py-1 space-y-5">
              <div className="space-y-1">
                <h2 className="font-sans text-sm">Enter your email</h2>
                <form onSubmit={handleSubmit}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="text-sm border border-gray-300 focus:outline-none w-full font-sans rounded-md px-2 py-2.5 bg-transparent"
                  />
                  <button
                    type="submit"
                    className="btn btn-accent w-full text-white bg-[#0363af] hover:bg-[#0363af]/80 border-[#0363af] mt-5"
                  >
                    {loading ? "Sending..." : "Send Reset Link"}
                  </button>
                </form>
                {loading && <p>{loading}</p>}
              </div>
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
              className="rounded-full size-44 2md:size-52 border-4 border-[#0363af]  transform -translate-x-10"
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
