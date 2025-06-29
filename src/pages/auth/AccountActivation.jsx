import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

function AccountActivation() {
  const { activationCode } = useParams();
  const [activationMsg, setactivationMsg] = useState();
  console.log(activationCode, "token");

  const accountActivation = async () => {
    const response = await axios.post(
      `${import.meta.env.VITE_APP_BASE_URL}/user/activation`,
      {
        activation_token: activationCode
      }
    );

    setactivationMsg(response.data.msg);
  };

  return (
    <div className="h-screen w-screen">
      <h1 className="text-center pt-20 text-xl">
        Click button to activate your accounts{" "}
      </h1>
      <button
        className="bg-[#0363af] hover:bg-[#0363af]/80 text-white flex justify-center px-2 py-2 text-center mx-auto"
        onClick={accountActivation}
      >
        Activate
      </button>
      {activationMsg && <h1>{activationMsg}</h1>}
    </div>
  );
}

export default AccountActivation;
